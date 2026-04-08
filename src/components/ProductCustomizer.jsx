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
  const printCost = useMemo(() => PRINT_OPTIONS.find((o) => o.id === printOption)?.price || 0, [printOption]);
  const unitPrice = getPriceForQuantity(product, quantity);
  const totalPrice = (unitPrice + printCost) * quantity;
  const currentImages = product.images[selectedColor] || product.images[product.colors[0]?.id] || [];
  const hasPreviewInput = (needsName && playerName.trim().length > 0) || (needsNumber && playerNumber !== '');
  const isValid = size !== '' && (!needsName || playerName.trim().length > 0) && (!needsNumber || (playerNumber !== '' && Number(playerNumber) >= 0 && Number(playerNumber) <= 99));

  function handleNumberChange(val) {
    if (val === '') { setPlayerNumber(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 0 && num <= 99) setPlayerNumber(String(num));
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
    addItem(product, { size, quantity, color: colorObj?.name || '', colorId: selectedColor, print: printOption, emblem: clubLogo ? 'club' : 'on_only', playerName: needsName ? playerName.trim() : '', playerNumber: needsNumber ? playerNumber : '', printCost, unitPrice });
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose?.(); }, 1200);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="relative bg-white w-full sm:max-w-4xl sm:rounded-2xl rounded-t-2xl max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 left-4 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#999] hover:text-black transition border border-[#e5e5e5] cursor-pointer shadow-sm text-lg">✕</button>

        {/* Split layout on desktop */}
        <div className="sm:flex">
          {/* LEFT — Image gallery */}
          <div className="sm:w-[55%] bg-[#f5f5f5] sm:rounded-r-none sm:rounded-l-2xl">
            <div className="aspect-square sm:aspect-auto sm:h-full sm:min-h-[600px] flex items-center justify-center p-6 sm:p-10">
              {currentImages.length > 0 ? (
                <img src={currentImages[currentImageIndex] || currentImages[0]} alt={product.name} className="max-w-full max-h-full object-contain" />
              ) : product.customizable && previewApplied ? (
                <div className="w-full max-w-[360px] mx-auto">
                  <JerseyPreview playerName={previewName} playerNumber={previewNumber} emblem={previewClubLogo ? 'club' : 'on_only'} productName={product.name} />
                </div>
              ) : product.customizable ? (
                <div className="w-full max-w-[360px] mx-auto">
                  <JerseyPreview playerName="" playerNumber="" emblem={clubLogo ? 'club' : 'on_only'} productName={product.name} />
                </div>
              ) : (
                <div className="text-center text-[#ccc]">
                  <svg className="w-20 h-20 mx-auto opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              )}
            </div>
            {/* Thumbnail strip */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 px-6 pb-6 justify-center">
                {currentImages.map((img, i) => (
                  <button key={i} onClick={() => setCurrentImageIndex(i)} className={`w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${currentImageIndex === i ? 'border-[#111]' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Product details */}
          <div className="sm:w-[45%] p-6 sm:p-8 sm:overflow-y-auto sm:max-h-[90vh]">
            {/* Breadcrumb-like category */}
            <p className="text-[10px] text-[#999] uppercase tracking-widest font-medium mb-2">Switching ON</p>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-black text-[#111] leading-tight mb-2">{product.name}</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-5">{product.description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-black text-[#111]">₪{unitPrice}</span>
              {product.originalPrice && product.originalPrice > unitPrice && (
                <span className="text-sm text-[#bbb] line-through">₪{product.originalPrice}</span>
              )}
            </div>

            {/* Quantity pricing */}
            {product.pricing.length > 1 && (
              <div className="mb-6">
                <div className="flex gap-2">
                  {product.pricing.map((tier, i) => {
                    const isActive = quantity >= tier.min && (i === product.pricing.length - 1 || quantity < product.pricing[i + 1]?.min);
                    return (
                      <div key={i} className={`flex-1 text-center py-2.5 rounded-lg transition-all text-xs ${isActive ? 'bg-[#111] text-white' : 'bg-[#f5f5f5] text-[#666]'}`}>
                        <span className="block text-[9px] opacity-60 uppercase">{tier.min === 1 ? 'יחידה' : `${tier.min}+`}</span>
                        <span className="block font-black text-sm mt-0.5">₪{tier.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-[#eee] my-5" />

            {/* Color */}
            {product.colors.length > 1 && (
              <div className="mb-5">
                <p className="text-xs font-bold text-[#111] mb-2.5">
                  צבע — <span className="text-[#666] font-normal">{product.colors.find(c => c.id === selectedColor)?.name}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button key={color.id} onClick={() => { setSelectedColor(color.id); setCurrentImageIndex(0); }}
                      className={`w-8 h-8 rounded-full transition-all cursor-pointer ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-[#111]' : ''} ${color.border ? 'border border-[#ddd]' : ''}`}
                      style={{ backgroundColor: color.hex }} />
                  ))}
                </div>
              </div>
            )}

            {/* Size */}
            <div className="mb-5">
              <p className="text-xs font-bold text-[#111] mb-2.5">מידה</p>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((s) => (
                  <button key={s} onClick={() => setSize(s)}
                    className={`min-w-[40px] h-10 px-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${size === s ? 'bg-[#111] text-white border-[#111]' : 'bg-white text-[#111] border-[#e5e5e5] hover:border-[#111]'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-5">
              <p className="text-xs font-bold text-[#111] mb-2.5">כמות</p>
              <div className="inline-flex items-center border border-[#e5e5e5] rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 text-[#666] hover:text-black bg-transparent border-none cursor-pointer text-lg font-bold">−</button>
                <span className="w-10 text-center text-sm font-black border-x border-[#e5e5e5]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 text-[#666] hover:text-black bg-transparent border-none cursor-pointer text-lg font-bold">+</button>
              </div>
            </div>

            {/* Customization */}
            {product.customizable && (
              <>
                <div className="border-t border-[#eee] my-5" />

                {/* ON always included */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#111] rounded-md flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-[9px]">ON</span>
                  </div>
                  <p className="text-xs text-[#666]"><span className="font-bold text-[#111]">לוגו ON</span> כלול תמיד</p>
                </div>

                {/* Club logo */}
                {product.hasEmblem && (
                  <label className="flex items-center justify-between p-3 border border-[#e5e5e5] rounded-xl cursor-pointer hover:border-[#111] transition mb-4">
                    <span className="text-xs font-bold text-[#111]">סמל המועדון</span>
                    <div className="relative">
                      <input type="checkbox" checked={clubLogo} onChange={(e) => setClubLogo(e.target.checked)} className="sr-only" />
                      <div className={`w-10 h-6 rounded-full transition-colors ${clubLogo ? 'bg-brand-red' : 'bg-[#ddd]'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow absolute top-1 transition-all ${clubLogo ? 'left-5' : 'left-1'}`} />
                      </div>
                    </div>
                  </label>
                )}

                {/* Print options */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-[#111] mb-2.5">הדפסה</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {PRINT_OPTIONS.map((opt) => (
                      <button key={opt.id} onClick={() => { setPrintOption(opt.id); setPreviewApplied(false); }}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${printOption === opt.id ? 'bg-[#111] text-white border-[#111]' : 'bg-white text-[#111] border-[#e5e5e5] hover:border-[#111]'}`}>
                        {opt.label}
                        {opt.price > 0 && <span className={`block text-[10px] mt-0.5 ${printOption === opt.id ? 'text-white/60' : 'text-brand-red'}`}>+₪{opt.price}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Number */}
                {(needsName || needsNumber) && (
                  <div className="space-y-3 mb-4">
                    {needsName && (
                      <input type="text" value={playerName} onChange={(e) => { setPlayerName(e.target.value.slice(0, MAX_NAME_LENGTH)); setPreviewApplied(false); }}
                        placeholder="שם השחקן" maxLength={MAX_NAME_LENGTH} dir="ltr"
                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-sm focus:outline-none focus:border-[#111] transition" />
                    )}
                    {needsNumber && (
                      <input type="number" value={playerNumber} onChange={(e) => { handleNumberChange(e.target.value); setPreviewApplied(false); }}
                        placeholder="מספר (0–99)" min="0" max="99" dir="ltr"
                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-sm focus:outline-none focus:border-[#111] transition text-center" />
                    )}
                    <button onClick={applyPreview} disabled={!hasPreviewInput}
                      className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${hasPreviewInput ? 'bg-[#111] text-white border-[#111] hover:bg-[#333]' : 'bg-[#f5f5f5] text-[#ccc] border-[#e5e5e5] cursor-not-allowed'}`}>
                      {previewApplied ? '✓ הדמיה מוכנה — צפה בתמונה' : 'החל — צפה בהדמיה'}
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Add to cart — primary CTA */}
            <button onClick={handleAdd} disabled={!isValid || added}
              className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-200 border-none cursor-pointer ${added ? 'bg-brand-success text-white' : isValid ? 'bg-brand-red hover:bg-brand-red-hover text-white active:scale-[0.98]' : 'bg-[#e5e5e5] text-[#999] cursor-not-allowed'}`}>
              {added ? <span className="flex items-center justify-center gap-2"><CheckIcon className="w-5 h-5" />נוסף לעגלה!</span> : `הוסף לעגלה — ₪${totalPrice}`}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[#999]">
              <span>✓ משלוח עד הבית</span>
              <span>✓ איכות מקצועית</span>
              <span>✓ עד 7 ימי עסקים</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
