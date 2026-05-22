'use client';

import dynamic from 'next/dynamic';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Dynamically import map to avoid SSR issues
const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] bg-bg-section animate-pulse" style={{ borderRadius: 'var(--radius-md)' }} />
  ),
});

export default function LocationSection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Visit Us</p>
          <h2 className="heading-xl mb-6">Our Office in Proddatur</h2>
          <p className="body-lg text-text-muted max-w-2xl mx-auto">
            Located in the heart of Proddatur, our office is open to answer your questions
            and help you plan your spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div>
            <LocationMap />
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-muted flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green" />
              </div>
              <div>
                <h3 className="heading-md mb-2">Address</h3>
                <p className="body-base text-text-muted">
                  AL Infotech Tours & Travels<br />
                  Main Road, Proddatur<br />
                  Andhra Pradesh 516360
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-muted flex items-center justify-center">
                <Phone className="w-5 h-5 text-green" />
              </div>
              <div>
                <h3 className="heading-md mb-2">Phone</h3>
                <a href="tel:+919876543210" className="body-base text-text-muted hover:text-green transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-muted flex items-center justify-center">
                <Mail className="w-5 h-5 text-green" />
              </div>
              <div>
                <h3 className="heading-md mb-2">Email</h3>
                <a href="mailto:info@alinfotechtravel.com" className="body-base text-text-muted hover:text-green transition-colors">
                  info@alinfotechtravel.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-muted flex items-center justify-center">
                <Clock className="w-5 h-5 text-green" />
              </div>
              <div>
                <h3 className="heading-md mb-2">Office Hours</h3>
                <p className="body-base text-text-muted">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full md:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
