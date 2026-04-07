import { CartProvider } from './store/cartStore.jsx';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickNav from './components/QuickNav';
import ProductCatalog from './components/ProductCatalog';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <QuickNav />
          <ProductCatalog />
          <TrustBar />
        </main>
        <Footer />
        <CartDrawer />
        <Checkout />
      </div>
    </CartProvider>
  );
}

export default App;
