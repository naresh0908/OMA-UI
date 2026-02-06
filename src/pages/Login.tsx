import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleSSO = () => {
    navigate("/home");
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Image with Logo */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZ2xhc3MlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzAxODcyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="OMA Tool Logo"
            className="h-32 w-auto mb-6 drop-shadow-lg"
          />
          <h1 className="text-white text-6xl font-light tracking-wider drop-shadow-md">
            OMA Tool
          </h1>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8 flex flex-col items-center">
            <img
              src={logo}
              alt="OMA Tool Logo"
              className="h-24 w-auto mb-4"
            />
            <h1 className="text-4xl font-light tracking-wider text-[#002D72]">
              OMA Tool
            </h1>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-light text-[#002D72]">Welcome back</h2>
            <p className="text-[#4A4A4A]">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#4A4A4A]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-gray-300 focus:border-[#002D72] focus:ring-[#002D72]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#4A4A4A]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 border-gray-300 focus:border-[#002D72] focus:ring-[#002D72]"
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-[#4A4A4A] hover:text-[#002D72] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#002D72] hover:bg-[#001f52] text-white"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#4A4A4A]">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleSSO}
              className="w-full h-12 border-2 border-gray-300 hover:border-[#002D72] hover:bg-gray-50"
            >
              Sign in with SSO
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
