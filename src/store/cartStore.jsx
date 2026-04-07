import { useState, useCallback, createContext, useContext } from 'react';

const CartContext = createContext(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addItem = useCallback((product, options) => {
    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      unitPrice: options.unitPrice ?? options.price ?? 0,
      size: options.size,
      color: options.color || '',
      colorId: options.colorId || '',
      print: options.print,
      emblem: options.emblem,
      playerName: options.playerName || '',
      playerNumber: options.playerNumber ?? '',
      printCost: options.printCost || 0,
      quantity: options.quantity || 1,
      image: product.images?.[options.colorId]?.[0] || null,
    };
    setItems((prev) => [...prev, cartItem]);
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((itemId) => {
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId, qty) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: qty } : i))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, i) => sum + (i.unitPrice + i.printCost) * i.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal > 0 ? subtotal + shipping : 0;

  const value = {
    items,
    itemCount,
    subtotal,
    shipping,
    total,
    isCartOpen,
    isCheckoutOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
