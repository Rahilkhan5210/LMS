
import { Award, BookOpen, GraduationCap, Menu, Newspaper, School } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Button } from "../button";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import DarkMode from "@/components/ui/DarkMode/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/Features/Api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import CertificationDropdown from "@/pages/CertificationDropDown";
import LearnLoftsLogo from "../../../assets/frontend_assets/logo.png"


const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const [showCertifications, setShowCertifications] = useState(false);

  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Logged out successfully.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <>
      <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            
            <Link to="/">
              <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">
              <img src={LearnLoftsLogo} alt="logo" className="h-8 sm:h-10 w-auto" />
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ">
            <nav className="flex items-center gap-6 text-black-700 dark:text-black-200">
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-primary transition-colors duration-200 font-medium"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-1 hover:text-primary transition-colors duration-200 font-medium"
              >
                <BookOpen className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link
                to="/blogs"
                className="flex items-center gap-1 hover:text-primary transition-colors duration-200 font-medium"
              >
                <Newspaper className="h-4 w-4" />
                <span>Blogs</span>
              </Link>
              <div
                className="relative group"
                onMouseEnter={() => setShowCertifications(true)}
                onMouseLeave={() => setShowCertifications(false)}
              >
                <button
                  onClick={() => navigate("/student/certification")}
                  className="flex items-center gap-1 text-base font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Award className="h-4 w-4" />
                  <span>Certification</span>
                </button>
                {showCertifications && (
                  <CertificationDropdown onMouseLeave={() => setShowCertifications(false)} />
                )}
              </div>
            </nav>

            {/* Avatar / Auth */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer hover:ring-2 ring-primary transition">
                    <AvatarImage
                      src={user?.photoUrl || "https://github.com/shadcn.png"}
                      alt="user"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 shadow-lg rounded-lg">
                  <DropdownMenuLabel className="text-sm text-muted-foreground">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/my-learning">📚 My Learning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile">👤 Edit Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler}>
                      🚪 Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  {user?.role === "instructor" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/admin/dashboard">📊 Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="ghost" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button onClick={() => navigate("/login")}>Sign Up</Button>
              </div>
            )}
            <DarkMode />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileNavbar user={user} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;

const MobileNavbar = ({ user }) => {
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  const logoutHandler = async () => {
    await logoutUser();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col justify-between py-6 px-5">
        <div>
          <SheetHeader className="flex flex-row items-center justify-between mb-6">
            <SheetTitle>
              <Link to="/" className="text-xl font-bold">LearnLofts</Link>
            </SheetTitle>
            <DarkMode />
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-base hover:text-primary">Home</Link>
            <Link to="/about" className="text-base hover:text-primary">About</Link>
            <Link to="/blogs" className="text-base hover:text-primary">Blogs</Link>
            <Link to="/certifications" className="text-base hover:text-primary">
              <CertificationDropdown />
            </Link>

            {user && (
              <>
                <Link to="/my-learning" className="text-base hover:text-primary">My Learning</Link>
                <Link to="/profile" className="text-base hover:text-primary">Edit Profile</Link>
                <button onClick={logoutHandler} className="text-base hover:text-red-500 text-left">
                  Log out
                </button>
              </>
            )}

            {user?.role === "instructor" && (
              <Button className="mt-4 w-full" onClick={() => navigate("/admin/dashboard")}>
                Instructor Dashboard
              </Button>
            )}
          </nav>
        </div>

        {!user && (
          <div className="flex flex-col gap-3">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/login")}>
              Sign Up
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};



