
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFurniture, Furniture } from "@/lib/furnitureData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { View } from "lucide-react";

const Products = () => {
  const [furniture, setFurniture] = useState<Furniture[]>([]);

  useEffect(() => {
    const furnitureData = getFurniture();
    setFurniture(furnitureData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Furniture Collection</h1>
      <p className="text-center mb-8 text-lg text-muted-foreground">
        Browse our collection of high-quality furniture for your home
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {furniture.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col group">
            <div className="relative h-64 bg-muted">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/jpg?text=Furniture+Image";
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" asChild className="gap-2">
                  <Link to={`/products/${item.id}`}>
                    <View className="w-5 h-5" />
                    View in 3D
                  </Link>
                </Button>
              </div>
            </div>
            <CardContent className="p-6 flex-1">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-xl font-bold text-primary mt-2">₹{item.price.toLocaleString()}</p>
              <p className="mt-3 line-clamp-2 text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="border-t p-6 bg-muted/50">
              <Button asChild className="w-full">
                <Link to={`/products/${item.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
