"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Shield,
  DollarSign,
  FileText,
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Automated Compliance",
      description: "Stay compliant with local tax laws and regulations in 150+ countries automatically.",
      stats: "99.9% compliance rate",
    },
    {
      icon: DollarSign,
      title: "Seamless Payments",
      description: "Pay contractors in their preferred currency with competitive exchange rates.",
      stats: "50+ currencies",
    },
    {
      icon: FileText,
      title: "Contract Management",
      description: "Create, manage, and store contracts with built-in legal templates.",
      stats: "Legal templates included",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to manage contractors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to hire, pay, and manage contractors worldwide with complete compliance and transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {feature.description}
                      </p>
                      <div className="text-sm font-medium text-blue-600">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}