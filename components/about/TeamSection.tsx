import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  languages: string[];
  image: string;
  specialization?: string;
}

// Placeholder data - replace with real team info
const teamMembers: TeamMember[] = [
  {
    name: 'Mohammed Ahmed',
    role: 'Lead Umrah Guide',
    experience: '15 years',
    languages: ['English', 'Urdu', 'Arabic', 'Telugu'],
    image: '/images/team/guide-1.jpg',
    specialization: 'Hajj & Umrah coordination'
  },
  {
    name: 'Fatima Khan',
    role: 'Travel Coordinator',
    experience: '8 years',
    languages: ['English', 'Hindi', 'Telugu'],
    image: '/images/team/coordinator-1.jpg',
    specialization: 'Visa processing & documentation'
  },
  {
    name: 'Abdul Rahman',
    role: 'Senior Guide',
    experience: '12 years',
    languages: ['English', 'Urdu', 'Arabic'],
    image: '/images/team/guide-2.jpg',
    specialization: 'Group management & spiritual guidance'
  },
  {
    name: 'Ayesha Begum',
    role: 'Customer Relations',
    experience: '6 years',
    languages: ['English', 'Telugu', 'Hindi'],
    image: '/images/team/coordinator-2.jpg',
    specialization: 'Client support & itinerary planning'
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Team</p>
          <h2 className="heading-xl mb-6">
            Experienced Guides<br />& Coordinators
          </h2>
          <p className="body-lg text-text-muted max-w-2xl mx-auto">
            Our team brings decades of combined experience in pilgrimage coordination,
            ensuring your journey is spiritually fulfilling and logistically seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              {/* Portrait */}
              <div 
                className="relative w-full mb-6 overflow-hidden bg-bg-section"
                style={{ 
                  aspectRatio: '3/4',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="heading-md mb-1">{member.name}</h3>
                  <p className="label text-gold mb-2">{member.role}</p>
                </div>

                <div className="space-y-2 text-sm text-text-muted">
                  <p>
                    <span className="text-green font-medium">Experience:</span> {member.experience}
                  </p>
                  
                  {member.specialization && (
                    <p>
                      <span className="text-green font-medium">Specialization:</span> {member.specialization}
                    </p>
                  )}
                  
                  <p>
                    <span className="text-green font-medium">Languages:</span> {member.languages.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Our Space</p>
              <h3 className="heading-lg mb-6">
                Rooted in Proddatur,<br />Connected to the World
              </h3>
              <p className="body-base text-text-muted mb-6">
                Our office in Proddatur has been serving the community for over a decade.
                We understand the local needs and combine them with international standards
                to deliver exceptional pilgrimage experiences.
              </p>
              <p className="body-base text-text-muted">
                Visit us to discuss your journey over chai, review itineraries in person,
                and meet the team that will guide you every step of the way.
              </p>
            </div>

            <div 
              className="relative w-full h-[400px] overflow-hidden bg-bg-section"
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              <Image
                src="/images/office/office-exterior.jpg"
                alt="AL Infotech Office in Proddatur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
