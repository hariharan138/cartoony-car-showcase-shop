
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Payment = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  
  const [paymentMethod, setPaymentMethod] = useState<string>("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingInfo, setShippingInfo] = useState<any>(null);

  useEffect(() => {
    // Redirect to checkout if no shipping info
    const info = localStorage.getItem('shippingInfo');
    if (!info) {
      navigate('/checkout');
      return;
    }
    setShippingInfo(JSON.parse(info));
    
    // Redirect to products if cart is empty
    if (items.length === 0) {
      navigate('/products');
    }
  }, [items.length, navigate]);

  const handleCreditCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Save order details to local storage
      const orderDetails = {
        orderId: `ORD-${Date.now()}`,
        items,
        shippingInfo,
        paymentMethod,
        totalAmount: getTotalPrice() + 299,
        orderDate: new Date().toISOString(),
        status: "Confirmed"
      };
      
      localStorage.setItem('latestOrder', JSON.stringify(orderDetails));
      
      // Clear cart and redirect to confirmation page
      clearCart();
      navigate('/order-confirmation');
    }, 2000);
  };

  if (!shippingInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>

      <div className="lg:flex lg:gap-8">
        <div className="lg:w-2/3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              
              <form onSubmit={handleSubmit}>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mb-6">
                  <div className="flex items-center space-x-2 p-3 border rounded-md mb-3">
                    <RadioGroupItem value="creditCard" id="creditCard" />
                    <Label htmlFor="creditCard" className="flex-1">Credit/Debit Card</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 border rounded-md">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-1">UPI Payment</Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === "creditCard" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCreditCardChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={cardDetails.cardName}
                        onChange={handleCreditCardChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={cardDetails.expiryDate}
                          onChange={handleCreditCardChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCreditCardChange}
                          type="password"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "upi" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        name="upiId"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="username@upi"
                        required
                      />
                    </div>
                  </div>
                )}
                
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>₹299</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{getTotalPrice() + 299}</span>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <p className="text-sm text-muted-foreground">
                  {shippingInfo.fullName}<br />
                  {shippingInfo.address}<br />
                  {shippingInfo.city}, {shippingInfo.state} {shippingInfo.postalCode}<br />
                  {shippingInfo.phone}
                </p>
              </div>
              
              <Button asChild variant="outline" className="w-full mt-4">
                <Link to="/checkout">Back to Checkout</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
