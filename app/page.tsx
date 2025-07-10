import Header from "@/components/sections/Headers"
import Footer from "@/components/sections/Footer"
import Hero from "@/components/sections/Hero"

export default function Page() {
  return (
    <div className="pt-[4.75rem] lg:pt-[4.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}