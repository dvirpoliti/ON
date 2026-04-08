import { useState, useMemo } from 'react';
import { PRINT_OPTIONS, getPriceForQuantity } from '../data/products';
import { useCart } from '../store/cartStore.jsx';
import JerseyPreview from './JerseyPreview';
import { CheckIcon } from './Icons';

const MAX_NAME_LENGTH = 14;

export default function ProductCustomizer({ product, initialColor, onClose }) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(initialColor || product.colors[0]?.id || '');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [printOption, setPrintOption] = useState('none');
  const [clubLogo, setClubLogo] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [playerNumber, setPlayerNumber] = useState('');
  const [added, setAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previewApplied, setPreviewApplied] = useState(false);
  const [previewName, setPreviewName] = useState('');
  const [previewNumber, setPreviewNumber] = useState('');
  const [previewClubLogo, setPreviewClubLogo] = useState(true);

  const needsName = printOption === 'name' || printOption === 'name_number';
  const needsNumber = printOption === 'number' || printOption === 'name_number';

  const printCost = useMemo(() => {
    const opt = PRINT_OPTIONS.find((o) => o.id === printOption);
    return opt ? opt.price : 0;
  }, [printOption]);

  const unitPrice = getPriceForQuantity(product, quantity);
  const totalPrice = (unitPrice + printCost) * quantity;

  const currentImages = product.images[selectedColor] || product.images[product.colors[0]?.id] || [];

  const canApplyPreview = needsName || needsNumber;
  const hasPreviewInput = (needsName && playerName.trim().length > 0) || (needsNumber && playerNumber !== '');

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

  function applyPreview() {
    setPreviewName(needsName ? playerName.trim() : '');
    setPreviewNumber(needsNumber ? playerNumber : '');
    setPreviewClubLogo(clubLogo);
    setPreviewApplied(true);
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
      emblem: clubLogo ? 'club' : 'on_only',
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-black transition border-none cursor-pointer shadow-sm"
        >
          ✕
        </button>

        {/* Image gallery */}
        <div className="bg-[#f5f5f5]">
          <div className="aspect-[4/3] sm:aspect-[3/2] flex items-center justify-center overflow-hidden">
            {currentImages.length > 0 ? (
              <img
                src={currentImages[currentImageIndex] || currentImages[0]}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            ) : product.customizable ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                <JerseyPreview
                  playerName={previewApplied ? previewName : ''}
                  playerNumber={previewApplied ? previewNumber : ''}
                  emblem={previewApplied ? (previewClubLogo ? 'club' : 'on_only') : (clubLogo ? 'club' : 'on_only')}
                  productName={product.name}
                />
              </div>
            ) : (
              <div className="text-center text-gray-300">
                <svg className="w-16 h-16 mx-auto opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          {currentImages.length > 1 && (
            <div className="flex gap-2 px-4 pb-4 justify-center">
              {currentImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                    currentImageIndex === i ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 space-y-7">
          {/* Title + price */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#111] leading-tight">{product.name}</h2>
            <p className="text-sm text-[#666] mt-2 leading-relaxed">{product.description}</p>
            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-2xl font-black text-[#111]">₪{unitPrice}</span>
              {product.originalPrice && product.originalPrice > unitPrice && (
                <span className="text-sm text-[#999] line-through">₪{product.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Quantity pricing table */}
          {product.pricing.length > 1 && (
            <div>
              <p className="text-xs font-bold text-[#999] uppercase tracking-widest mb-3">מחירון כמותי</p>
              <div className="grid grid-cols-3 gap-2">
                {product.pricing.map((tier, i) => {
                  const isActive = quantity >= tier.min && (i === product.pricing.length - 1 || quantity < product.pricing[i + 1]?.min);
                  return (
                    <div key={i} className={`text-center rounded-xl py-3 transition-all ${
                      isActive ? 'bg-brand-red text-white' : 'bg-[#f5f5f5] text-[#111]'
                    }`}>
                      <span className={`block text-[10px] uppercase tracking-wider ${isActive ? 'text-white/70' : 'text-[#999]'}`}>
                        {tier.min === 1 ? 'יחידה' : `${tier.min}+ יח׳`}
                      </span>
                      <span className="block text-lg font-black mt-0.5">₪{tier.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Color */}
          {product.colors.length > 1 && (
            <div>
              <p className="text-xs font-bold text-[#999] uppercase tracking-widest mb-3">
                צבע — <span className="text-[#111] normal-case">{product.colors.find(c => c.id === selectedColor)?.name}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => { setSelectedColor(color.id); setCurrentImageIndex(0); }}
                    className={`w-9 h-9 rounded-full transition-all cursor-pointer border-2 ${
                      selectedColor === color.id
                        ? 'border-[#111] scale-110 ring-2 ring-[#111]/20'
                        : color.border ? 'border-[#e5e5e5] hover:border-[#999]' : 'border-transparent hover:border-[#ccc]'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          <div>
            <p className="text-xs font-bold text-[#999] uppercase tracking-widest mb-3">
              מידה <span className="text-brand-red">*</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[44px] h-11 px-3 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer ${
                    size === s
                      ? 'bg-[#111] text-white border-[#111]'
                      : 'bg-white text-[#111] border-[#e5e5e5] hover:border-[#111]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-xs font-bold text-[#999] uppercase tracking-widest mb-3">כמות</p>
            <div className="flex items-center gap-1 bg-[#f5f5f5] rounded-xl w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 text-[#666] hover:text-black transition bg-transparent border-none cursor-pointer text-xl font-bold rounded-r-xl"
              >−</button>
              <span className="w-12 text-center text-base font-black">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 text-[#666] hover:text-black transition bg-transparent border-none cursor-pointer text-xl font-bold rounded-l-xl"
              >+</button>
            </div>
          </div>

          {/* Customization */}
          {product.customizable && (
            <div className="space-y-5 border-t border-[#e5e5e5] pt-7">
              <h3 className="text-base font-black text-[#111]">התאמה אישית</h3>

              {/* ON logo notice */}
              <div className="bg-[#f5f5f5] rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xs">ON</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111]">לוגו ON כלול תמיד</p>
                  <p className="text-xs text-[#999]">מופיע על כל מוצר ממותג</p>
                </div>
              </div>

              {/* Club logo toggle */}
              {product.hasEmblem && (
                <label className="flex items-center justify-between p-4 bg-white border-2 border-[#e5e5e5] rounded-xl cursor-pointer hover:border-[#111] transition-colors">
                  <div>
                    <p className="text-sm font-bold text-[#111]">סמל המועדון</p>
                    <p className="text-xs text-[#999]">הוסף את סמל אליצור יבנה</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={clubLogo}
                      onChange={(e) => setClubLogo(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-12 h-7 rounded-full transition-colors ${clubLogo ? 'bg-brand-red' : 'bg-[#ddd]'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-1 transition-all ${clubLogo ? 'left-6' : 'left-1'}`} />
                    </div>
                  </div>
                </label>
              )}

              {/* Print options */}
              <div>
                <p className="text-xs font-bold text-[#999] uppercase tracking-widest mb-3">הדפסה</p>
                <div className="grid grid-cols-2 gap-2">
                  {PRINT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setPrintOption(opt.id); setPreviewApplied(false); }}
                      className={`p-3 rounded-xl text-sm font-bold border-2 transition-all cursor-pointer text-right ${
                        printOption === opt.id
                          ? 'bg-[#111] text-white border-[#111]'
                          : 'bg-white text-[#111] border-[#e5e5e5] hover:border-[#111]'
                      }`}
                    >
                      {opt.label}
                      {opt.price > 0 && (
                        <span className={`block text-xs mt-0.5 ${printOption === opt.id ? 'text-white/70' : 'text-brand-red'}`}>+₪{opt.price}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Number inputs + Apply preview button */}
              {(needsName || needsNumber) && (
                <div className="space-y-4">
                  {needsName && (
                    <div>
                      <label className="block text-sm font-bold text-[#111] mb-2">
                        שם השחקן <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={playerName}
                        onChange={(e) => { setPlayerName(e.target.value.slice(0, MAX_NAME_LENGTH)); setPreviewApplied(false); }}
                        placeholder="הקלד שם..."
                        maxLength={MAX_NAME_LENGTH}
                        className="w-full px-4 py-3.5 border-2 border-[#e5e5e5] rounded-xl text-sm font-medium focus:outline-none focus:border-[#111] transition"
                        dir="ltr"
                      />
                      <p className="text-[10px] text-[#999] mt-1">עד {MAX_NAME_LENGTH} תווים</p>
                    </div>
                  )}

                  {needsNumber && (
                    <div>
                      <label className="block text-sm font-bold text-[#111] mb-2">
                        מספר השחקן <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="number"
                        value={playerNumber}
                        onChange={(e) => { handleNumberChange(e.target.value); setPreviewApplied(false); }}
                        placeholder="0–99"
                        min="0"
                        max="99"
                        className="w-full px-4 py-3.5 border-2 border-[#e5e5e5] rounded-xl text-sm font-medium focus:outline-none focus:border-[#111] transition text-center"
                        dir="ltr"
                      />
                    </div>
                  )}

                  {/* APPLY PREVIEW BUTTON */}
                  <button
                    onClick={applyPreview}
                    disabled={!hasPreviewInput}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold border-2 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      hasPreviewInput
                        ? 'bg-[#111] text-white border-[#111] hover:bg-[#333]'
                        : 'bg-[#f5f5f5] text-[#ccc] border-[#e5e5e5] cursor-not-allowed'
                    }`}
                  >
                    {previewApplied ? '✓ הדמיה מוכנה' : 'החל — צפה בהדמיה'}
                  </button>

                  {/* Live preview area */}
                  {previewApplied && (
                    <div className="bg-[#f5f5f5] rounded-2xl p-6 border-2 border-[#e5e5e5]">
                      <p className="text-[10px] font-bold text-[#999] uppercase tracking-widest text-center mb-4">תצוגה מקדימה</p>
                      <JerseyPreview
                        playerName={previewName}
                        playerNumber={previewNumber}
                        emblem={previewClubLogo ? 'club' : 'on_only'}
                        productName={product.name}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Price summary */}
          <div className="border-t border-[#e5e5e5] pt-6 space-y-2">
            <div className="flex items-center justify-between text-sm text-[#666]">
              <span>מחיר ליחידה</span>
              <span className="font-bold text-[#111]">₪{unitPrice}</span>
            </div>
            {printCost > 0 && (
              <div className="flex items-center justify-between text-sm text-[#666]">
                <span>הדפסה</span>
                <span className="font-bold text-brand-red">+₪{printCost}</span>
              </div>
            )}
            {quantity > 1 && (
              <div className="flex items-center justify-between text-sm text-[#666]">
                <span>כמות</span>
                <span className="font-bold text-[#111]">×{quantity}</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-3 border-t border-[#e5e5e5]">
              <span className="text-lg font-black text-[#111]">סה״כ</span>
              <span className="text-2xl font-black text-[#111]">₪{totalPrice}</span>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            disabled={!isValid || added}
            className={`w-full py-5 rounded-xl text-base font-black transition-all duration-200 border-none cursor-pointer flex items-center justify-center gap-2 ${
              added
                ? 'bg-brand-success text-white'
                : isValid
                  ? 'bg-brand-red hover:bg-brand-red-hover text-white active:scale-[0.98] shadow-lg shadow-red-200/50'
                  : 'bg-[#e5e5e5] text-[#999] cursor-not-allowed'
            }`}
          >
            {added ? (
              <>
                <CheckIcon className="w-5 h-5" />
                נוסף לעגלה!
              </>
            ) : (
              `הוסף לעגלה — ₪${totalPrice}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
