import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Shirt, 
  Sparkles, 
  Droplets, 
  Award, 
  Clock, 
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const services = [
    {
      id: "wash-fold",
      icon: Shirt,
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding service for everyday clothes",
      features: [
        "Premium detergents and fabric softeners",
        "Separate washing for colors and whites",
        "Proper folding and packaging",
        "24-48 hour turnaround"
      ],
      pricing: [
        { weight: "Up to 5kg", price: "₹400" },
        { weight: "5-10kg", price: "₹750" },
        { weight: "10-15kg", price: "₹1,000" },
        { weight: "Per kg above 15kg", price: "₹80" }
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      id: "dry-cleaning",
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Specialized care for delicate fabrics, suits, and formal wear",
      features: [
        "Professional dry cleaning solvents",
        "Stain removal expertise",
        "Shape retention for suits",
        "Protective plastic covering"
      ],
      pricing: [
        { weight: "Shirt/Blouse", price: "₹150" },
        { weight: "Trousers", price: "₹200" },
        { weight: "Suit (2-piece)", price: "₹500" },
        { weight: "Saree/Lehenga", price: "₹400" }
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      id: "steam-ironing",
      icon: Droplets,
      title: "Steam Ironing",
      description: "Professional steam ironing for crisp, wrinkle-free finish",
      features: [
        "High-quality steam ironing",
        "Crease removal expertise",
        "Fabric-specific temperature control",
        "Protective garment bags"
      ],
      pricing: [
        { weight: "Shirt/T-shirt", price: "₹20" },
        { weight: "Trousers/Jeans", price: "₹30" },
        { weight: "Formal wear", price: "₹50" },
        { weight: "Saree", price: "₹80" }
      ],
      color: "from-green-500 to-teal-500",
      popular: false
    },
    {
      id: "premium-care",
      icon: Award,
      title: "Premium Care",
      description: "Luxury treatment for premium and designer garments",
      features: [
        "Hand-washing for delicate items",
        "Premium fabric care products",
        "Individual garment attention",
        "Special packaging and delivery"
      ],
      pricing: [
        { weight: "Designer wear", price: "₹300" },
        { weight: "Silk garments", price: "₹250" },
        { weight: "Leather/Suede", price: "₹500" },
        { weight: "Wedding attire", price: "₹800" }
      ],
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      id: "express-service",
      icon: Zap,
      title: "Express Service",
      description: "Same-day and urgent service for time-sensitive requirements",
      features: [
        "Same-day pickup and delivery",
        "Priority processing",
        "Real-time tracking",
        "Emergency service available"
      ],
      pricing: [
        { weight: "Same-day service", price: "+50% of base price" },
        { weight: "Emergency (within 6 hours)", price: "+100% of base price" },
        { weight: "Minimum order", price: "₹500" }
      ],
      color: "from-yellow-500 to-orange-500",
      popular: false
    },
    {
      id: "specialized-cleaning",
      icon: Shield,
      title: "Specialized Cleaning",
      description: "Expert care for carpets, curtains, and household items",
      features: [
        "Carpet deep cleaning",
        "Curtain cleaning and pressing",
        "Blanket and comforter service",
        "Shoe cleaning and care"
      ],
      pricing: [
        { weight: "Carpet (per sq ft)", price: "₹25" },
        { weight: "Curtains (per panel)", price: "₹200" },
        { weight: "Blanket/Comforter", price: "₹300" },
        { weight: "Shoes (per pair)", price: "₹150" }
      ],
      color: "from-indigo-500 to-purple-500",
      popular: false
    }
  ];

  const handleBookService = (serviceId: string) => {
    navigate(`/booking?service=${serviceId}`);
    toast({
      title: "Service Selected",
      description: "Complete your booking details to schedule pickup",
    });
  };

  const handleGetQuote = () => {
    navigate("/contact");
    toast({
      title: "Custom Quote",
      description: "Contact us for a personalized quote for your requirements",
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
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Laundry
              <br />
              <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              From everyday washing to specialized care, we offer comprehensive laundry solutions
              with transparent pricing and professional expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full glass border-0 hover:shadow-elevated transition-all duration-300 relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-secondary">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Badge variant="outline" className="mr-2">
                          Pricing
                        </Badge>
                      </h4>
                      <div className="space-y-2">
                        {service.pricing.map((price, idx) => (
                          <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                            <span className="text-sm">{price.weight}</span>
                            <span className="font-semibold text-primary">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                      <Button
                        onClick={() => handleBookService(service.id)}
                        className="flex-1 btn-hero group"
                      >
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleGetQuote}
                        className="flex-1 btn-glass"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                LaundryPro?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond just cleaning your clothes - we provide a complete care experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexible Timing",
                description: "Schedule pickup and delivery at your convenience with our flexible time slots."
              },
              {
                icon: Shield,
                title: "100% Safe & Secure",
                description: "Eco-friendly processes with complete safety guarantee for your garments."
              },
              {
                icon: Star,
                title: "Quality Assurance",
                description: "Every item is quality checked before delivery to ensure perfect results."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="glass border-0 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have specific requirements or bulk orders? Contact us for personalized 
              pricing and service packages tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="btn-hero"
              >
                Get Custom Quote
              </Button>
              <Button
                onClick={() => navigate("/booking")}
                variant="outline"
                size="lg"
                className="btn-glass"
              >
                Book Standard Service
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;