import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  Shirt,
  Sparkles,
  Droplets,
  Award,
  Zap,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [weight, setWeight] = useState([5]);
  const [selectedService, setSelectedService] = useState("wash-fold");

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic Plan",
      description: "Perfect for individuals and small families",
      price: "₹999",
      period: "/month",
      features: [
        "Up to 20kg monthly quota",
        "Free pickup & delivery",
        "48-hour turnaround",
        "Basic wash & fold service",
        "Mobile app tracking",
        "Customer support"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      id: "premium",
      name: "Premium Plan",
      description: "Ideal for busy professionals and families",
      price: "₹1,899",
      period: "/month",
      features: [
        "Up to 40kg monthly quota",
        "Free pickup & delivery",
        "24-hour turnaround",
        "All services included",
        "Priority processing",
        "Quality guarantee",
        "Premium packaging",
        "24/7 customer support"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      description: "For businesses and large households",
      price: "₹3,499",
      period: "/month",
      features: [
        "Unlimited monthly quota",
        "Free pickup & delivery",
        "Same-day service available",
        "All premium services",
        "Dedicated account manager",
        "Bulk discounts",
        "Custom scheduling",
        "Priority support",
        "Invoice management"
      ],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const services = [
    { id: "wash-fold", name: "Wash & Fold", rate: 80, icon: Shirt },
    { id: "dry-cleaning", name: "Dry Cleaning", rate: 150, icon: Sparkles },
    { id: "steam-ironing", name: "Steam Ironing", rate: 20, icon: Droplets },
    { id: "premium-care", name: "Premium Care", rate: 300, icon: Award },
    { id: "express", name: "Express Service", rate: 400, icon: Zap }
  ];

  const calculatePrice = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;
    
    if (selectedService === "express") {
      return service.rate + (weight[0] * 80); // Express base + wash rate
    }
    
    return weight[0] * service.rate;
  };

  const handleBookNow = (planId?: string) => {
    if (planId) {
      navigate(`/booking?plan=${planId}`);
    } else {
      navigate("/booking");
    }
    toast({
      title: "Booking Started",
      description: "Complete your booking details to get started",
    });
  };

  const handleCalculatorBook = () => {
    const totalPrice = calculatePrice();
    navigate(`/booking?service=${selectedService}&weight=${weight[0]}&price=${totalPrice}`);
    toast({
      title: "Service Calculated",
      description: `Estimated cost: ₹${totalPrice.toLocaleString()} for ${weight[0]}kg`,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <Badge variant="secondary" className="mb-4">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple & Fair
              <br />
              <span className="text-secondary">Pricing</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose from our flexible pricing plans 
              or calculate your custom service cost with our interactive calculator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Price Calculator
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Service Cost</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an instant quote for your laundry service with our interactive calculator.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass border-0 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Controls */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Select Service Type
                    </Label>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <motion.button
                          key={service.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedService(service.id)}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                            selectedService === service.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <service.icon className="h-5 w-5 text-primary" />
                            <span className="font-medium">{service.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {service.id === "express" ? "₹400 base" : `₹${service.rate}/kg`}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Estimated Weight: {weight[0]}kg
                    </Label>
                    <Slider
                      value={weight}
                      onValueChange={setWeight}
                      max={20}
                      min={1}
                      step={0.5}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1kg</span>
                      <span>20kg</span>
                    </div>
                  </div>
                </div>

                {/* Calculator Result */}
                <div className="space-y-6">
                  <div className="neumorphic p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Badge className="mr-2">Estimate</Badge>
                      Service Breakdown
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Service Type:</span>
                        <span className="font-medium">
                          {services.find(s => s.id === selectedService)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Weight:</span>
                        <span className="font-medium">{weight[0]}kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Rate:</span>
                        <span className="font-medium">
                          {selectedService === "express" 
                            ? "₹400 + ₹80/kg" 
                            : `₹${services.find(s => s.id === selectedService)?.rate}/kg`
                          }
                        </span>
                      </div>
                      <hr className="border-border/50" />
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold">Total Cost:</span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{calculatePrice().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleCalculatorBook}
                      className="w-full btn-hero group"
                      size="lg"
                    >
                      Book This Service
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      * Prices may vary based on actual weight and special requirements
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Monthly Plans</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Save More with
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> Monthly Plans</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a monthly subscription plan that fits your lifestyle and save up to 40% 
              compared to pay-per-use pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Card className={`h-full glass border-0 hover:shadow-elevated transition-all duration-300 relative overflow-hidden ${
                  plan.popular ? "ring-2 ring-primary/50" : ""
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-secondary">
                        Most Popular
                      </Badge>
                    )}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      onClick={() => handleBookNow(plan.id)}
                      className={`w-full ${plan.popular ? "btn-hero" : "btn-glass"} group`}
                      size="lg"
                    >
                      Choose {plan.name}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Flexible Plans
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                No Lock-in
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Contracts
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                All our monthly plans are flexible with no long-term commitments. 
                You can upgrade, downgrade, or cancel anytime. We believe in earning 
                your trust through quality service, not binding contracts.
              </p>
              <ul className="space-y-3">
                {[
                  "Cancel or modify anytime",
                  "Unused quota rolls over",
                  "Upgrade/downgrade instantly",
                  "Pause subscription when traveling"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Need Help Choosing?
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Not sure which plan is right for you? Contact our team for personalized 
                recommendations based on your laundry needs.
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => navigate("/contact")}
                  className="w-full btn-hero"
                >
                  Get Personal Consultation
                </Button>
                <Button
                  onClick={() => navigate("/services")}
                  variant="outline"
                  className="w-full btn-glass"
                >
                  View All Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;