import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { getFurnitureById, Furniture } from "@/lib/furnitureData";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [furniture, setFurniture] = useState<Furniture | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      const furnitureData = getFurnitureById(id);
      if (furnitureData) {
        setFurniture(furnitureData);
      }
    }
  }, [id]);

  useEffect(() => {
    if (furniture && viewerRef.current) {
      // Clear previous content
      viewerRef.current.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.src = `${furniture.modelUrl}?ui_infos=0&ui_controls=0&ui_stop=0&autostart=1&preload=1`;
      iframe.style.width = '100%';
      iframe.style.height = '400px';
      iframe.allow = "autoplay; fullscreen; vr";
      iframe.setAttribute("allowfullscreen", "");

      viewerRef.current.appendChild(iframe);
    }
  }, [furniture]);

  const handleAddToCart = () => {
    if (furniture) {
      addToCart({
        id: furniture.id,
        name: furniture.name,
        price: furniture.price,
        quantity,
        thumbnail: furniture.thumbnailUrl
      });
      alert("Added to cart!");
    }
  };

  if (!furniture) {
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
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-2/5">
          <h1 className="text-3xl font-bold">{furniture.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">₹{furniture.price.toLocaleString()}</p>

          <div className="mt-4">
            <p className="text-muted-foreground">{furniture.description}</p>
          </div>

          <Separator className="my-6" />

          <div className="my-4">
            <h3 className="font-semibold mb-2">Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {furniture.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="my-4">
            <h3 className="font-semibold mb-2">Specifications:</h3>
            <Card>
              <CardContent className="p-4 grid grid-cols-2 gap-2 text-sm">
                <div>Material:</div>
                <div>{furniture.specifications.material}</div>
                <div>Dimensions:</div>
                <div>{furniture.specifications.dimensions}</div>
                <div>Weight:</div>
                <div>{furniture.specifications.weight}</div>
                <div>Warranty:</div>
                <div>{furniture.specifications.warranty}</div>
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
