import Navbar from "../components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Add content for scroll testing */}
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black">Welcome to CryptGen</h1>
        <div className="h-[200vh]" />
      </div>
    </main>
  )
}

  