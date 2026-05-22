'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '' as string,
    month: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in ${formData.package}. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}, Travel Month: ${formData.month}. Message: ${formData.message}`;
    window.open(
      `https://wa.me/918919990806?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );
  };

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-[var(--surface)]" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-['Cinzel'] text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">
            GET IN TOUCH
          </div>
          <h2
            className="font-['Cormorant_Garamond'] text-[var(--cream)]"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Plan Your Journey With Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-['Cinzel'] text-[var(--gold)] text-sm tracking-wider mb-3">
                ADDRESS
              </h3>
              <p className="text-[var(--cream)] leading-relaxed">
                Shop No. 24, 1st Floor, Nandini Cloth Market,
                <br />
                Proddatur, Kadapa, Andhra Pradesh 516360
              </p>
            </div>

            <div>
              <h3 className="font-['Cinzel'] text-[var(--gold)] text-sm tracking-wider mb-3">
                PHONE
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+918919990806"
                  className="block text-[var(--cream)] hover:text-[var(--gold)] transition-colors"
                >
                  +91 8919990806
                </a>
                <a
                  href="tel:+919494455736"
                  className="block text-[var(--cream)] hover:text-[var(--gold)] transition-colors"
                >
                  +91 9494455736
                </a>
                <a
                  href="tel:+919398327853"
                  className="block text-[var(--cream)] hover:text-[var(--gold)] transition-colors"
                >
                  +91 9398327853
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-['Cinzel'] text-[var(--gold)] text-sm tracking-wider mb-3">
                EMAIL
              </h3>
              <a
                href="mailto:alinfotechtours@gmail.com"
                className="text-[var(--cream)] hover:text-[var(--gold)] transition-colors"
              >
                alinfotechtours@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-['Cinzel'] text-[var(--gold)] text-sm tracking-wider mb-4">
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[var(--gold)] text-xs tracking-wider uppercase mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[var(--bg)] border-[var(--border)] text-[var(--cream)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-[var(--gold)] text-xs tracking-wider uppercase mb-2 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[var(--bg)] border-[var(--border)] text-[var(--cream)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[var(--gold)] text-xs tracking-wider uppercase mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[var(--bg)] border-[var(--border)] text-[var(--cream)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="package" className="text-[var(--gold)] text-xs tracking-wider uppercase mb-2 block">
                    Package Interest
                  </Label>
                  <Select value={formData.package || undefined} onValueChange={(value) => setFormData({ ...formData, package: value || '' })}>
                    <SelectTrigger className="bg-[var(--bg)] border-[var(--border)] text-[var(--cream)]">
                      <SelectValue placeholder="Select package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="umrah">Umrah</SelectItem>
                      <SelectItem value="kashmir">Kashmir</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="month" className="text-[var(--gold)] text-xs tracking-wider uppercase mb-2 block">
                    Travel Month
                  </Label>
                  <Input
                    id="month"
                    type="text"
                    placeholder="e.g., June 2025"
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                    className="bg-[var(--bg)] border-[var(--border)] text-[var(--cream)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-[var(--gold)] text-xs tracking-wider uppercase mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[var(--bg)] border-[var(--border)] text-[var(--cream)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--gold)] text-[var(--bg)] font-['Cinzel'] text-sm tracking-wider rounded-full"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(201, 168, 76, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                SUBMIT ENQUIRY
              </motion.button>
            </form>

            <motion.a
              href="https://wa.me/918919990806"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-['Cinzel'] text-sm tracking-wider rounded-full"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              CHAT DIRECTLY ON WHATSAPP
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
