"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 inset-y-0 w-1/2">
        <svg
          className="absolute top-0 right-0 w-[950px] h-[950px] text-blue-100"
          viewBox="0 0 1109 1009"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M583.273 1008.67L170.702 918.97L0 392.227L622.544 0L1108.42 509.573L583.273 1008.67Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-32 pb-24 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Left Content */}
        <motion.div
          className="max-w-xl lg:pt-16 z-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base font-semibold text-blue-600 mb-3">
            Contractor Pay
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Easily hire contractors compliantly worldwide
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Streamline your global contractor management with automated compliance, 
            seamless payments, and comprehensive contract management - all in one platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Free
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-8 flex items-center space-x-6">
            <div className="flex items-center">
              <span className="text-sm text-gray-500">Trusted by</span>
              <span className="ml-2 font-semibold text-gray-900">2,000+</span>
              <span className="ml-1 text-sm text-gray-500">companies</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">150+</span>
              <span className="ml-1 text-sm text-gray-500">countries</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Image/Visual */}
        <motion.div
          className="relative mt-16 lg:mt-0 lg:ml-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="bg-white rounded-lg shadow-2xl p-6">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}