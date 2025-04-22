import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { ArrowRight, Star, Truck, Headphones, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Explore Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Living Room",
                description: "Create your perfect living space",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
              },
              {
                title: "Bedroom",
                description: "Rest in ultimate comfort",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
              },
              {
                title: "Dining Room",
                description: "Dine in elegance",
                image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
              },
            ].map((category) => (
              <Link
                key={category.title}
                to={`/categories`}
                className="transform transition-all hover:scale-105 duration-300"
              >
                <Card className="overflow-hidden h-[400px] relative group">
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  </div>
                  <CardContent className="relative h-full flex flex-col justify-end p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                    <p className="text-xl text-gray-200 mb-4">{category.description}</p>
                    <Button
                      variant="outline"
                      className="w-fit bg-white/10 hover:bg-white/20 group"
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose FurnishCraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: "Premium Quality", icon: Star, desc: "Handcrafted with premium materials" },
              { title: "Free Delivery", icon: Truck, desc: "Free shipping on all orders" },
              { title: "Expert Support", icon: Headphones, desc: "24/7 customer support" },
              { title: "Special Offers", icon: Gift, desc: "Regular discounts and deals" }
            ].map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Subscribe to our newsletter for exclusive offers, design inspiration, and new collection updates.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] opacity-10 blur-lg" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">FurnishCraft</h3>
              <p className="text-gray-400">Transform your space with our premium furniture collection.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                <li><Link to="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link to="/shipping" className="text-gray-400 hover:text-white">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-gray-400 hover:text-white">Returns</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: info@furnishcraft.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FurnishCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
