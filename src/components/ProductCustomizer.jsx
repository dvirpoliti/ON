import { useState, useMemo } from 'react';
import { PRINT_OPTIONS, EMBLEM_OPTIONS, getPriceForQuantity } from '../data/products';
import { useCart } from '../store/cartStore.jsx';
import JerseyPreview from './JerseyPreview';
import { CheckIcon, SparklesIcon } from './Icons';

const MAX_NAME_LENGTH = 14;

export default function ProductCustomizer({ product, initialColor, onClose }) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(initialColor || product.colors[0]?.id || '');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [printOption, setPrintOption] = useState('none');
  const [emblem, setEmblem] = useState(product.hasEmblem ? 'club' : 'none');
  const [playerName, setPlayerName] = useState('');
  const [playerNumber, setPlayerNumber] = useState('');
  const [added, setAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const needsName = printOption === 'name' || printOption === 'name_number';
  const needsNumber = printOption === 'number' || printOption === 'name_number';

  const printCost = useMemo(() => {
    const opt = PRINT_OPTIONS.find((o) => o.id === printOption);
    return opt ? opt.price : 0;
  }, [printOption]);

  const unitPrice = getPriceForQuantity(product, quantity);
  const totalPrice = (unitPrice + printCost) * quantity;

  const currentImages = product.images[selectedColor] || product.images[product.colors[0]?.id] || [];

  const isValid =
    size !== '' &&
    (!needsName || playerName.trim().length > 0) &&
    (!needsNumber || (playerNumber !== '' && Number(playerNumber) >= 0 && Number(playerNumber) <= 99));

  function handleNumberChange(val) {
    if (val === '') { setPlayerNumber(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 0 && num <= 99) {
      setPlayerNumber(String(num));
    }
  }

  function handleAdd() {
    if (!isValid) return;
    const colorObj = product.colors.find(c => c.id === selectedColor);
    addItem(product, {
      size,
      quantity,
      color: colorObj?.name || '',
      colorId: selectedColor,
      print: printOption,
      emblem,
      playerName: needsName ? playerName.trim() : '',
      playerNumber: needsNumber ? playerNumber : '',
      printCost,
      unitPrice,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose?.();
    }, 1200);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-black">{product.name}</h3>
            <p className="text-sm text-gray-500">התאמה אישית</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition text-2xl bg-transparent border-none cursor-pointer p-1">✕</button>
        </div>

        <div className="p-5 space-y-6">
          {/* Image gallery */}
          {currentImages.length > 0 && (
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={currentImages[currentImageIndex] || currentImages[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {currentImages.length > 1 && (
                <div className="flex gap-2 p-3 justify-center">
                  {currentImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer ${
                        currentImageIndex === i ? 'border-black' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Jersey Preview (for customizable without images) */}
          {product.customizable && currentImages.length === 0 && (
            <div className="bg-gray-50 rounded-xl p-6">
              <JerseyPreview
                playerName={playerName}
                playerNumber={playerNumber}
                emblem={emblem}
                productName={product.name}
              />
            </div>
          )}

          {/* Color selector */}
          {product.colors.length > 1 && (
            <div>
              <label className="block text-sm font-bold text-black mb-3">צבע</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => { setSelectedColor(color.id); setCurrentImageIndex(0); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
                      selectedColor === color.id
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-black'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full ${color.border && selectedColor !== color.id ? 'border border-gray-300' : ''}`}
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size selection */}
          <div>
            <label className="block text-sm font-bold text-black mb-3">
              מידה <span className="text-brand-red">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
                    size === s
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-black'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-bold text-black mb-3">כמות</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-500 hover:text-black transition bg-transparent border-none cursor-pointer text-lg font-bold"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm font-bold min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-500 hover:text-black transition bg-transparent border-none cursor-pointer text-lg font-bold"
                >
                  +
                </button>
              </div>
              {product.pricing.length > 1 && (
                <span className="text-xs text-gray-400">
                  {unitPrice < product.pricing[0].price ? (
                    <span className="text-green-600 font-bold">₪{unitPrice} ליחידה — מחיר כמותי!</span>
                  ) : (
                    `₪${unitPrice} ליחידה`
                  )}
                </span>
              )}
            </div>

            {/* Quantity tier info */}
            {product.pricing.length > 1 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {product.pricing.map((tier, i) => (
                  <span
                    key={i}
                    className={`inline-block text-[10px] px-2 py-0.5 rounded-full ${
                      quantity >= tier.min && (i === product.pricing.length - 1 || quantity < product.pricing[i + 1]?.min)
                        ? 'bg-green-100 text-green-700 font-bold'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {tier.min === 1 ? 'יח׳ בודדת' : `${tier.min}+ יח׳`}: ₪{tier.price}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Print options */}
          {product.customizable && (
            <>
              <div>
                <label className="block text-sm font-bold text-black mb-3">הדפסה</label>
                <div className="space-y-2">
                  {PRINT_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                        printOption === opt.id
                          ? 'border-black bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="print"
                        value={opt.id}
                        checked={printOption === opt.id}
                        onChange={(e) => setPrintOption(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        printOption === opt.id ? 'border-black' : 'border-gray-300'
                      }`}>
                        {printOption === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                      </div>
                      <span className="flex-1 text-sm font-medium">{opt.label}</span>
                      {opt.price > 0 && (
                        <span className="text-xs text-brand-red font-bold">+₪{opt.price}</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Name input */}
              {needsName && (
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    שם השחקן <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value.slice(0, MAX_NAME_LENGTH))}
                    placeholder="הזינו את שם השחקן"
                    maxLength={MAX_NAME_LENGTH}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition"
                    dir="ltr"
                  />
                  <p className="text-xs text-gray-400 mt-1">עד {MAX_NAME_LENGTH} תווים</p>
                </div>
              )}

              {/* Number input */}
              {needsNumber && (
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    מספר השחקן <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="number"
                    value={playerNumber}
                    onChange={(e) => handleNumberChange(e.target.value)}
                    placeholder="0-99"
                    min="0"
                    max="99"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition text-center"
                    dir="ltr"
                  />
                </div>
              )}

              {/* Emblem selection */}
              {product.hasEmblem && (
                <div>
                  <label className="block text-sm font-bold text-black mb-3">סמל</label>
                  <div className="flex flex-wrap gap-2">
                    {EMBLEM_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setEmblem(opt.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
                          emblem === opt.id
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-black'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Price summary */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">מחיר ליחידה</span>
              <span className="text-sm font-medium">₪{unitPrice}</span>
            </div>
            {printCost > 0 && (
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-600">הדפסה</span>
                <span className="text-sm font-medium text-brand-red">+₪{printCost}</span>
              </div>
            )}
            {quantity > 1 && (
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-gray-600">כמות</span>
                <span className="text-sm font-medium">×{quantity}</span>
              </div>
            )}
            <div className="border-t border-gray-200 mt-3 pt-3 flex items-center justify-between">
              <span className="text-base font-bold">סה״כ</span>
              <span className="text-lg font-black text-black">₪{totalPrice}</span>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAdd}
            disabled={!isValid || added}
            className={`w-full py-4 rounded-xl text-base font-bold transition-all duration-200 border-none cursor-pointer flex items-center justify-center gap-2 ${
              added
                ? 'bg-green-500 text-white'
                : isValid
                  ? 'bg-brand-red hover:bg-brand-red-hover text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-200'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {added ? (
              <>
                <CheckIcon className="w-5 h-5" />
                נוסף לעגלה!
              </>
            ) : (
              <>
                <SparklesIcon className="w-5 h-5" />
                הוסף לעגלה — ₪{totalPrice}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
