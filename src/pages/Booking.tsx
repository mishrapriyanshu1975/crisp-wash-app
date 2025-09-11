import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Package, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shirt,
  Sparkles,
  Droplets,
  Award,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    weight: "",
    pickupDate: "",
    pickupTime: "",
    deliveryDate: "",
    deliveryTime: "",
    address: "",
    phone: "",
    instructions: "",
    paymentMethod: ""
  });

  const services = [
    { id: "wash-fold", name: "Wash & Fold", rate: 80, icon: Shirt, description: "Regular washing and folding" },
    { id: "dry-cleaning", name: "Dry Cleaning", rate: 150, icon: Sparkles, description: "Professional dry cleaning" },
    { id: "steam-ironing", name: "Steam Ironing", rate: 20, icon: Droplets, description: "Crisp steam pressing" },
    { id: "premium-care", name: "Premium Care", rate: 300, icon: Award, description: "Luxury fabric treatment" },
    { id: "express", name: "Express Service", rate: 400, icon: Zap, description: "Same-day service" }
  ];

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM", 
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM"
  ];

  const steps = [
    { number: 1, title: "Service", description: "Choose your service" },
    { number: 2, title: "Schedule", description: "Pick dates & times" },
    { number: 3, title: "Details", description: "Address & preferences" },
    { number: 4, title: "Payment", description: "Complete booking" }
  ];

  const calculateTotal = () => {
    const service = services.find(s => s.id === bookingData.service);
    if (!service || !bookingData.weight) return 0;
    
    const weight = parseFloat(bookingData.weight);
    if (service.id === "express") {
      return service.rate + (weight * 80);
    }
    return weight * service.rate;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const total = calculateTotal();
    toast({
      title: "Booking Confirmed!",
      description: `Your booking for ₹${total.toLocaleString()} has been confirmed. You'll receive a confirmation call shortly.`,
    });
    navigate("/orders");
  };

  const updateBookingData = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ 
                    scale: currentStep >= step.number ? 1 : 0.8,
                    opacity: currentStep >= step.number ? 1 : 0.5
                  }}
                  className={`flex flex-col items-center ${index < steps.length - 1 ? "mr-4" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mb-2 transition-all ${
                    currentStep >= step.number 
                      ? "bg-gradient-primary shadow-glass" 
                      : "bg-muted-foreground/20 text-muted-foreground"
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="text-center">
                    <p className={`font-medium ${currentStep >= step.number ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all ${
                    currentStep > step.number ? "bg-primary" : "bg-border"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {steps[currentStep - 1].title} - {steps[currentStep - 1].description}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Select Your Service
                        </Label>
                        <div className="grid grid-cols-1 gap-4">
                          {services.map((service) => (
                            <motion.button
                              key={service.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => updateBookingData("service", service.id)}
                              className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                                bookingData.service === service.id
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <service.icon className="h-6 w-6 text-primary" />
                                <div className="text-left">
                                  <p className="font-medium">{service.name}</p>
                                  <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-primary">
                                  {service.id === "express" ? "₹400 base" : `₹${service.rate}/kg`}
                                </p>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {bookingData.service && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <Label htmlFor="weight" className="text-base font-semibold">
                            Estimated Weight (kg)
                          </Label>
                          <Input
                            id="weight"
                            type="number"
                            placeholder="Enter weight in kg"
                            value={bookingData.weight}
                            onChange={(e) => updateBookingData("weight", e.target.value)}
                            className="mt-2"
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Don't worry, we'll weigh your items during pickup for final pricing
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 2: Schedule */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="pickupDate" className="text-base font-semibold">
                            Pickup Date
                          </Label>
                          <Input
                            id="pickupDate"
                            type="date"
                            value={bookingData.pickupDate}
                            onChange={(e) => updateBookingData("pickupDate", e.target.value)}
                            className="mt-2"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <Label htmlFor="pickupTime" className="text-base font-semibold">
                            Pickup Time
                          </Label>
                          <Select value={bookingData.pickupTime} onValueChange={(value) => updateBookingData("pickupTime", value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="deliveryDate" className="text-base font-semibold">
                            Delivery Date
                          </Label>
                          <Input
                            id="deliveryDate"
                            type="date"
                            value={bookingData.deliveryDate}
                            onChange={(e) => updateBookingData("deliveryDate", e.target.value)}
                            className="mt-2"
                            min={bookingData.pickupDate || new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <Label htmlFor="deliveryTime" className="text-base font-semibold">
                            Delivery Time
                          </Label>
                          <Select value={bookingData.deliveryTime} onValueChange={(value) => updateBookingData("deliveryTime", value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label htmlFor="address" className="text-base font-semibold">
                          Pickup & Delivery Address
                        </Label>
                        <Textarea
                          id="address"
                          placeholder="Enter your complete address"
                          value={bookingData.address}
                          onChange={(e) => updateBookingData("address", e.target.value)}
                          className="mt-2"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-base font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={bookingData.phone}
                          onChange={(e) => updateBookingData("phone", e.target.value)}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="instructions" className="text-base font-semibold">
                          Special Instructions (Optional)
                        </Label>
                        <Textarea
                          id="instructions"
                          placeholder="Any special care instructions or preferences"
                          value={bookingData.instructions}
                          onChange={(e) => updateBookingData("instructions", e.target.value)}
                          className="mt-2"
                          rows={3}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Payment */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Payment Method
                        </Label>
                        <div className="space-y-3">
                          {[
                            { id: "cod", name: "Cash on Delivery", description: "Pay when we deliver" },
                            { id: "upi", name: "UPI Payment", description: "Pay via UPI/PhonePe/Paytm" },
                            { id: "card", name: "Card Payment", description: "Credit/Debit card" }
                          ].map((method) => (
                            <motion.button
                              key={method.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => updateBookingData("paymentMethod", method.id)}
                              className={`flex items-center justify-between w-full p-4 rounded-xl border-2 transition-all ${
                                bookingData.paymentMethod === method.id
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="text-left">
                                <p className="font-medium">{method.name}</p>
                                <p className="text-sm text-muted-foreground">{method.description}</p>
                              </div>
                              <CreditCard className="h-5 w-5 text-primary" />
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t border-border/50">
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      disabled={currentStep === 1}
                      className="btn-glass"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && (!bookingData.service || !bookingData.weight)) ||
                          (currentStep === 2 && (!bookingData.pickupDate || !bookingData.pickupTime || !bookingData.deliveryDate || !bookingData.deliveryTime)) ||
                          (currentStep === 3 && (!bookingData.address || !bookingData.phone))
                        }
                        className="btn-hero group"
                      >
                        Next
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={!bookingData.paymentMethod}
                        className="btn-hero group"
                      >
                        Confirm Booking
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="glass border-0 sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="mr-2 h-5 w-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bookingData.service && (
                    <>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Service:</span>
                          <Badge variant="outline">
                            {services.find(s => s.id === bookingData.service)?.name}
                          </Badge>
                        </div>
                        
                        {bookingData.weight && (
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Weight:</span>
                            <span className="font-medium">{bookingData.weight}kg</span>
                          </div>
                        )}

                        {bookingData.pickupDate && (
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Pickup:</span>
                            <div className="text-right text-sm">
                              <p className="font-medium">{bookingData.pickupDate}</p>
                              <p className="text-muted-foreground">{bookingData.pickupTime}</p>
                            </div>
                          </div>
                        )}

                        {bookingData.deliveryDate && (
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Delivery:</span>
                            <div className="text-right text-sm">
                              <p className="font-medium">{bookingData.deliveryDate}</p>
                              <p className="text-muted-foreground">{bookingData.deliveryTime}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Subtotal:</span>
                          <span className="font-medium">₹{calculateTotal().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Pickup & Delivery:</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg">
                          <span className="font-semibold">Total:</span>
                          <span className="text-2xl font-bold text-primary">
                            ₹{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>* Final price may vary based on actual weight</p>
                        <p>* Free pickup and delivery within service area</p>
                        <p>* Quality guarantee on all services</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;