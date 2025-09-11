import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in real app this would come from backend
  const stats = {
    totalOrders: 1247,
    activeUsers: 348,
    monthlyRevenue: 245680,
    completionRate: 95.4
  };

  const recentOrders = [
    { id: "LP001", customer: "Priya Sharma", service: "Wash & Fold", status: "delivered", amount: 416, date: "2024-01-17" },
    { id: "LP002", customer: "Rajesh Kumar", service: "Dry Cleaning", status: "in-process", amount: 315, date: "2024-01-18" },
    { id: "LP003", customer: "Anita Singh", service: "Express Service", status: "pending", amount: 640, date: "2024-01-20" },
    { id: "LP004", customer: "Vikash Gupta", service: "Premium Care", status: "delivered", amount: 800, date: "2024-01-19" },
    { id: "LP005", customer: "Meera Joshi", service: "Steam Ironing", status: "in-process", amount: 180, date: "2024-01-20" }
  ];

  const users = [
    { id: 1, name: "Priya Sharma", email: "priya@email.com", orders: 12, totalSpent: 4800, joinDate: "2023-08-15", status: "active" },
    { id: 2, name: "Rajesh Kumar", email: "rajesh@email.com", orders: 8, totalSpent: 3200, joinDate: "2023-09-22", status: "active" },
    { id: 3, name: "Anita Singh", email: "anita@email.com", orders: 15, totalSpent: 6400, joinDate: "2023-07-10", status: "active" },
    { id: 4, name: "Vikash Gupta", email: "vikash@email.com", orders: 6, totalSpent: 2400, joinDate: "2023-11-05", status: "inactive" },
    { id: 5, name: "Meera Joshi", email: "meera@email.com", orders: 9, totalSpent: 3600, joinDate: "2023-10-18", status: "active" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "in-process": return "bg-blue-500";
      case "pending": return "bg-yellow-500";
      case "active": return "bg-green-500";
      case "inactive": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: string) => {
    toast({
      title: "Order Status Updated",
      description: `Order ${orderId} status changed to ${newStatus}`,
    });
  };

  const handleEditUser = (userId: number) => {
    toast({
      title: "Edit User",
      description: `Editing user ID: ${userId}`,
    });
  };

  const handleDeleteUser = (userId: number) => {
    toast({
      title: "Delete User",
      description: `User ID: ${userId} has been deleted`,
    });
  };

  const handleViewDetails = (id: string | number, type: string) => {
    toast({
      title: "View Details",
      description: `Viewing ${type} details for ID: ${id}`,
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
            <Badge variant="secondary" className="mb-4">
              <Settings className="w-4 h-4 mr-2" />
              Admin Panel
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dashboard
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Manage orders, users, and monitor business performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Total Orders", value: stats.totalOrders.toLocaleString(), icon: Package, color: "from-blue-500 to-cyan-500", change: "+12%" },
              { title: "Active Users", value: stats.activeUsers.toLocaleString(), icon: Users, color: "from-green-500 to-teal-500", change: "+8%" },
              { title: "Monthly Revenue", value: `₹${stats.monthlyRevenue.toLocaleString()}`, icon: DollarSign, color: "from-purple-500 to-pink-500", change: "+15%" },
              { title: "Completion Rate", value: `${stats.completionRate}%`, icon: TrendingUp, color: "from-orange-500 to-red-500", change: "+2%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass border-0 hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                          {stat.change}
                        </Badge>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <Card className="glass border-0">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center">
                      <Package className="mr-2 h-5 w-5" />
                      Recent Orders
                    </CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search orders..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full ${getStatusColor(order.status)} flex items-center justify-center`}>
                            <Package className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">#{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.customer}</p>
                          </div>
                          <Badge variant="outline">{order.service}</Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-medium">₹{order.amount.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" onClick={() => handleViewDetails(order.id, "order")}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => handleUpdateOrderStatus(order.id, "delivered")}>
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user, index) => (
                      <motion.div
                        key={user.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Orders</p>
                            <p className="font-medium">{user.orders}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Spent</p>
                            <p className="font-medium">₹{user.totalSpent.toLocaleString()}</p>
                          </div>
                          <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" onClick={() => handleViewDetails(user.id, "user")}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => handleEditUser(user.id)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => handleDeleteUser(user.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Revenue Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>This Month</span>
                        <span className="font-bold text-primary">₹2,45,680</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        75% of monthly target achieved
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="mr-2 h-5 w-5" />
                      Service Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { service: "Wash & Fold", percentage: 45, color: "bg-blue-500" },
                        { service: "Dry Cleaning", percentage: 30, color: "bg-purple-500" },
                        { service: "Steam Ironing", percentage: 15, color: "bg-green-500" },
                        { service: "Premium Care", percentage: 10, color: "bg-orange-500" }
                      ].map((item) => (
                        <div key={item.service} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                            <span className="text-sm">{item.service}</span>
                          </div>
                          <span className="text-sm font-medium">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Service Areas</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Manage delivery zones and pricing
                        </p>
                        <Button variant="outline" className="btn-glass">
                          Configure Areas
                        </Button>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Pricing Rules</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Update service rates and discounts
                        </p>
                        <Button variant="outline" className="btn-glass">
                          Manage Pricing
                        </Button>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Notifications</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Configure email and SMS templates
                        </p>
                        <Button variant="outline" className="btn-glass">
                          Edit Templates
                        </Button>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Integration</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Payment gateways and APIs
                        </p>
                        <Button variant="outline" className="btn-glass">
                          Manage APIs
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;