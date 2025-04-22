
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCars, Car } from "@/lib/carData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // Get cars from local storage
    const carData = getCars();
    setCars(carData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our 3D Car Models</h1>
      <p className="text-center mb-8 text-lg text-muted-foreground">
        Browse our collection of high-quality 3D car models ready for your projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden flex flex-col">
            <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
              <img 
                src={car.thumbnailUrl} 
                alt={car.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/jpg?text=Car+Image";
                }}
              />
            </div>
            <CardContent className="p-6 flex-1">
              <h2 className="text-2xl font-semibold">{car.name}</h2>
              <p className="text-xl font-bold text-primary mt-2">₹{car.price}</p>
              <p className="mt-3 line-clamp-2 text-muted-foreground">{car.description}</p>
            </CardContent>
            <CardFooter className="border-t p-6 bg-muted/50">
              <Button asChild className="w-full">
                <Link to={`/products/${car.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
