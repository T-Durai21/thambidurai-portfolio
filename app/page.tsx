import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { AiJourney } from '@/components/ai-journey'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Credentials } from '@/components/credentials'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <AiJourney />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
    </>
  )
}
