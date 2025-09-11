import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak directly with our team",
      content: "8318472644",
      action: "Call Now",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Send us your questions",
      content: "info@laundrypro.com",
      action: "Send Email",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      subtitle: "Come to our facility",
      content: "KIET Group, Muradnagar",
      action: "Get Directions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Chat with support",
      content: "Available 24/7",
      action: "Start Chat",
      color: "from-orange-500 to-red-500"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 2 hours during business hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactMethod = (method: string) => {
    switch (method) {
      case "Call Now":
        toast({
          title: "Calling LaundryPro",
          description: "Calling 8318472644...",
        });
        break;
      case "Send Email":
        window.location.href = "mailto:info@laundrypro.com";
        break;
      case "Get Directions":
        toast({
          title: "Opening Maps",
          description: "Getting directions to KIET Group, Muradnagar",
        });
        break;
      case "Start Chat":
        toast({
          title: "Live Chat",
          description: "Live chat feature will be integrated with backend",
        });
        break;
    }
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
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Have questions about our services? Need support with your order? 
              We're here to help and would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Multiple Ways to Reach Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Preferred
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Contact Method</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer multiple convenient ways to get in touch with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass border-0 h-full hover:shadow-elevated transition-all duration-300 cursor-pointer"
                      onClick={() => handleContactMethod(method.action)}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.subtitle}</p>
                    <p className="font-medium mb-4">{method.content}</p>
                    <Button size="sm" variant="outline" className="btn-glass group-hover:bg-primary/10">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="mr-2 h-6 w-6 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="service">Service Information</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject of your message"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your inquiry in detail..."
                        required
                        className="mt-1"
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero group">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-primary font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-primary font-medium">
                      <CheckCircle className="inline w-4 h-4 mr-2" />
                      Emergency and express services available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">LaundryPro Facility</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        KIET Group of Institutions<br />
                        Muradnagar, Ghaziabad<br />
                        Uttar Pradesh - 201206<br />
                        India
                      </p>
                    </div>
                    
                    <div className="border-t border-border/50 pt-4">
                      <h4 className="font-semibold mb-2">Service Areas</h4>
                      <p className="text-sm text-muted-foreground">
                        We provide free pickup and delivery services in:
                      </p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Ghaziabad and surrounding areas</li>
                        <li>• Delhi NCR region</li>
                        <li>• Muradnagar and nearby localities</li>
                        <li>• Extended coverage on request</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Stay connected for updates and special offers
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Quick answers to common questions about our services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  question: "What are your pickup times?",
                  answer: "We offer flexible pickup slots from 8 AM to 8 PM, 7 days a week."
                },
                {
                  question: "How long does processing take?",
                  answer: "Standard service: 24-48 hours. Express service: Same day delivery available."
                },
                {
                  question: "Do you offer free pickup & delivery?",
                  answer: "Yes! Free pickup and delivery for all orders within our service area."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept cash, UPI, credit/debit cards, and all major digital payment methods."
                },
                {
                  question: "Is there a minimum order requirement?",
                  answer: "No minimum order for regular service. Express service has a ₹500 minimum."
                },
                {
                  question: "Do you clean delicate fabrics?",
                  answer: "Absolutely! We specialize in caring for delicate and premium fabrics."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass border-0 text-left h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-primary">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;