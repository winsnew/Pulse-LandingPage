import Header from "@/components/sections/Headers"
import Footer from "@/components/sections/Footer"
import Hero from "@/components/sections/Hero"
import Pricing from "@/components/sections/Pricing"
import FaqQuestion from "@/components/sections/FaqQuest"
import ClientLabel from "@/components/sections/Clients"
import Features from "@/components/sections/Feature"
import HowItWorks from "@/components/sections/HowItWorks"

export default function Page() {
  return (
    <div className="pt-[4.75rem] lg:pt-[4.25rem] overflow-hidden">
      <Header />
      <Hero />
      <ClientLabel />
      <Features />
      <HowItWorks />
      <Pricing />
      <FaqQuestion />
      <Footer />
    </div>
  )
}