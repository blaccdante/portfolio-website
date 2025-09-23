import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, Award, Code, Coffee, Heart } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  company: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const timelineData: TimelineItem[] = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      achievements: [
        'Architected and built 3 major client applications serving 100K+ users',
        'Improved application performance by 40% through optimization',
        'Led a team of 5 developers using Agile methodologies'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'StartupX',
      location: 'Austin, TX',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks.',
      achievements: [
        'Built responsive web applications from scratch',
        'Integrated third-party APIs and payment systems',
        'Collaborated with UI/UX designers to implement pixel-perfect designs'
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Docker', 'Jest']
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'WebAgency Pro',
      location: 'Remote',
      description: 'Focused on creating engaging user interfaces and improving user experience.',
      achievements: [
        'Developed 20+ responsive websites for various clients',
        'Reduced page load times by 50% through optimization',
        'Introduced modern build tools and workflows'
      ],
      technologies: ['Vue.js', 'Sass', 'Webpack', 'jQuery', 'PHP']
    },
    {
      year: '2018 - 2019',
      title: 'Junior Web Developer',
      company: 'Digital Dreams',
      location: 'New York, NY',
      description: 'Started my professional journey building websites and learning modern development practices.',
      achievements: [
        'Successfully completed 15+ website projects',
        'Learned and implemented responsive design principles',
        'Gained experience with version control and team collaboration'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git']
    }
  ]

  const interests = [
    { icon: Code, label: 'Open Source', description: 'Contributing to community projects' },
    { icon: Coffee, label: 'Coffee Brewing', description: 'Perfect cup of coffee enthusiast' },
    { icon: Heart, label: 'Mentoring', description: 'Helping others learn to code' },
    { icon: Award, label: 'Hackathons', description: 'Building innovative solutions' }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with 5+ years of experience creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
        >
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hi there! I'm Danny, a passionate full-stack developer based in San Francisco. 
                I love creating beautiful, functional, and user-friendly applications that make a real difference in people's lives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My journey in web development started over 5 years ago, and I've had the privilege of working 
                with amazing teams to build everything from small business websites to large-scale applications 
                serving thousands of users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or mentoring aspiring developers. I believe in the power of clean code, continuous learning, 
                and building products that truly matter.
              </p>
            </div>
          </div>
          
          {/* Profile Image and Quick Stats */}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Danny Profile"
                className="w-48 h-48 rounded-full mx-auto mb-6 shadow-xl border-4 border-white dark:border-gray-800"
              />
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card p-6 space-y-4"
            >
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">50+ Projects Completed</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
            Professional Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 md:transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 md:transform md:-translate-x-1/2 z-10" />
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="card p-6 group hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                        <MapPin className="w-4 h-4 text-gray-400" />
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.company} • {item.location}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
            Interests & Hobbies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <interest.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About