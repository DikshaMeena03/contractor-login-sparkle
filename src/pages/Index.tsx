import LoginForm from "@/components/LoginForm";
import FloatingElements from "@/components/FloatingElements";
import contractorHero from "@/assets/contractor-hero.jpg";
import { Building2, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen login-gradient relative">
      <FloatingElements />
      
      <div className="min-h-screen flex">
        {/* Left Panel - Hero Content */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 relative">
          <div className="max-w-lg animate-fade-in">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent/20 p-3 rounded-xl">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h1 className="text-3xl font-bold text-white">
                  ContractorPro
                </h1>
              </div>
              
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Your Digital
                <br />
                <span className="text-accent">Construction</span>
                <br />
                Hub
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Streamline your projects, manage your team, and grow your business 
                with our comprehensive contractor management platform.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-white/90">
                <Shield className="h-5 w-5 text-accent" />
                <span className="font-medium">Secure project management</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium">Real-time collaboration</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Building2 className="h-5 w-5 text-accent" />
                <span className="font-medium">End-to-end solutions</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slide-in-right">
              <img
                src={contractorHero}
                alt="Professional construction worker with digital tools"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Mobile header */}
            <div className="lg:hidden text-center mb-8 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <h1 className="text-2xl font-bold text-white">
                  ContractorPro
                </h1>
              </div>
              <p className="text-white/80">
                Your Digital Construction Hub
              </p>
            </div>

            <LoginForm />

            {/* Trust indicators */}
            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-xs text-white/60 mb-2">
                Trusted by 10,000+ contractors worldwide
              </p>
              <div className="flex justify-center space-x-4 text-white/40">
                <span className="text-xs">🏗️ Secure</span>
                <span className="text-xs">⚡ Fast</span>
                <span className="text-xs">📱 Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
