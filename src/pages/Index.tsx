
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              3D Car Models
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
            Explore our stunning collection of high-quality 3D car models perfect for games, animations, and VR/AR experiences.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link to="/products">Browse Collection</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Featured Models */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Car Model Preview</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Cartoon Sport Car</h3>
                <p className="text-muted-foreground mt-2">
                  A sleek and stylish sporty car with aerodynamic design.
                </p>
                <Button asChild variant="link" className="px-0 mt-2">
                  <Link to="/products/1">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Car Model Preview</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Cartoon SUV</h3>
                <p className="text-muted-foreground mt-2">
                  A robust and spacious SUV design with family-friendly features.
                </p>
                <Button asChild variant="link" className="px-0 mt-2">
                  <Link to="/products/2">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Car Model Preview</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Cartoon Vintage Car</h3>
                <p className="text-muted-foreground mt-2">
                  A classic vintage car model with nostalgic design elements.
                </p>
                <Button asChild variant="link" className="px-0 mt-2">
                  <Link to="/products/5">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View All Models</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our 3D Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">High Quality</h3>
              <p className="text-muted-foreground">
                All our models are crafted with attention to detail and optimized for performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Access</h3>
              <p className="text-muted-foreground">
                Download your models immediately after purchase and start creating.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Animation Ready</h3>
              <p className="text-muted-foreground">
                Our models are rigged and ready for animation in your favorite 3D software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collection of 3D car models and find the perfect assets for your next project.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">3D Car Models</h2>
              <p className="text-muted-foreground mt-2">High-quality 3D assets for creative projects</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link to="/" className="text-primary hover:underline">Home</Link>
              <Link to="/products" className="text-primary hover:underline">Products</Link>
              <Link to="/cart" className="text-primary hover:underline">Cart</Link>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} 3D Car Models. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
