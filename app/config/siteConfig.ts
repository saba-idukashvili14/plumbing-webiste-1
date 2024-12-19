import { FaHome, FaInfoCircle, FaTools } from 'react-icons/fa'

export const siteConfig = {
  // Company Details
  company: {
    name: "GEOPG",
    tagline: "Plumbing Services",
    logo: "https://geopg.ge/img/plumber.png",
    description: "THE GROUP OF PLUMBERS OF GEORGIA OFFERS THE SERVICES OF HIGHLY QUALIFIED CRAFTSMEN",
  },

  // Contact Information
  contact: {
    phone: "+995 555 363 136",
    email: "info@geopg.ge",
    location: "Tbilisi, Georgia",
    emergencyAvailable: true,
  },

  // Social Media Links
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },

  // Hero Section
  hero: {
    title: "Expert Plumbing Solutions for Your Home",
    subtitle: "THE GROUP OF PLUMBERS OF GEORGIA OFFERS THE SERVICES OF HIGHLY QUALIFIED CRAFTSMEN",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Services",
  },

  // About Section
  about: {
    title: "Your Trusted Partner for Professional Plumbing Solutions",
    description: "With over a decade of experience, we've built our reputation on reliability, expertise, and customer satisfaction. Our team of certified plumbers is committed to providing top-notch plumbing services for both residential and commercial properties.",
    image: "https://scontent.ftbs5-4.fna.fbcdn.net/v/t39.30808-6/469465765_1633454727379759_2336989936073198384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qo3QN3D19dYQ7kNvgEgjSXm&_nc_zt=23&_nc_ht=scontent.ftbs5-4.fna&_nc_gid=ATBBHTSvG9A65W2A3kZ75Nk&oh=00_AYCSTHi6dQk-NJc3Lu-dlYaRJiPbFs1AnRiYM55BcE9H_A&oe=676A1D4C",
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "500+", label: "Projects Done" },
      { number: "24/7", label: "Support" }
    ],
    features: [
      {
        title: "Expert Team",
        description: "Certified and experienced plumbing professionals"
      },
      {
        title: "Quality Guaranteed",
        description: "We stand behind our work with solid guarantees"
      },
      {
        title: "24/7 Availability",
        description: "Round-the-clock emergency plumbing services"
      }
    ]
  },

  // Services Section
  services: {
    title: "Our Professional Services",
    items: [
      {
        title: "Cleaning Works",
        description: "Professional cleaning services for all your plumbing needs",
        icon: "🧹",
        items: ["Cleaning of sewerage", "Cleaning the toilet", "Water pumping"]
      },
      {
        title: "Diagnostics",
        description: "Advanced diagnostic tools and expertise",
        icon: "🔍",
        items: ["Water leak diagnostics", "Diagnostics of water pipes", "Telediagnostics of sewer pipes"]
      },
      {
        title: "Change/Update",
        description: "Complete replacement and upgrade services",
        icon: "🔧",
        items: ["Changing the toilet", "Replacing the toilet mechanism", "Replacing the siphon"]
      }
    ]
  },

  // Navigation
  navigation: [
    { name: 'Home', href: 'home', icon: FaHome },
    { name: 'About', href: 'about', icon: FaInfoCircle },
    { name: 'Services', href: 'services', icon: FaTools }
  ],

  // Theme
  theme: {
    colors: {
      primary: 'purple',
      secondary: 'gray',
    }
  }
} 