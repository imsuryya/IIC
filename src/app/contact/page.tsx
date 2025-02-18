import { MessageCircle, Mail, Twitter, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundBeams />
      <Navbar />
      
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Contact Form */}
          <form className="space-y-6 mt-8 md:mt-0">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="text-white">First name</Label>
                <Input id="firstname" placeholder="First name" className="bg-white/10 text-white placeholder:text-gray-400" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-white">Last name</Label>
                <Input id="lastname" placeholder="Last name" className="bg-white/10 text-white placeholder:text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" className="bg-white/10 text-white placeholder:text-gray-400" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone number</Label>
              <div className="flex gap-2">
                <Select defaultValue="US">
                  <SelectTrigger className="w-[100px] bg-white/10 text-white">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">US</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="CA">CA</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-white/10 text-white placeholder:text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Leave us a message..." 
                className="min-h-[120px] bg-white/10 text-white placeholder:text-gray-400" 
              />
            </div>

            <button className="w-full sm:w-auto rounded-full bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors">
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Chat with us</h2>
              <p className="text-gray-300">Speak to our friendly team via live chat.</p>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <MessageCircle size={18} />
                  Start a live chat
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Mail size={18} />
                  Shoot us an email
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Twitter size={18} />
                  Message us on X
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Call us</h2>
              <p className="text-gray-300">Call our team Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+1(555)000-0000" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                +1 (555) 000-0000
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Visit us</h2>
              <p className="text-gray-300">Chat to us in person at our Melbourne HQ.</p>
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <MapPin size={18} />
                100 Smith Street, Collingwood VIC 3066
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}