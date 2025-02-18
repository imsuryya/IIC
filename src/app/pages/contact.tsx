import { MessageCircle, Mail, Twitter, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="First name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Last name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <div className="flex gap-2">
              <Select defaultValue="US">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">US</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="CA">CA</SelectItem>
                </SelectContent>
              </Select>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Leave us a message..." className="min-h-[120px]" />
          </div>

        </form>

        {/* Contact Information */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Chat with us</h2>
            <p className="text-muted-foreground">Speak to our friendly team via live chat.</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 hover:underline">
                <MessageCircle size={18} />
                Start a live chat
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Mail size={18} />
                Shoot us an email
              </a>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <Twitter size={18} />
                Message us on X
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Call us</h2>
            <p className="text-muted-foreground">Call our team Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+1(555)000-0000" className="flex items-center gap-2 hover:underline">
              <Phone size={18} />
              +1 (555) 000-0000
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Visit us</h2>
            <p className="text-muted-foreground">Chat to us in person at our Melbourne HQ.</p>
            <a href="#" className="flex items-center gap-2 hover:underline">
              <MapPin size={18} />
              100 Smith Street, Collingwood VIC 3066
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}