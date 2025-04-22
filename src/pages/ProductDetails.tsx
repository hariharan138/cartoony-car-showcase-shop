
import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { getCarById, Car } from "@/lib/carData";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      const carData = getCarById(id);
      if (carData) {
        setCar(carData);
      }
    }
  }, [id]);

  useEffect(() => {
    // Load Sketchfab API and initialize the viewer if car data is available
    if (car && viewerRef.current) {
      const script = document.createElement('script');
      script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.0.js';
      script.async = true;
      
      script.onload = () => {
        const iframe = document.createElement('iframe');
        iframe.src = car.modelUrl;
        iframe.style.width = '100%';
        iframe.style.height = '400px';
        iframe.allow = "autoplay; fullscreen; vr";
        iframe.setAttribute("allowfullscreen", "");
        
        if (viewerRef.current) {
          viewerRef.current.innerHTML = '';
          viewerRef.current.appendChild(iframe);
          
          // Initialize Sketchfab viewer
          const client = new (window as any).Sketchfab(iframe);
          client.init(car.sketchfabId, {
            success: function (api: any) {
              api.start();
              api.addEventListener('viewerready', function () {
                console.log("3D Viewer ready");
              });
            },
            error: function () {
              console.error("Sketchfab viewer failed to load");
            }
          });
        }
      };
      
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [car]);

  const handleAddToCart = () => {
    if (car) {
      addToCart({
        id: car.id,
        name: car.name,
        price: car.price,
        quantity,
        thumbnail: car.thumbnailUrl
      });
      alert("Added to cart!");
    }
  };

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl">Product not found</h1>
        <Button asChild className="mt-4">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 3D Viewer */}
        <div className="lg:w-3/5">
          <div 
            ref={viewerRef} 
            className="w-full h-[400px] bg-muted rounded-lg overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center">
              <p>Loading 3D model...</p>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-2/5">
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">₹{car.price}</p>
          
          <div className="mt-4">
            <p className="text-muted-foreground">{car.description}</p>
          </div>
          
          <Separator className="my-6" />
          
          <div className="my-4">
            <h3 className="font-semibold mb-2">Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="my-4">
            <h3 className="font-semibold mb-2">Specifications:</h3>
            <Card>
              <CardContent className="p-4 grid grid-cols-2 gap-2 text-sm">
                <div>Top Speed:</div>
                <div>{car.specifications.topSpeed}</div>
                <div>Acceleration:</div>
                <div>{car.specifications.acceleration}</div>
                <div>Engine:</div>
                <div>{car.specifications.engine}</div>
                <div>Transmission:</div>
                <div>{car.specifications.transmission}</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="quantity">Quantity:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-16 p-2 border rounded"
              />
            </div>
            
            <div className="flex space-x-4">
              <Button onClick={handleAddToCart} className="flex-1">
                Add to Cart
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/cart">View Cart</Link>
              </Button>
            </div>
            
            <Button asChild variant="link" className="mt-4">
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
