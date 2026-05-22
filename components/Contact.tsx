'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    month: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}. I'm interested in ${formData.package}. Travel Month: ${formData.month}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/918919990806?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-green section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white"
          >
            <p className="eyebrow text-gold-light mb-4">GET IN TOUCH</p>
            <h2 className="font-playfair font-medium text-5xl mb-6">
              Plan Your Journey With Us
            </h2>
            <div className="w-[60px] h-[1px] bg-gold-light mb-12" />

            {/* Address */}
            <div className="mb-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-gold-light mb-3">
                VISIT US
              </p>
              <p className="font-lato leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Shop No. 24, 1st Floor, Nandini Cloth Market,
                <br />
                Proddatur, Kadapa, Andhra Pradesh 516360
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-gold-light mb-3">
                CALL US
              </p>
              <div className="space-y-2 font-lato" style={{ color: 'rgba(255,255,255,0.9)' }}>
                <a href="tel:+918919990806" className="block hover:text-gold-light transition-colors">
                  +91 89199 90806
                </a>
                <a href="tel:+917896550806" className="block hover:text-gold-light transition-colors">
                  +91 78965 50806
                </a>
                <a href="tel:+919494455736" className="block hover:text-gold-light transition-colors">
                  +91 94944 55736
                </a>
                <a href="tel:+919398327853" className="block hover:text-gold-light transition-colors">
                  +91 93983 27853
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-gold-light mb-3">
                EMAIL
              </p>
              <a
                href="mailto:alinfotechtours@gmail.com"
                className="font-lato hover:text-gold-light transition-colors"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                alinfotechtours@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="mb-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-gold-light mb-3">
                FOLLOW US
              </p>
              <p className="font-lato mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                @alinfotechtoursandtravels
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/alinfotechtoursandtravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/alinfotechtoursandtravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@alinfotechtoursandtravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/918919990806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="package">Package Interest</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a package</option>
                    <option value="Umrah Budget">Umrah Budget</option>
                    <option value="Umrah Premium">Umrah Premium</option>
                    <option value="Kashmir Tour">Kashmir Tour</option>
                    <option value="Custom Package">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="month">Travel Month</label>
                  <input
                    type="text"
                    id="month"
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    placeholder="e.g., June 2025"
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  SUBMIT ENQUIRY
                </button>

                <div className="text-center">
                  <p className="font-lato text-text-muted text-sm mb-4">— or —</p>
                  <a
                    href="https://wa.me/918919990806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    CHAT DIRECTLY ON WHATSAPP
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
