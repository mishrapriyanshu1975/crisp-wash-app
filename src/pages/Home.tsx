import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Droplets, 
  Clock, 
  Truck, 
  Shield, 
  Star, 
  Sparkles,
  Shirt,
  Zap,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock pickup and delivery service"
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service at no extra cost"
    },
    {
      icon: Shield,
      title: "100% Safe",
      description: "Eco-friendly processes with fabric care guarantee"
    },
    {
      icon: Zap,
      title: "Express Service",
      description: "Same-day delivery for urgent requirements"
    }
  ];

  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Professional washing and folding service",
      price: "₹80/kg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Specialized care for delicate fabrics",
      price: "₹150/piece",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Droplets,
      title: "Steam Ironing",
      description: "Crisp and wrinkle-free finishing",
      price: "₹20/piece",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Premium Care",
      description: "Luxury treatment for premium garments",
      price: "₹300/piece",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Excellent service! My clothes come back perfectly clean and fresh every time.",
      location: "Ghaziabad"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Very convenient and reliable. The pickup and delivery is always on time.",
      location: "Muradnagar"
    },
    {
      name: "Anita Singh",
      rating: 5,
      comment: "Professional service with great attention to detail. Highly recommended!",
      location: "Delhi NCR"
    }
  ];

  const handleBookNow = () => {
    navigate("/booking");
    toast({
      title: "Booking Started",
      description: "Complete your booking details to schedule pickup",
    });
  };

  const handleTrackOrder = () => {
    navigate("/orders");
    toast({
      title: "Order Tracking",
      description: "View all your orders and their current status",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="mb-4 glass">
                  ✨ Professional Laundry Service
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Book Your
                </span>
                <br />
                <span className="text-foreground">
                  Laundry Pickup
                </span>
                <br />
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Now
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Professional laundry and dry cleaning services with free pickup & delivery. 
                Experience premium fabric care with our eco-friendly processes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={handleBookNow}
                  size="lg"
                  className="btn-hero group"
                >
                  Book Pickup Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={handleTrackOrder}
                  variant="outline"
                  size="lg"
                  className="btn-glass"
                >
                  Track Your Order
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-secondary opacity-20 blur-xl"
                ></motion.div>
                
                <div className="glass p-8 rounded-3xl backdrop-blur-lg">
                  <div className="grid grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="neumorphic w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Premium Laundry
              </span>{" "}
              Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From everyday washing to specialized care, we offer comprehensive laundry services
              tailored to your needs with transparent pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full glass border-0 hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button size="sm" variant="ghost" className="group-hover:text-primary">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their laundry needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="glass border-0 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience
              <br />
              Premium Laundry Care?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule your first pickup today and discover why thousands of customers 
              trust LaundryPro for their fabric care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookNow}
                size="lg"
                variant="secondary"
                className="text-primary font-semibold hover:scale-105 transition-transform"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Book Your First Pickup
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 8318472644
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;