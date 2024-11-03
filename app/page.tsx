'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, TrendingUp, Landmark, Bitcoin, DollarSign, BarChart2, Package, FileText, Receipt, Users, Home, Layers, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ... (keep all the existing interfaces and components)

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home')

  // ... (keep all the existing code, including assetClasses, debtInstruments, bondWebsites, and render functions)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {renderHeader()}
      <main className="max-w-7xl mx-auto py-12">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && renderHomePage()}
          {currentPage === 'debt' && renderDebtPage()}
          {currentPage === 'bonds' && renderBondsPage()}
        </AnimatePresence>
      </main>
      {currentPage !== 'home' && (
        <motion.div
          className="fixed bottom-8 left-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={() => setCurrentPage(currentPage === 'bonds' ? 'debt' : 'home')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {currentPage === 'bonds' ? 'Back to Debt Instruments' : 'Back to Home'}
          </button>
        </motion.div>
      )}
    </div>
  )
}
