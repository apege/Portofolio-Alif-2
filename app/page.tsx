'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Laptop, ArrowRight, Code, Palette, Zap, Award, Download, ExternalLink, ChevronDown, Star, TrendingUp, Wrench, Server, Users, Coffee, Briefcase, Clock, CheckCircle, Play, Send, Phone, MapPin, Heart, ShoppingCart } from 'lucide-react';

const PremiumPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
  { name: 'PHP', level: 80, icon: '🐘' },
  { name: 'MySQL', level: 75, icon: '🗄️' },
  { name: 'JavaScript', level: 78, icon: '🟨' },
  { name: 'Tailwind CSS', level: 85, icon: '🎨' },
  { name: 'React.js', level: 55, icon: '⚛️' },
  { name: 'Next.js', level: 50, icon: '▲' },
  { name: 'Git & GitHub', level: 70, icon: '🐙' },
  { name: 'Hosting & Deployment', level: 80, icon: '🌐' }
];


  const projects = [
    {
      title: 'Jumpscare Industriez',
      desc: 'Platform Online Shop yang menjual berbagai baju berkualitas dengan bantuan AI',
      tech: ['PHP', 'Tailwind', 'MySQL', 'JavaScript', 'AJAX'],
      gradient: 'from-purple-600 to-pink-600',
      link: 'https://jumpscareindustriez.com'
    },
    {
      title: 'Kamus Bahasa Gaul',
      desc: 'Platform Kamus yang berisi tentang bahasa gaul terbaru di Indonesia',
      tech: ['HTML', 'CSS', 'JavaScript',],
      gradient: 'from-blue-600 to-cyan-600',
      link: 'https://leafy-valkyrie-7cfbb8.netlify.app/'
    },
    {
      title: 'Portofolio Website',
      desc: 'Portofolio pribadi modern, responsive, animasi smooth, showcase project.',
      tech: ['Next.js', 'Tailwind', 'TypeScript', 'Framer Motion'],
      gradient: 'from-emerald-600 to-teal-600',
      link: '#'
    },
  ];

  const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Website Development',
    desc: 'Membangun website modern dan fungsional menggunakan PHP, MySQL, Tailwind, dan JavaScript.',
    features: ['Landing Page', 'Company Profile', 'Custom Features']
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Online Store (E-Commerce)',
    desc: 'Pembuatan toko online lengkap dengan sistem keranjang, checkout, dan manajemen produk.',
    features: ['Cart System', 'Checkout', 'Admin Panel']
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Website Maintenance',
    desc: 'Perawatan website agar tetap cepat, aman, dan bebas error.',
    features: ['Bug Fixing', 'Update Konten', 'Performa Basic']
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Hosting & Deployment',
    desc: 'Bantu upload website sampai online, termasuk domain, SSL, dan hosting setup.',
    features: ['cPanel Setup', 'SSL Install', 'Deploy Website']
  }
];


  const stats = [
  { icon: <Briefcase className="w-6 h-6" />, value: '3+', label: 'Projects Completed' },
  { icon: <Users className="w-6 h-6" />, value: '2+', label: 'Client Collaborations' },
  { icon: <Award className="w-6 h-6" />, value: '1', label: 'Year of Experience' },
  { icon: <Laptop className="w-6 h-6" />, value: '200+', label: 'Hours Coding' }
];

  const experiences = [
  {
    year: '2025 - Present',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    desc: 'Mengerjakan project website untuk UMKM dan klien, termasuk sistem toko online, landing page, dan fitur backend.',
    achievements: [
      'Membangun website toko online internasional untuk penjualan single product',
      'Membuat sistem login & register lengkap (Email, Google OAuth, OTP)',
      'Mengembangkan sistem keranjang belanja dan checkout dinamis'
    ]
  },
  {
    year: '2024 - Present',
    title: 'Student Web Developer',
    company: 'SMK — Kelas 10–11',
    desc: 'Belajar web development melalui sekolah, project pribadi, dan riset mandiri, dengan fokus pada PHP & frontend.',
    achievements: [
      'Menguasai PHP, MySQL, Tailwind CSS, dan JavaScript',
      'Membangun beberapa mini-project untuk latihan dan portofolio',
      'Belajar deploy website menggunakan cPanel dan managed hosting'
    ]
  },
  {
    year: '2023 - 2024',
    title: 'Beginner Web Developer',
    company: 'Self-learning',
    desc: 'Mulai belajar pemrograman dasar dan membuat website sederhana.',
    achievements: [
      'Belajar HTML, CSS, JavaScript dasar',
      'Memahami konsep database dan GitHub dasar',
      'Membangun website statis pertama'
    ]
  }
];

  const techStack = [
    { category: 'Frontend', items: ['HTML', 'Next.js', 'CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['AJAX', 'PHP Native', 'REST API Basic', 'cURL', 'MySQL'] },
    { category: 'DevOps', items: ['cPanel / Shared Hosting', 'Nginx/Apache basic', 'SSL & Domain Setup', 'GitHub Deployment'] },
    { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Postman', 'XAMPP'] }
  ];

   const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Ganti dengan Service ID, Template ID, dan Public Key dari EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_cbsw0oy', // Ganti dengan Service ID kamu
          template_id: 'template_s2m9rds', // Ganti dengan Template ID kamu
          user_id: 'uQC4Ybfp-i98w2Wi-', // Ganti dengan Public Key kamu
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Muhammad Alif Muzakky', // Nama kamu
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
              Muhammad Alif Muzakky
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-gray-300 hover:text-white transition-colors group ${
                    activeSection === item.toLowerCase() ? 'text-white' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm animate-pulse">
            <span className="text-purple-400 text-sm">✨ Available for Freelance Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Alif.WebDev
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Menciptakan pengalaman digital yang <span className="text-purple-400 font-semibold">elegan</span> dan <span className="text-pink-400 font-semibold">inovatif</span> dengan teknologi modern
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
            >
              Lihat Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-purple-500/30 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2">
            <a 
              href="/CV_MuhammadAlifMuzakky.pdf" 
              download 
              className="flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: <Github />, link: 'https://github.com/apege', label: 'GitHub' },
              { icon: <Linkedin />, link: 'https://www.linkedin.com/in/muhammad-alif-muzakky-055159358', label: 'LinkedIn' },
              { icon: <Mail />, link: 'mailto:alifmuzakki1110@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target={social.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 group"
                title={social.label}
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/20 overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/alif.jpg" alt="profile"/>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            </div>

            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Saya adalah seorang <span className="text-purple-400 font-semibold">Web Developer</span> yang saat ini bersekolah di SMKN 4 Bandung dan aktif membangun berbagai proyek web modern. 
                Saya fokus pada pembuatan website yang cepat, responsif, dan mudah digunakan.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Saya sering menggunakan teknologi seperti <span className="text-blue-400 font-semibold">PHP, MySQL, Tailwind CSS, JavaScript, dan Next.js</span>. 
                Saat ini saya juga mengerjakan project e-commerce internasional dan terus mengembangkan skill di dunia web development.
              </p>

              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Tech Stack</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {techStack.map((stack, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  <h4 className="text-lg font-bold mb-4 text-purple-400">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.items.map((item, j) => (
                      <div key={j} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Layanan profesional untuk mengembangkan produk digital Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Beberapa project terbaik yang telah saya kerjakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm text-purple-300 hover:bg-purple-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-12 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors group"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-black group-hover:ring-8 transition-all" />
                <div className="pb-8">
                  <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                  <div className="text-gray-400 mb-2 font-semibold">{exp.company}</div>
                  <p className="text-gray-500 mb-4">{exp.desc}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Start a Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Mari diskusikan ide Anda dan wujudkan menjadi kenyataan digital yang luar biasa
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me Now
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 border border-purple-500/30 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Punya project dalam pikiran? Mari kita diskusikan!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20">
                    <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:hello@portfolio.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                        alifmuzakki1110@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20">
                    <Phone className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+6281234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                        +62 895-4127-35876
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20">
                    <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-gray-400">Bandung, Indonesia</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Github />, link: 'https://github.com/apege', label: 'GitHub' },
                    { icon: <Linkedin />, link: 'https://www.linkedin.com/in/muhammad-alif-muzakky-055159358', label: 'LinkedIn' },
                    { icon: <Mail />, link: 'mailto:alifmuzakki1110@gmail.com', label: 'Email' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target={social.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 group"
                      title={social.label}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="Lorem Ipsum"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="people@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Your Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors resize-none text-white placeholder-gray-500"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-center md:text-left">
              © 2024 Portfolio. Crafted with <Heart className="w-4 h-4 inline text-pink-400 fill-pink-400" /> using React & Tailwind CSS
            </div>
            <div className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumPortfolio;