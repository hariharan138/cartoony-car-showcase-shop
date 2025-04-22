
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Navbar = () => {
  const { getTotalItems } = useCart();
  
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              3D Cars
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/cart" 
              className="inline-flex items-center justify-center rounded-md h-10 w-10 relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground h-5 w-5 flex items-center justify-center rounded-full text-xs">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
