
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { View } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Living Room", "Bedroom", "Dining Room"].map((category) => (
              <Card key={category} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category}</h3>
                  <p className="text-muted-foreground mb-4">Discover our collection</p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Explore {category}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FurnishCraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Premium Quality", icon: "🌟" },
              { title: "3D Visualization", icon: "🔄" },
              { title: "Fast Delivery", icon: "🚚" },
              { title: "Expert Support", icon: "💬" }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">Experience the best in furniture shopping</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Arrivals</h2>
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group overflow-hidden">
                <div className="aspect-square relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${item}`} 
                    alt="Furniture" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className="gap-2">
                      <View className="w-4 h-4" />
                      View in 3D
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Modern Furniture {item}</h3>
                  <p className="text-primary font-semibold">₹{(12999 * item).toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest furniture trends, exclusive offers, and interior design inspiration.
          </p>
          <Button size="lg" variant="secondary">
            Subscribe Now
          </Button>
        </div>
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
