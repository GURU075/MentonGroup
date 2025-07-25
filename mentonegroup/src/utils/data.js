import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l4 from '../assets/l4.png';
// import l3 from '../assets/lle3.png';

export const companiesData = [
  { 
    id: 'mentone-concrete',  
    name: 'Mentone Concrete',  
    url: 'https://www.mentoneconcrete.com',  
    description: 'Leading provider of high-quality concrete products and innovative construction solutions for commercial and residential projects.',  
    logo: '/logos/concrete.svg',
    industry: 'Construction Materials',
    color: '#3b82f6',
    featured: true,
    heroImage: '/images/concrete-hero.jpg',
    tagline: 'Building Foundations for the Future',
    established: '1985',
    products: [
      {
        name: 'Ready-Mix Concrete',
        image: '/images/products/concrete-1.jpg',
        description: 'Custom concrete mixes designed for specific project requirements with guaranteed strength and durability.',
      },
      {
        name: 'Precast Solutions',
        image: '/images/products/concrete-2.jpg',
        description: 'Factory-produced concrete elements for accelerated construction timelines and reduced on-site labor.',
      },
      {
        name: 'Specialty Concrete',
        image: '/images/products/concrete-3.jpg',
        description: 'Specialized formulations including high-strength, lightweight, and decorative concrete options.',
      }
    ]
  },
  { 
    id: 'mentone-aluform',   
    name: 'Mentone Aluform',   
    url: 'https://www.mentonealuform.com',   
    description: 'Innovative aluminium form-work solutions that revolutionize construction efficiency, safety, and sustainability.',  
    logo: '/logos/aluform.svg',
    industry: 'Construction Technology',
    color: '#64748b',
    featured: true,
    heroImage: '/images/aluform-hero.jpg',
    tagline: 'Reshaping Construction Efficiency',
    established: '1998',
    products: [
      {
        name: 'Wall Formwork Systems',
        image: '/images/products/aluform-1.jpg',
        description: 'Lightweight aluminum formwork for vertical concrete structures with quick assembly and dismantling.',
      },
      {
        name: 'Slab Formwork Solutions',
        image: '/images/products/aluform-2.jpg',
        description: 'Modular systems for horizontal concrete pouring with integrated safety features.',
      },
      {
        name: 'Custom Formwork Design',
        image: '/images/products/aluform-3.jpg',
        description: 'Bespoke formwork solutions for complex architectural elements and challenging project requirements.',
      }
    ]
  },
  { 
    id: 'mentone-surgical',  
    name: 'Mentone Surgical',  
    url: 'https://www.mentonesurgical.com',  
    description: 'Premium surgical instruments and medical supplies designed with precision to support healthcare professionals worldwide.',  
    logo: '/logos/surgical.svg',
    industry: 'Healthcare',
    color: '#10b981',
    featured: true,
    heroImage: '/images/surgical-hero.jpg',
    tagline: 'Precision Instruments for Superior Care',
    established: '2002',
    products: [
      {
        name: 'Surgical Instruments',
        image: '/images/products/surgical-1.jpg',
        description: 'High-precision stainless steel instruments crafted for durability and optimal surgical performance.',
      },
      {
        name: 'Medical Devices',
        image: '/images/products/surgical-2.jpg',
        description: 'Innovative diagnostic and treatment devices engineered for reliability and ease of use.',
      },
      {
        name: 'Surgical Consumables',
        image: '/images/products/surgical-3.jpg',
        description: 'Essential disposable items and supplies ensuring sterility and safety in medical environments.',
      }
    ]
  },
  { 
    id: 'jeaplast',          
    name: 'JeaPlast',          
    url: 'https://www.jeaplast.com',          
    description: 'Custom plastic manufacturing specialists creating innovative solutions for diverse industries and applications.',  
    logo: '/logos/jeaplast.svg',
    industry: 'Manufacturing',
    color: '#f59e0b',
    featured: false,
    heroImage: '/images/jeaplast-hero.jpg',
    tagline: 'Molding Ideas into Reality',
    established: '2005',
    products: [
      {
        name: 'Industrial Components',
        image: '/images/products/jeaplast-1.jpg',
        description: 'Precision-engineered plastic parts for automotive, electronics, and industrial applications.',
      },
      {
        name: 'Consumer Products',
        image: '/images/products/jeaplast-2.jpg',
        description: 'Innovative plastic solutions for household, lifestyle, and consumer goods markets.',
      },
      {
        name: 'Sustainable Plastics',
        image: '/images/products/jeaplast-3.jpg',
        description: 'Eco-friendly biodegradable and recycled plastic materials and products.',
      }
    ]
  },
  { 
    id: 'oriflame-studio',   
    name: 'Oriflame Studio',   
    url: 'https://www.oriflamestudio.com',    
    description: 'Creative design & branding studio that transforms ideas into compelling visual identities and experiences.',  
    logo: '/logos/oriflame.svg',
    industry: 'Creative Design',
    color: '#ec4899',
    featured: false,
    heroImage: '/images/oriflame-hero.jpg',
    tagline: 'Crafting Visual Stories That Inspire',
    established: '2010',
    products: [
      {
        name: 'Brand Identity Design',
        image: '/images/products/oriflame-1.jpg',
        description: 'Comprehensive branding packages including logos, visual systems, and brand guidelines.',
      },
      {
        name: 'Digital Experiences',
        image: '/images/products/oriflame-2.jpg',
        description: 'User-centered websites, apps, and digital interfaces that engage and convert.',
      },
      {
        name: 'Creative Campaigns',
        image: '/images/products/oriflame-3.jpg',
        description: 'Strategic marketing and advertising campaigns across traditional and digital channels.',
      }
    ]
  },
  { 
    id: 'pgpawar-foundation',
    name: 'PGP Awar Foundation',
    url: 'https://www.pgpawarfoundation.com', 
    description: 'Non-profit foundation empowering communities through education, healthcare, and sustainable development initiatives.',  
    logo: '/logos/foundation.svg',
    industry: 'Non-Profit',
    color: '#8b5cf6',
    featured: false,
    heroImage: '/images/foundation-hero.jpg',
    tagline: 'Empowering Communities, Transforming Lives',
    established: '2015',
    initiatives: [
      {
        name: 'Education Programs',
        image: '/images/initiatives/foundation-1.jpg',
        description: 'Scholarships, school development, and educational resources for underserved communities.',
      },
      {
        name: 'Healthcare Access',
        image: '/images/initiatives/foundation-2.jpg',
        description: 'Medical camps, health awareness, and support for rural healthcare infrastructure.',
      },
      {
        name: 'Sustainable Development',
        image: '/images/initiatives/foundation-3.jpg',
        description: 'Environmental projects, clean water initiatives, and renewable energy solutions.',
      }
    ]
  }
];

