import Navbar from "../components/navbar"
import { TextHoverEffectDemo } from "./hero/page"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TextHoverEffectDemo/>

      {/* Add content for scroll testing */}
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="h-[200vh]" />
      </div>
    </main>
  )
}

  