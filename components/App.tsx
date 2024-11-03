'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, TrendingUp, Landmark, Bitcoin, DollarSign, BarChart2, Package, FileText, Receipt, Users, Home, Layers, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AssetClass {
  name: string
  icon: React.ElementType
  description: string
  risk: 'Low' | 'Medium' | 'High'
  returns: string
}

interface DebtInstrument {
  name: string
  icon: React.ElementType
  description: string
  risk: 'Low' | 'Medium' | 'High'
  returns: string
}

interface BondWebsite {
  name: string
  url: string
  description: string
}

const RiskMeter: React.FC<{ risk: 'Low' | 'Medium' | 'High' }> = ({ risk }) => {
  const riskLevels = ['Low', 'Medium', 'High']
  const riskColors = {
    Low: 'bg-green-500',
    Medium: 'bg-yellow-500',
    High: 'bg-red-500'
  }

  return (
    <div className="flex items-center space-x-1">
      {riskLevels.map((level) => (
        <div
          key={level}
          className={`h-2 w-6 rounded-full ${
            riskLevels.indexOf(level) <= riskLevels.indexOf(risk) ? riskColors[risk] : 'bg-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600">{risk} Risk</span>
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const assetClasses: AssetClass[] = [
    {
      name: "Stocks",
      icon: TrendingUp,
      description: "Ownership in publicly traded companies",
      risk: "High",
      returns: "7% - 10% (historical average)"
    },
    {
      name: "Debt",
      icon: Landmark,
      description: "Fixed income instruments like bonds and deposits",
      risk: "Low",
      returns: "2% - 6% (varies by instrument)"
    },
    {
      name: "Crypto",
      icon: Bitcoin,
      description: "Digital or virtual currencies",
      risk: "High",
      returns: "Highly volatile, potentially >100% or total loss"
    },
    {
      name: "Forex",
      icon: DollarSign,
      description: "Foreign currency exchange market",
      risk: "Medium",
      returns: "2% - 5% (average annual return)"
    },
    {
      name: "Futures & Options",
      icon: BarChart2,
      description: "Derivative contracts for future transactions",
      risk: "High",
      returns: "Highly variable, potentially >100% or total loss"
    },
    {
      name: "Commodities",
      icon: Package,
      description: "Raw materials or primary agricultural products",
      risk: "Medium",
      returns: "2% - 10% (varies by commodity)"
    },
    {
      name: "ETFs",
      icon: BarChart2,
      description: "Baskets of securities that track indexes, sectors, or commodities",
      risk: "Medium",
      returns: "7% - 10% (varies by fund type)"
    },
  ]

  const debtInstruments: DebtInstrument[] = [
    {
      name: "National Pension Scheme",
      icon: Landmark,
      description: "Government-backed pension scheme for retirement planning",
      risk: "Low",
      returns: "8% - 12%"
    },
    {
      name: "Fixed Deposits",
      icon: Landmark,
      description: "Time deposits with banks offering fixed interest rates",
      risk: "Low",
      returns: "5% - 7.5%"
    },
    {
      name: "Bonds",
      icon: FileText,
      description: "Debt securities issued by governments or corporations",
      risk: "Low",
      returns: "4% - 8%"
    },
    {
      name: "Invoice Discounting",
      icon: Receipt,
      description: "Short-term financing based on unpaid invoices",
      risk: "Medium",
      returns: "10% - 14%"
    },
    {
      name: "P2P Lending",
      icon: Users,
      description: "Direct lending between individuals or businesses",
      risk: "High",
      returns: "10% - 15%"
    },
    {
      name: "Fractional Ownership",
      icon: Layers,
      description: "Partial ownership of high-value real estate properties",
      risk: "Medium",
      returns: "8% - 12%"
    },
    {
      name: "REITs",
      icon: Home,
      description: "Investment trusts that own and operate income-generating real estate",
      risk: "Medium",
      returns: "6% - 10%"
    }
  ]

  const bondWebsites: BondWebsite[] = [
    { name: "IndiaBonds", url: "https://indiabonds.com", description: "Comprehensive bond trading platform" },
    { name: "Altifi.AI", url: "https://altifi.ai", description: "AI-powered bond investment solutions" },
    { name: "Aspero", url: "https://aspero.in", description: "Simplified bond investing for retail investors" },
    { name: "TheFixedIncome", url: "https://thefixedincome.com", description: "Curated fixed income investment opportunities" },
    { name: "Bondskart", url: "https://bondskart.com", description: "One-stop shop for all types of bonds" },
    { name: "INRBONDS", url: "https://inrbonds.com", description: "Specializing in Indian Rupee denominated bonds" },
    { name: "BONDSINDIA", url: "https://bondsindia.com", description: "Diverse bond offerings for Indian investors" },
    { name: "STOCKIFY", url: "https://stockify.net", description: "Integrated platform for stocks and bonds" },
    { name: "SMEST", url: "https://smest.in", description: "Smart investment solutions including bonds" },
    { name: "GRIPINVEST", url: "https://gripinvest.in", description: "Alternative investment platform featuring bonds" },
    { name: "VESTEDFINANCE", url: "https://vestedfinance.com", description: "Global investment opportunities including bonds" },
    { name: "MATALIA", url: "https://matalia.co.in", description: "Boutique bond investment services" },
    { name: "INCREDMONEY", url: "https://incredmoney.com", description: "Innovative bond and fixed income solutions" },
    { name: "INDMONEY", url: "https://indmoney.com", description: "All-in-one investment app with bond offerings" },
    { name: "JIRAAF", url: "https://jiraaf.com", description: "Alternative fixed-income investment platform" },
    { name: "GOLDENPI", url: "https://goldenpi.com", description: "Focused on high-yield bond opportunities" },
    { name: "WINTWEALTH", url: "https://wintwealth.com", description: "Curated high-yield fixed income investments" },
    { name: "ALTGRAAF", url: "https://altgraaf.com", description: "Algorithmic bond trading and investments" }
  ]

  const renderHeader = () => (
    <header className="bg-white bg-opacity-90 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          {currentPage === 'home' ? 'Investment Explorer' : 
           currentPage === 'debt' ? 'Debt Instruments Explorer' : 
           'Bond Investment Platforms'}
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-indigo-600 transition-colors">Home</button></li>
            <li><button className="text-gray-600 hover:text-indigo-600 transition-colors">About</button></li>
            <li><button className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )

  const renderHomePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Asset Classes</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover a wide range of investment opportunities across various asset classes. Compare risk profiles and potential returns to make informed decisions.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {assetClasses.map((asset, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="px-6 py-6 flex-grow">
              <asset.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{asset.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{asset.description}</p>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Potential Returns:</div>
                <div className="text-lg font-semibold text-indigo-600">{asset.returns}</div>
              </div>
              <RiskMeter risk={asset.risk} />
            </div>
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 mt-auto">
              <button 
                onClick={() => asset.name === "Debt" ? setCurrentPage('debt') : null}
                className="w-full text-white font-medium flex items-center justify-center hover:underline"
              >
                Explore {asset.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="fixed bottom-8 right-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button 
          onClick={() => setCurrentPage('debt')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center"
        >
          Explore Debt Instruments
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  )

  const renderDebtPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Debt Instruments</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover a wide range of debt instruments and their potential returns. Compare risk profiles and find the right investment opportunity for you.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {debtInstruments.map((instrument, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="px-6 py-6 flex-grow">
              <instrument.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{instrument.name}</h3>
              <p className="text-gray-600 mb-4">{instrument.description}</p>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Potential Returns:</div>
                <div className="text-lg font-semibold text-indigo-600">{instrument.returns}</div>
              </div>
              <RiskMeter risk={instrument.risk} />
            </div>
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 mt-auto">
              
              {instrument.name === "Bonds" ? (
                <button 
                  onClick={() => setCurrentPage('bonds')}
                  className="w-full text-white font-medium flex items-center justify-center hover:underline"
                >
                  Explore Bond Investments
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button className="w-full text-white font-medium flex items-center justify-center hover:underline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  const renderBondsPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Bond Investment Opportunities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover a wide range of platforms offering bond investments. Compare options and find the right platform for your investment needs.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {bondWebsites.map((website, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{website.name}</h3>
              <p className="text-gray-600 mb-4">{website.description}</p>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

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
