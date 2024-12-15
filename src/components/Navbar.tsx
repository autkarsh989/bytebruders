import React from 'react';
import { Menu, X, Laptop, ShoppingCart } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const activeSection = useScrollSection();
  const { state: cart } = useCart();

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#courses', label: 'Courses' },
    { href: '#projects', label: 'Projects' },
    { href: '#mentorship', label: 'Mentorship' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">ByteBruders</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${
                  activeSection === href.slice(1) ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {label}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <ShoppingCart className="h-6 w-6" />
                {cart.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.items.length}
                  </span>
                )}
              </button>
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl p-4">
                  {cart.items.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                  ) : (
                    <>
                      {cart.items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-2">
                          <span>{item.title}</span>
                          <span>${item.price}</span>
                        </div>
                      ))}
                      <div className="border-t mt-2 pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${cart.total}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block px-3 py-2 ${
                  activeSection === href.slice(1)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;