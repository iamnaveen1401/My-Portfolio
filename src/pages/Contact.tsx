import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com'; // ✅ Added for email sending

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Updated handleSubmit with EmailJS integration
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_pohzj1f', // 🔹 Replace with your EmailJS Service ID
        'template_zw41odw', // 🔹 Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'e1CnXoUov01X-yqHD' // 🔹 Replace with your EmailJS Public Key
      );

      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background relative transition-colors duration-500">
      <ParticleBackground />
      <div className="container mx-auto px-4 max-w-5xl relative z-20">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 glow-text text-foreground"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Have a question or a project in mind? Feel free to reach out.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Info Card */}
          <motion.div
            className="md:w-1/2 w-full bg-card/70 border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl backdrop-blur-xl transition-colors duration-500"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.24 }}
          >
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Naveen</h2>
              <ul className="text-foreground/90 space-y-3 text-lg">
                <li className="flex items-center gap-3"><Mail className="text-cyan-400 w-5 h-5" /> <a href="mailto:iamnaveen1401@gmail.com" className="hover:text-cyan-400 underline transition">iamnaveen1401@gmail.com</a></li>
                <li className="flex items-center gap-3"><Phone className="text-cyan-400 w-5 h-5" /> <a href="tel:+919344791056" className="hover:text-cyan-400 transition">+91 9344791056</a></li>
                <li className="flex items-center gap-3"><MapPin className="text-cyan-400 w-5 h-5" /> Tamil Nadu, India</li>
              </ul>
              <p className="text-cyan-500 mt-4 mb-6 italic">Let’s connect and create data-driven solutions together.</p>
            </div>

            <div className="mt-6 flex gap-5 items-center">
              <a href="https://www.linkedin.com/in/naveen1401/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:scale-110 hover:shadow-[0_0_14px_3px_#0ff] hover:bg-cyan-500/20 transition-all shadow focus:outline-none" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-cyan-400" />
              </a>
              <a href="https://github.com/iamnaveen1401" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:scale-110 hover:shadow-[0_0_14px_3px_#a259ff] hover:bg-purple-600/20 transition-all shadow focus:outline-none" aria-label="GitHub">
                <Github className="w-6 h-6 text-purple-400" />
              </a>
              <a href="https://instagram.com/yourprofilename" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:scale-110 hover:shadow-[0_0_14px_3px_#fd1d1d] hover:bg-pink-600/20 transition-all shadow focus:outline-none" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-pink-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="md:w-1/2 w-full bg-card/70 border border-border rounded-2xl p-8 shadow-xl flex flex-col justify-center backdrop-blur-md transition-colors duration-500"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.26, delay: 0.12 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-foreground/80 mb-2 font-medium">Name</label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="bg-card text-foreground border border-border focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all rounded-lg shadow placeholder:text-foreground/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground/80 mb-2 font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  className="bg-card text-foreground border border-border focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all rounded-lg shadow placeholder:text-foreground/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-foreground/80 mb-2 font-medium">Message</label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={6}
                  className="bg-card text-foreground border border-border focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all rounded-lg shadow resize-none placeholder:text-foreground/50"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:shadow-[0_0_18px_3px_#0ff] hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg shadow-lg transition-all duration-500 py-3 tracking-wider text-lg"
                >
                  {isSubmitting ? 'Sending…' : (<><Send className="w-5 h-5 mr-2" />Send Message</>)}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
