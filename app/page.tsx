'use client'

import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin, FaCode, FaMobile, FaServer, FaDatabase, FaDownload } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiFlutter, SiKotlin, SiPython, SiMongodb, SiPostgresql, SiFigma } from 'react-icons/si'

export default function Home() {
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ]

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2020 - Present',
      description: 'Developing mobile and web applications for clients worldwide using modern technologies and frameworks.',
      achievements: [
        'Built and deployed 15+ mobile applications',
        'Implemented AdMob monetization strategies',
        'Created responsive web applications with React/Next.js',
        'Managed end-to-end project delivery'
      ]
    },
    {
      title: 'Mobile App Developer',
      company: 'Independent Projects',
      period: '2019 - 2020',
      description: 'Specialized in Android development with Kotlin and cross-platform development with Flutter.',
      achievements: [
        'Published apps with 50K+ downloads',
        'Integrated payment gateways and APIs',
        'Optimized app performance and user experience',
        'Maintained 4.5+ star ratings'
      ]
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
      tech: ['Flutter', 'Firebase', 'AdMob'],
      link: '#'
    },
    {
      title: 'Task Management System',
      description: 'Real-time collaborative task management tool with team collaboration features.',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      link: '#'
    },
    {
      title: 'Content Delivery Platform',
      description: 'Video streaming platform with content management, user authentication, and analytics.',
      tech: ['Next.js', 'AWS', 'MongoDB', 'Redis'],
      link: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold gradient-text">DB</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
              <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
              <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Deepak Bhattarai</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer | Mobile App Specialist
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
              Passionate about building scalable applications and delivering exceptional user experiences. 
              Specializing in React, Next.js, Flutter, and modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg hover:shadow-lg transition border border-gray-200 dark:border-slate-700"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <FaMobile className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert in Flutter and native Android development with Kotlin. Published multiple apps with thousands of downloads.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <FaCode className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building modern, responsive web applications using React, Next.js, and TypeScript with a focus on performance.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <FaServer className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced with Node.js, Python, databases, and cloud deployment for robust full-stack solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 card-hover">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg card-hover"
                >
                  <Icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  <span className="font-medium text-center">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 card-hover">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:deepakbhattarai878@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-2xl text-red-600" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">deepakbhattarai878@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/18177033702"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-2xl text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+1 (817) 703-3702</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Deepak878"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <FaGithub className="text-2xl text-gray-800 dark:text-white" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">@Deepak878</p>
                </div>
              </a>
              
              <a 
                href="tel:+9779846872765"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaPhone className="text-2xl text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Phone (Nepal)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+977 9846872765</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Available for freelance projects and full-time opportunities
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/Deepak878" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href="https://wa.me/18177033702" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800 transition"
                >
                  <FaWhatsapp className="text-2xl text-green-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2024 Deepak Bhattarai. All rights reserved.</p>
          <p className="text-sm text-gray-400">Domain: bhattaraideepak.com.np</p>
          <p className="text-xs text-gray-500 mt-4">
            AdMob Publisher ID: pub-3545057394790435
          </p>
        </div>
      </footer>
    </main>
  )
}
