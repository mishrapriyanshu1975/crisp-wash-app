import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  Heart,
  Target,
  Zap,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on the quality of our service. Every garment receives the care it deserves."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Punctual pickup and delivery, because we respect your time as much as you do."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We go the extra mile to ensure you're happy."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace technology and modern methods to provide the best laundry experience."
    }
  ];

  const achievements = [
    { number: "5000+", label: "Happy Customers" },
    { number: "25000+", label: "Orders Completed" },
    { number: "99.5%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Service Available" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "RK",
      description: "10+ years in textile industry"
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "PS",
      description: "Expert in logistics and quality"
    },
    {
      name: "Vikash Gupta",
      role: "Technical Lead",
      image: "VG",
      description: "Technology and innovation specialist"
    }
  ];

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
            <Badge variant="secondary" className="mb-4">About LaundryPro</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Redefining
              <br />
              <span className="text-secondary">Laundry Care</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Since our founding, we've been committed to providing premium laundry services 
              that combine traditional care with modern technology and convenience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From a Simple Idea to
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Premium Service</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LaundryPro was born from a simple observation: people in our community 
                  needed a reliable, high-quality laundry service that they could trust 
                  with their precious garments.
                </p>
                <p>
                  Starting from a small facility in Muradnagar, we've grown to serve 
                  thousands of customers across Ghaziabad and Delhi NCR. Our commitment 
                  to excellence has remained unchanged - every piece of clothing is 
                  treated with the same care we'd give our own.
                </p>
                <p>
                  Today, we're proud to be the leading laundry service in the region, 
                  combining traditional fabric care knowledge with modern technology 
                  and eco-friendly processes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> Every Day</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape everything we do, from how we treat your clothes 
              to how we serve our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass border-0 h-full text-center hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the People Behind
              <span className="bg-gradient-primary bg-clip-text text-transparent"> LaundryPro</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team brings together years of experience in textile care, 
              technology, and customer service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="glass border-0 text-center hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Ensure
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> Perfect Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every garment goes through our carefully designed process to ensure 
              the best possible care and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Collection", description: "Free pickup from your doorstep at your preferred time" },
              { step: "02", title: "Sorting", description: "Professional sorting by fabric type, color, and care requirements" },
              { step: "03", title: "Processing", description: "Expert cleaning using premium products and techniques" },
              { step: "04", title: "Delivery", description: "Careful packaging and timely delivery to your door" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="glass border-0 text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Get in Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Facility</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always happy to show you our facilities and discuss how we can 
              best serve your laundry needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                content: ["KIET Group of Institutions", "Muradnagar, Ghaziabad", "201206, UP"]
              },
              {
                icon: Phone,
                title: "Call Us",
                content: ["8318472644", "Available 24/7", "Quick response guaranteed"]
              },
              {
                icon: Mail,
                title: "Email Us",
                content: ["info@laundrypro.com", "support@laundrypro.com", "We reply within 2 hours"]
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="glass border-0 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-secondary mx-auto mb-4 flex items-center justify-center">
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{contact.title}</h3>
                    <div className="space-y-1">
                      {contact.content.map((line, idx) => (
                        <p key={idx} className={idx === 0 ? "font-medium" : "text-sm text-muted-foreground"}>
                          {line}
                        </p>
                      ))}
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
              LaundryPro Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their laundry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/booking")}
                size="lg"
                variant="secondary"
                className="text-primary font-semibold hover:scale-105 transition-transform"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Book Your Service
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;