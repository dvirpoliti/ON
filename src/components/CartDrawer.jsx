import { useCart } from '../store/cartStore.jsx';
import { CloseIcon, TrashIcon, PlusIcon, MinusIcon } from './Icons';

export default function CartDrawer() {
  const {
    items, itemCount, subtotal, shipping, total,
    isCartOpen, setIsCartOpen, setIsCheckoutOpen,
    removeItem, updateQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  const printLabels = {
    none: 'ללא הדפסה',
    number: 'מספר',
    name: 'שם',
    name_number: 'שם + מספר',
  };

  return (
    <div className="fixed inset-0 z-[70] flex">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

      <div className="relative mr-auto bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-black">עגלת קניות</h2>
            <p className="text-sm text-gray-500">{itemCount} פריטים</p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-black transition bg-transparent border-none cursor-pointer"
            aria-label="סגור עגלה"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">העגלה ריקה</p>
              <p className="text-gray-300 text-sm">הוסיפו מוצרים מהקטלוג</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    {/* Thumbnail */}
                    {item.image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="text-sm font-bold text-black truncate">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-gray-300 hover:text-red-500 transition bg-transparent border-none cursor-pointer shrink-0 mr-2"
                          aria-label="הסר פריט"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                        <span className="text-xs text-gray-500">מידה: {item.size}</span>
                        {item.color && <span className="text-xs text-gray-500">צבע: {item.color}</span>}
                        {item.print !== 'none' && (
                          <span className="text-xs text-gray-500">{printLabels[item.print]}</span>
                        )}
                        {item.playerName && (
                          <span className="text-xs text-gray-500">שם: {item.playerName}</span>
                        )}
                        {item.playerNumber !== '' && (
                          <span className="text-xs text-gray-500">#{item.playerNumber}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-gray-400 hover:text-black transition bg-transparent border-none cursor-pointer disabled:opacity-30"
                        disabled={item.quantity <= 1}
                      >
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="px-3 text-sm font-bold min-w-[28px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-gray-400 hover:text-black transition bg-transparent border-none cursor-pointer"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-black">
                      ₪{(item.unitPrice + item.printCost) * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-5 space-y-3 bg-white">
            <div className="flex justify-between text-sm text-gray-500">
              <span>סכום ביניים</span>
              <span>₪{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>משלוח</span>
              <span>₪{shipping}</span>
            </div>
            <div className="flex justify-between text-lg font-black text-black border-t border-gray-100 pt-3">
              <span>סה״כ לתשלום</span>
              <span>₪{total}</span>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-white rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] border-none cursor-pointer shadow-lg shadow-red-200"
            >
              לתשלום — ₪{total}
            </button>

            <p className="text-center text-xs text-gray-400">
              משלוח עד הבית • עד 7 ימי עסקים
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
