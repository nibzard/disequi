import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GradientBackground } from "../components/gradient-background"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          {/* Header */}
          <Header />

          {/* Privacy Policy Content */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono">Privacy Policy</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">Data Privacy</h2>
              <p className="text-green-400/80 mb-4">
                This website (disequi.com) does not use any analytics software or cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">What We Collect</h2>
              <p className="text-green-400/80 mb-4">Nothing. We have zero tracking on this site.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">External Links</h2>
              <p className="text-green-400/80 mb-4">
                Some places in the content of the disequi.com website contains links that take you to other sites or
                portals, and if you click these links, you will be subject to the privacy policies at the destination
                site or portal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">Contact Info</h2>
              <p className="text-green-400/80 mb-4">Still have privacy concerns? Contact us at info@disequi.com.</p>
            </section>

            <Link
              href="/"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

