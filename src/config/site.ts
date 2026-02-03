// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Cool Boule",
  title: "Cool Boule",
  description: "Concept art portfolio",
  
  // Navigation
  navigation: {
    home: "Portfolio",
    about: "About",
    contact: "Contact",
    design: "Design",
  },
  
  // Hero Section
  hero: {
    prefix: "Welcome to my",
    name: "Portfolio Cool Boule",
    intro: "I am an illustrator and digital artist.\nWelcome to my portfolio!",
    avatar: "/image/self-portrait.png",
    buttons: {
      viewPosts: "View Works",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "Instagram", icon: "/svg/instagram.png", url: "https://www.instagram.com/boule_cool/" },
      { name: "LinkedIn", icon: "/svg/linkedin.png", url: "https://www.linkedin.com/in/daria-vogli" },
      { name: "Email", icon: "/svg/email.png", url: "mailto:daria.coolboule@gmail.com" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "Hello! I'm a digital artist and illustrator based in Luxembourg. I lived in 8 countries. This experience gave me the opportunity to see how the world is diverse and how art can help us to see the beauty in everything. I like to solve problems through art and get creative. Let's work together!",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "daria.coolboule@gmail.com",
        link: "mailto:daria.coolboule@gmail.com",
      },
      phone: {
        label: "Phone",
        value: "+352 661 699 978",
        link: "tel:+352661699978",
      },
      location: {
        label: "Location",
        value: "Luxembourg",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Instagram", icon: "/svg/instagram.png", url: "https://www.instagram.com/boule_cool/" },
        { name: "LinkedIn", icon: "/svg/linkedin.png", url: "https://www.linkedin.com/in/daria-vogli" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Cool Boule. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
      ],
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
  
  // Design Page
  design: {
    title: "Design Projects",
    subtitle: "A showcase of my design works and case studies",
    guidelines: {
      title: "Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