export const teamData = [
  {
    name: "Mr. Prashant Pawar",
    position: "Directors",
    bio: "Mr. Prashant Pawar, the visionary behind Mentone Aluform, is a testament to the power of perseverance and dedication. Coming from a humble middle-class background, he built his success through sheer hard work and an unwavering commitment to excellence.",
    subBio: "His journey inspires many, proving that success is not given but earned through determination, passion, and an unrelenting pursuit of excellence.",
    image: l1,
    expertise: ["Strategic Planning", "Innovation", "Leadership"]
  },
  {
    name: "Tanaji Babar",
    position: "A Visionary Leader in the Industrial Sector",
    bio: "He is a highly esteemed industrialist based in Pune, bringing over 35 years of profound expertise in engineering, aluminium foundry, and workshop management.",
    subBio: "With a vision to contribute to the growth of the manufacturing sector, he remains an inspiration for aspiring entrepreneurs and industry professionals alike. ",
    image: "https://www.mentonealuform.com/assets/images/testimonials/man.png",
    expertise: ["Engineering", "Aluminium Foundry", "Workshop Management"]
  },
  {
    name: "Sanjay Shinde",
    position: "A Leader Driven by Excellence and Integrity ",
    bio: "As the Co-Director of Mentone Aluform, Sanjay Shinde embodies dedication, integrity, and a strong commitment to quality in the construction and infrastructure industry.",
    subBio: "At Mentone Aluform, he upholds the values of transparency, accountability, and customer satisfaction.",
    image: l2,
    expertise: ["Quality Management", "Infrastructure", "Customer Relations"]
  },
  {
    name: "Vikas Salunkhe",
    position: "A Leader Committed to Excellence and Innovation",
    bio: "With 28 years of experience in the construction industry, Mr. Vikas Salunkhe has been instrumental in delivering over 20 large-scale, high-impact projects. His extensive expertise in construction methodologies and advanced technologies has established him as a trusted and respected name in the field.",
    subBio:"His presence strengthens Mentone Aluform’s mission to deliver superior and reliable construction solutions.",
    image: l4,
    expertise: ["Construction Management", "Project Delivery", "Advanced Technologies"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sunil Kumar',
    position: 'Project Director, Horizon Developers',
    company: 'Horizon Developers',
    image: '/images/testimonials/testimonial-1.jpg',
    quote: 'Mentone Concrete has been our trusted supplier for over a decade. Their quality and reliability have been instrumental in the success of our major construction projects.'
  },
  {
    id: 2,
    name: 'Dr. Anjali Desai',
    position: 'Head of Surgery',
    company: 'City General Hospital',
    image: '/images/testimonials/testimonial-2.jpg',
    quote: 'The precision instruments from Mentone Surgical have significantly improved our surgical outcomes. Their attention to quality and innovation is unmatched.'
  },
  {
    id: 3,
    name: 'Arjun Singh',
    position: 'Creative Director',
    company: 'Pulse Media',
    image: '/images/testimonials/testimonial-3.jpg',
    quote: 'Working with Oriflame Studio transformed our brand identity. Their creative team truly understood our vision and delivered beyond our expectations.'
  }
];