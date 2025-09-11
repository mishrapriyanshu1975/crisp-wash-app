import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Package, 
  Clock, 
  MapPin, 
  Search,
  Eye,
  Download,
  RefreshCw,
  Truck,
  CheckCircle,
  AlertCircle,
  Calendar,
  Phone
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Orders = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  // Mock order data - in real app this would come from backend
  const orders = [
    {
      id: "LP001",
      service: "Wash & Fold",
      status: "delivered",
      pickupDate: "2024-01-15",
      deliveryDate: "2024-01-17",
      weight: "5.2kg",
      total: 416,
      items: 12,
      address: "KIET Group, Muradnagar",
      progress: 100,
      trackingStages: [
        { stage: "Pickup Scheduled", completed: true, time: "2024-01-15 09:00 AM" },
        { stage: "Items Collected", completed: true, time: "2024-01-15 10:30 AM" },
        { stage: "In Processing", completed: true, time: "2024-01-15 02:00 PM" },
        { stage: "Quality Check", completed: true, time: "2024-01-16 11:00 AM" },
        { stage: "Out for Delivery", completed: true, time: "2024-01-17 08:00 AM" },
        { stage: "Delivered", completed: true, time: "2024-01-17 11:30 AM" }
      ]
    },
    {
      id: "LP002",
      service: "Dry Cleaning",
      status: "in-process",
      pickupDate: "2024-01-18",
      deliveryDate: "2024-01-20",
      weight: "2.1kg",
      total: 315,
      items: 3,
      address: "KIET Group, Muradnagar",
      progress: 60,
      trackingStages: [
        { stage: "Pickup Scheduled", completed: true, time: "2024-01-18 10:00 AM" },
        { stage: "Items Collected", completed: true, time: "2024-01-18 11:15 AM" },
        { stage: "In Processing", completed: true, time: "2024-01-18 03:30 PM" },
        { stage: "Quality Check", completed: false, time: "" },
        { stage: "Out for Delivery", completed: false, time: "" },
        { stage: "Delivered", completed: false, time: "" }
      ]
    },
    {
      id: "LP003",
      service: "Express Service",
      status: "pending",
      pickupDate: "2024-01-20",
      deliveryDate: "2024-01-20",
      weight: "3.0kg",
      total: 640,
      items: 8,
      address: "KIET Group, Muradnagar",
      progress: 20,
      trackingStages: [
        { stage: "Pickup Scheduled", completed: true, time: "2024-01-20 02:00 PM" },
        { stage: "Items Collected", completed: false, time: "" },
        { stage: "In Processing", completed: false, time: "" },
        { stage: "Quality Check", completed: false, time: "" },
        { stage: "Out for Delivery", completed: false, time: "" },
        { stage: "Delivered", completed: false, time: "" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "in-process": return "bg-blue-500";
      case "pending": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered": return "Delivered";
      case "in-process": return "In Process";
      case "pending": return "Pickup Pending";
      default: return "Unknown";
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = selectedTab === "all" || order.status === selectedTab;
    return matchesSearch && matchesTab;
  });

  const handleViewDetails = (orderId: string) => {
    toast({
      title: "Order Details",
      description: `Viewing details for order ${orderId}`,
    });
  };

  const handleDownloadInvoice = (orderId: string) => {
    toast({
      title: "Invoice Downloaded",
      description: `Invoice for order ${orderId} has been downloaded`,
    });
  };

  const handleTrackOrder = (orderId: string) => {
    toast({
      title: "Real-time Tracking",
      description: "Live tracking will be available once integrated with backend",
    });
  };

  const handleBookAnother = () => {
    navigate("/booking");
  };

  const handleCallSupport = () => {
    toast({
      title: "Calling Support",
      description: "Calling 8318472644 for assistance",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Orders
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Track your laundry orders and manage your service history
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search orders by ID or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handleBookAnother} className="btn-hero">
                <Package className="mr-2 h-4 w-4" />
                Book New Order
              </Button>
              <Button onClick={handleCallSupport} variant="outline" className="btn-glass">
                <Phone className="mr-2 h-4 w-4" />
                Support
              </Button>
            </div>
          </div>

          {/* Order Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="in-process">Processing</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Orders List */}
          <div className="space-y-6">
            {filteredOrders.length === 0 ? (
              <Card className="glass border-0 text-center py-12">
                <CardContent>
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Orders Found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm ? "No orders match your search criteria" : "You haven't placed any orders yet"}
                  </p>
                  <Button onClick={handleBookAnother} className="btn-hero">
                    Book Your First Order
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass border-0 hover:shadow-elevated transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className={`w-12 h-12 rounded-full ${getStatusColor(order.status)} flex items-center justify-center`}>
                              {order.status === "delivered" ? (
                                <CheckCircle className="h-6 w-6 text-white" />
                              ) : order.status === "in-process" ? (
                                <RefreshCw className="h-6 w-6 text-white animate-spin" />
                              ) : (
                                <Clock className="h-6 w-6 text-white" />
                              )}
                            </div>
                          </div>
                          <div>
                            <CardTitle className="text-xl flex items-center gap-2">
                              Order #{order.id}
                              <Badge variant="outline">{order.service}</Badge>
                            </CardTitle>
                            <p className="text-muted-foreground">
                              {order.items} items • {order.weight} • ₹{order.total.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{order.progress}%</span>
                        </div>
                        <Progress value={order.progress} className="h-2" />
                      </div>

                      {/* Order Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-muted-foreground">Pickup</p>
                            <p className="font-medium">{order.pickupDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-muted-foreground">Delivery</p>
                            <p className="font-medium">{order.deliveryDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-muted-foreground">Address</p>
                            <p className="font-medium">{order.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tracking Timeline */}
                      <div className="border-t border-border/50 pt-4">
                        <h4 className="font-semibold mb-3 text-sm">Tracking Timeline</h4>
                        <div className="space-y-3">
                          {order.trackingStages.map((stage, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${
                                stage.completed ? "bg-primary" : "bg-muted-foreground/30"
                              }`}></div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <span className={`text-sm font-medium ${
                                    stage.completed ? "text-foreground" : "text-muted-foreground"
                                  }`}>
                                    {stage.stage}
                                  </span>
                                  {stage.time && (
                                    <span className="text-xs text-muted-foreground">
                                      {stage.time}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                        <Button
                          onClick={() => handleViewDetails(order.id)}
                          variant="outline"
                          size="sm"
                          className="btn-glass"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        
                        <Button
                          onClick={() => handleTrackOrder(order.id)}
                          variant="outline"
                          size="sm"
                          className="btn-glass"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          Live Track
                        </Button>
                        
                        {order.status === "delivered" && (
                          <Button
                            onClick={() => handleDownloadInvoice(order.id)}
                            variant="outline"
                            size="sm"
                            className="btn-glass"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Invoice
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass border-0 text-center p-6">
              <Package className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Book New Service</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a new pickup for your laundry needs
              </p>
              <Button onClick={handleBookAnother} className="btn-hero w-full">
                Book Now
              </Button>
            </Card>
            
            <Card className="glass border-0 text-center p-6">
              <RefreshCw className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Repeat Last Order</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Quickly reorder your most recent service
              </p>
              <Button onClick={handleBookAnother} variant="outline" className="btn-glass w-full">
                Repeat Order
              </Button>
            </Card>
            
            <Card className="glass border-0 text-center p-6">
              <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our support team for assistance
              </p>
              <Button onClick={handleCallSupport} variant="outline" className="btn-glass w-full">
                Call Support
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;