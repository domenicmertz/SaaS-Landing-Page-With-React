import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DashboardPreview from './components/DashboardPreview'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (\n    <div className=\"overflow-hidden bg-white\">\n      <Navbar />\n      <main>\n        <Hero />\n        <TrustedBy />\n        <Features />\n        <HowItWorks />\n        <DashboardPreview />\n        <Pricing />\n        <Testimonials />\n        <FAQ />\n        <CTABanner />\n      </main>\n      <Footer />\n    </div>\n  )\n}
