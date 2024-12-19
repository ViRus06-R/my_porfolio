"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
const projects = [
  {
    title: 'Web Automation application',
    description: 'An appliction created in node js that automates bls-itlay website to book appointment automatically.',
    link: 'https://github.com/ViRus06-R/Web-Automation',
  },
  {
    title: 'Chrome extension in react sample',
    description: 'A sample of react based chrome exteinsion that help people to make an extension with their own will.',
    link: 'https://github.com/ViRus06-R/chrome-extension-react',
  },
  {
    title: 'Punjab Homoeo assist agent(Comming Soon)',
    description: 'An interactive application in node js that help the user to mange their daily patients and the medicines given to them. Work in progress',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <Button asChild className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

