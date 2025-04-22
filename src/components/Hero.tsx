
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Space with Elegant Furniture
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover our curated collection of premium furniture pieces that blend style, comfort, and functionality.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 hover:bg-white/20">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
