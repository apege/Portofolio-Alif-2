'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Laptop, ArrowRight, Code, Wrench, Server, Users, Award, Download, ExternalLink, ChevronDown, Briefcase, Clock, CheckCircle, Send, Phone, MapPin, Heart, ShoppingCart } from 'lucide-react';

const PremiumPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
    { name: 'PHP', level: 80, icon: <Code className="w-4 h-4" /> },
    { name: 'MySQL', level: 75, icon: <Server className="w-4 h-4" /> },
    { name: 'JavaScript', level: 78, icon: <Code className="w-4 h-4" /> },
    { name: 'Tailwind CSS', level: 85, icon: <Laptop className="w-4 h-4" /> },
    { name: 'React.js', level: 55, icon: <Code className="w-4 h-4" /> },
    { name: 'Next.js', level: 50, icon: <Code className="w-4 h-4" /> },
    { name: 'Git & GitHub', level: 70, icon: <Github className="w-4 h-4" /> },
    { name: 'Hosting & Deploy', level: 80, icon: <Server className="w-4 h-4" /> }
  ];

  const projects = [
    {
      title: 'Jumpscare Industriez',
      desc: 'Online shop internasional dengan integrasi AI untuk rekomendasi produk fashion',
      tech: ['PHP', 'Tailwind', 'MySQL', 'JavaScript', 'AJAX'],
      gradient: 'from-gray-600 to-gray-800',
      link: 'https://jumpscareindustriez.com'
    },
    {
      title: 'Kamus Bahasa Gaul',
      desc: 'Database interaktif istilah slang Indonesia dengan pencarian real-time',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-gray-500 to-gray-700',
      link: 'https://leafy-valkyrie-7cfbb8.netlify.app/'
    },
    {
      title: 'Portfolio Site',
      desc: 'Website personal showcase dengan animasi halus dan desain responsif',
      tech: ['Next.js', 'Tailwind', 'TypeScript', 'Framer Motion'],
      gradient: 'from-gray-700 to-gray-900',
      link: '#'
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Website Development',
      desc: 'Bikin website dari nol sesuai kebutuhan bisnis, pakai teknologi terkini biar cepat dan aman.',
      features: ['Landing Page', 'Company Profile', 'Custom Features']
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce Solutions',
      desc: 'Toko online siap pakai lengkap dengan sistem pembayaran, cart, dan dashboard admin.',
      features: ['Cart System', 'Payment Gateway', 'Admin Panel']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Website Maintenance',
      desc: 'Jaga website tetap lancar, update konten, fix bug, dan optimasi performa.',
      features: ['Bug Fixing', 'Content Update', 'Performance Tuning']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Hosting & Deployment',
      desc: 'Setup hosting dari awal sampai website live, termasuk konfigurasi SSL dan domain.',
      features: ['cPanel Setup', 'SSL Configuration', 'Live Deployment']
    }
  ];

  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: '3+', label: 'Projects Done' },
    { icon: <Users className="w-6 h-6" />, value: '2+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, value: '1', label: 'Year Experience' },
    { icon: <Laptop className="w-6 h-6" />, value: '200+', label: 'Coding Hours' }
  ];

  const experiences = [
    {
      year: '2025 - Now',
      title: 'Freelance Web Developer',
      company: 'Independent',
      desc: 'Ngerjain project website buat UMKM dan client pribadi. Fokus ke toko online, landing page, sama custom backend.',
      achievements: [
        'Deploy website e-commerce lengkap dengan payment gateway',
        'Implementasi login system dengan Google OAuth dan email verification',
        'Build shopping cart system yang bisa handle multiple products'
      ]
    },
    {
      year: '2024 - Now',
      title: 'Student Developer',
      company: 'SMKN 4 Bandung',
      desc: 'Belajar web dev lewat sekolah sambil ngerjain side project sendiri. Kebanyakan main-main di PHP dan frontend.',
      achievements: [
        'Ngoding pakai PHP native, MySQL, Tailwind, sama vanilla JS',
        'Bikin beberapa mini project buat nambah portfolio',
        'Belajar deploy website pakai cPanel dan shared hosting'
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Newbie Coder',
      company: 'Self-taught',
      desc: 'Awal mula nyemplung ke dunia coding. Mulai dari yang paling basic.',
      achievements: [
        'Belajar HTML, CSS, JavaScript dari YouTube dan dokumentasi',
        'Kenalan sama database MySQL dan GitHub',
        'Bikin website statis pertama kali'
      ]
    }
  ];

  const techStack = [
    { category: 'Frontend', items: ['HTML', 'Next.js', 'CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['AJAX', 'PHP Native', 'REST API Basic', 'cURL', 'MySQL'] },
    { category: 'DevOps', items: ['cPanel / Shared Hosting', 'Nginx/Apache basic', 'SSL & Domain Setup', 'GitHub Deployment'] },
    { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Postman', 'XAMPP'] }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_cbsw0oy',
          template_id: 'template_s2m9rds',
          user_id: 'uQC4Ybfp-i98w2Wi-',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Muhammad Alif Muzakky',
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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 192, 192, 0.1), transparent 80%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-800/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(156, 163, 175, 0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-lg border-b border-gray-700/30' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
              Muhammad Alif Muzakky
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-gray-400 hover:text-gray-200 transition-colors group ${activeSection === item.toLowerCase() ? 'text-gray-200' : ''}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-2xl text-gray-400 hover:text-gray-200 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
            <span className="text-gray-400 text-sm">💼 Open for Freelance Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              Alif.WebDev
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ngebangun website yang <span className="text-gray-300 font-semibold">clean</span> dan <span className="text-gray-300 font-semibold">fungsional</span> pakai teknologi modern
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-700/50 transition-all duration-300 flex items-center gap-2"
            >
              Cek Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/CV_MuhammadAlifMuzakky.pdf" 
              download 
              className="px-8 py-4 border border-gray-700/50 rounded-full font-semibold hover:bg-gray-800/30 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

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
                className="p-3 rounded-full border border-gray-700/50 hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-300 group"
                title={social.label}
              >
                <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 overflow-hidden group-hover:border-gray-600/50 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/alif.jpg" alt="profile" className="w-full h-full object-cover"/>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>

            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Aku adalah seorang <span className="text-gray-300 font-semibold">Web Developer</span> yang lagi sekolah di SMKN 4 Bandung sambil aktif ngerjain project web. 
                Fokus aku bikin website yang cepet load-nya, responsive di semua device, dan gampang dipake user.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Tech stack yang sering aku pakai: <span className="text-gray-300 font-semibold">PHP, MySQL, Tailwind CSS, JavaScript, sama Next.js</span>. 
                Sekarang lagi handle project e-commerce yang clientnya dari luar negeri, sambil terus belajar hal-hal baru.
              </p>

              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Tech Stack</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {techStack.map((stack, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
                  <h4 className="text-lg font-bold mb-4 text-gray-300">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.items.map((item, j) => (
                      <div key={j} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
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

      <section id="services" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Layanan web development yang aku tawarkan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-gray-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Project-project yang udah aku kerjain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15 group-hover:opacity-25 transition-opacity`} />
                
                <div className="relative p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-gray-800/40 border border-gray-700/40 text-sm text-gray-400 hover:bg-gray-800/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors font-semibold"
                  >
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-4 text-gray-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-12 border-l-2 border-gray-700/40 hover:border-gray-600 transition-colors group"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-600 ring-4 ring-black group-hover:ring-8 transition-all" />
                <div className="pb-8">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-gray-300 transition-colors">{exp.title}</h3>
                  <div className="text-gray-400 mb-2 font-semibold">{exp.company}</div>
                  <p className="text-gray-500 mb-4">{exp.desc}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
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

      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/40 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Punya Project?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Yuk diskusi dulu idenya, kita wujudin bareng jadi website keren
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-700/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Hubungi aku
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 border border-gray-700/50 rounded-full font-semibold hover:bg-gray-800/30 transition-all duration-300"
                >
                  Lihat Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Ada project atau mau ngobrol? Hit me up!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30">
                    <Mail className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:alifmuzakki1110@gmail.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                        alifmuzakki1110@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30">
                    <Phone className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+6289541273587" className="text-gray-400 hover:text-gray-300 transition-colors">
                        +62 895-4127-35876
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30">
                    <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
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
                      className="p-4 rounded-xl border border-gray-700/50 hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-300 group"
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

            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Nama Lengkap</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700/50 focus:border-gray-600 focus:outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="Nama lo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700/50 focus:border-gray-600 focus:outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Pesan</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700/50 focus:border-gray-600 focus:outline-none transition-colors resize-none text-white placeholder-gray-600"
                    placeholder="Ceritain tentang project lo..."
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-900/30 border border-green-700/50 text-green-300 text-sm">
                    Pesan berhasil dikirim! aku bakal bales secepetnya.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-900/30 border border-red-700/50 text-red-300 text-sm">
                    Waduh, ada error. Coba lagi atau langsung email aku aja.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-gray-700/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Ngirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-gray-700/30">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-center md:text-left">
              © 2024 Muhammad Alif Muzakky. Built with <Heart className="w-4 h-4 inline text-gray-400 fill-gray-400" /> using Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumPortfolio;