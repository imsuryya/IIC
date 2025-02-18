import Image from "next/image"

// Generate 27 team members (9 rows × 3 columns)
const teamMembers = Array.from({ length: 27 }, (_, i) => ({
  name: `Team Member ${i + 1}`,
  role: [
    "Payment Gateway Support",
    "VP of Customer Success",
    "Specialized Support",
    "Customer Success Lead",
    "Technical Support",
  ][i % 5],
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SRAMkM5qLaieP106xVbICUo0IIQnSP.png",
}))

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col">
          <div className="relative aspect-square mb-4">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover object-center rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-lg">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}