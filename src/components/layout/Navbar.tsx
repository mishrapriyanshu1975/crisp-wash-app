import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  X, 
  Droplets, 
  ChevronDown,
  User,
  LogOut,
  Settings,
  Package
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, profile, signOut, signInWithGoogle, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogin = () => {
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const handleSignup = () => {
    navigate("/signup");
    setIsMobileMenuOpen(false);
  };

  const handleGoogleAuth = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      toast({
        title: "Authentication Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Google Authentication",
        description: "Signing in with Google...",
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/");
  };

  const handleBookNow = () => {
    if (user) {
      navigate("/booking");
    } else {
      navigate("/login");
    }
    setIsMobileMenuOpen(false);
  };

  const handleTrackOrder = () => {
    if (user) {
      navigate("/orders");
    } else {
      navigate("/login");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass backdrop-blur-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Droplets className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-glow"></div>
          </motion.div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            LaundryPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {loading ? (
            <div className="h-8 w-20 bg-muted/50 animate-pulse rounded"></div>
          ) : user ? (
            <>
              <Button
                variant="ghost"
                onClick={handleTrackOrder}
                className="text-foreground hover:text-primary"
              >
                Track Order
              </Button>
              <Button onClick={handleBookNow} className="btn-hero">
                Book Now
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="btn-glass flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {profile?.first_name?.charAt(0) || user.email?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm">
                      {profile?.first_name || user.email?.split('@')[0]}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => navigate('/orders')}>
                    <Package className="mr-2 h-4 w-4" />
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={handleLogin}
                className="text-foreground hover:text-primary"
              >
                Login
              </Button>
              <Button onClick={handleSignup} className="btn-hero">
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-primary"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-l border-white/20">
            <div className="flex flex-col space-y-6 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-white/20 pt-6 space-y-4">
                {user ? (
                  <>
                    <Button
                      onClick={handleTrackOrder}
                      variant="outline"
                      className="w-full border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Track Order
                    </Button>
                    <Button onClick={handleBookNow} className="w-full btn-hero">
                      Book Now
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="ghost"
                      className="w-full text-foreground hover:text-primary"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleLogin}
                      variant="outline"
                      className="w-full border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Login
                    </Button>
                    <Button onClick={handleSignup} className="w-full btn-hero">
                      Sign Up
                    </Button>
                    <Button
                      onClick={handleGoogleAuth}
                      variant="outline"
                      className="w-full border-secondary/20 text-secondary hover:bg-secondary/10"
                    >
                      Sign in with Google
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;