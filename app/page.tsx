import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { GetInvolved } from "@/components/get-involved"
import { Footer } from "@/components/footer"
import { GitHubCorner } from "@/components/github-corner"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <GitHubCorner />
      <Hero />
      <About />
      <Projects />
      <GetInvolved />
      <Footer />
    </main>
  )
}
