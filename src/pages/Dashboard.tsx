import LandingNavbar from "@/components/LandingNavbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import FloatingElements from "@/components/FloatingElements"

export default function Dashboard() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <LandingNavbar />
      <Hero />
      <Features />
      <FloatingElements />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to streamline your contractor management?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies worldwide who trust ContractorPay for their global workforce management.
          </p>
        </div>
      </section>
    </div>
  )
}