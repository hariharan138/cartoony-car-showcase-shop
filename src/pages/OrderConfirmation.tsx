
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

interface Order {
  orderId: string;
  items: OrderItem[];
  shippingInfo: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
  };
  paymentMethod: string;
  totalAmount: number;
  orderDate: string;
  status: string;
}

const OrderConfirmation = () => {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Get order details from local storage
    const orderDetails = localStorage.getItem('latestOrder');
    if (orderDetails) {
      setOrder(JSON.parse(orderDetails));
    }
  }, []);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">No Order Found</h1>
        <p className="mb-8">We couldn't find any recent order details.</p>
        <Button asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Order #{order.orderId.split('-')[1]}</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {order.status}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Order Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Order Date:</div>
                <div>{new Date(order.orderDate).toLocaleString()}</div>
                <div>Payment Method:</div>
                <div>{order.paymentMethod === 'creditCard' ? 'Credit/Debit Card' : 'UPI Payment'}</div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Items</h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-12 h-12 bg-muted rounded overflow-hidden mr-3">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/600x400/jpg?text=Car+Image";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-medium">₹{item.price * item.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-sm text-muted-foreground">
                  {order.shippingInfo.fullName}<br />
                  {order.shippingInfo.address}<br />
                  {order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.postalCode}<br />
                  {order.shippingInfo.phone}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{order.totalAmount - 299}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹299</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2">
                    <span>Total</span>
                    <span>₹{order.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
