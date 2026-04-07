import { useState } from 'react';
import { useCart } from '../store/cartStore.jsx';
import { CloseIcon, CheckIcon, ShieldIcon } from './Icons';

export default function Checkout() {
  const { items, subtotal, shipping, total, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  }

  function validate() {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'שדה חובה';
    if (!formData.phone.trim()) errs.phone = 'שדה חובה';
    else if (!/^0[0-9]{8,9}$/.test(formData.phone.replace(/[\s-]/g, ''))) errs.phone = 'מספר טלפון לא תקין';
    if (!formData.email.trim()) errs.email = 'שדה חובה';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'כתובת אימייל לא תקינה';
    if (!formData.address.trim()) errs.address = 'שדה חובה';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // In production, this would submit to a payment processor
    console.log('Order submitted:', { items, formData, total });
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  }

  const printLabels = {
    none: 'ללא',
    number: 'מספר',
    name: 'שם',
    name_number: 'שם + מספר',
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-10 max-w-sm w-full mx-4 text-center shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckIcon className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-black mb-3">ההזמנה התקבלה!</h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            תודה רבה על ההזמנה!
            <br />
            נשלח אישור למייל {formData.email}
            <br />
            המשלוח יגיע תוך עד 7 ימי עסקים.
          </p>
          <button
            onClick={() => {
              setIsCheckoutOpen(false);
              setSubmitted(false);
              setFormData({ fullName: '', phone: '', email: '', address: '', notes: '' });
            }}
            className="w-full py-3 bg-black text-white rounded-xl font-bold border-none cursor-pointer hover:bg-gray-800 transition"
          >
            חזרה לחנות
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCheckoutOpen(false)} />

      <div className="relative bg-white w-full sm:max-w-xl sm:rounded-2xl rounded-t-2xl max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-black">השלמת הזמנה</h2>
          <button onClick={() => setIsCheckoutOpen(false)} className="text-gray-400 hover:text-black transition text-2xl bg-transparent border-none cursor-pointer p-1">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-6">
          {/* Order summary */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-bold text-black mb-3">סיכום הזמנה</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div className="flex-1">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-400 text-xs block">
                      {item.size} • {item.quantity}x
                      {item.print !== 'none' && ` • ${printLabels[item.print]}`}
                      {item.playerName && `: ${item.playerName}`}
                      {item.playerNumber !== '' && ` #${item.playerNumber}`}
                    </span>
                  </div>
                  <span className="font-medium">₪{(item.price + item.printCost) * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3 space-y-1">
              <div className="flex justify-between text-sm text-gray-500">
                <span>סכום ביניים</span><span>₪{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>משלוח</span><span>₪{shipping}</span>
              </div>
              <div className="flex justify-between text-base font-black text-black pt-2 border-t border-gray-200">
                <span>סה״כ</span><span>₪{total}</span>
              </div>
            </div>
          </div>

          {/* Customer details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-black">פרטי לקוח</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition ${errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="ישראל ישראלי"
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">טלפון *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="050-1234567"
                dir="ltr"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">אימייל *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="email@example.com"
                dir="ltr"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">כתובת למשלוח *</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => updateField('address', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition ${errors.address ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="רחוב, מספר בית, עיר"
              />
              {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">הערות</label>
              <textarea
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition resize-none"
                rows={2}
                placeholder="הערות נוספות להזמנה (אופציונלי)"
              />
            </div>
          </div>

          {/* Policy notices */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex items-start gap-2">
              <ShieldIcon className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
              <p className="text-xs text-gray-500">תשלום מאובטח ומוגן</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              • משלוח עד הבית בלבד — עלות ₪50 על חשבון הלקוח
              <br />
              • זמן אספקה: עד 7 ימי עסקים
              <br />
              • אין החלפות על ביגוד מודפס/מותאם אישית
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-white rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] border-none cursor-pointer shadow-lg shadow-red-200"
          >
            אישור והזמנה — ₪{total}
          </button>
        </form>
      </div>
    </div>
  );
}
