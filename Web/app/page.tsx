import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, FileText, Tags } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center justify-between px-4 md:px:6">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Mic className="h-6 w-6 text-purple-600" />
                <span>Rezum</span>
              </div>
              <nav className="hidden md:flex gap-6 text-sm">
                <Link href="#features" className="font-medium">
                  Features
                </Link>
                <Link href="#how-it-works" className="font-medium">
                  How it works
                </Link>
                <Link href="#testimonials" className="font-medium">
                  Testimonials
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <Button>Access Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-purple-50 py-20">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Analyze your conversations like never before
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transform your conversations into concise summaries
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Rezum records, analyzes, and automatically summarizes your
                conversations to help you identify key points and important
                keywords.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="gap-1.5 group">
                    Try for free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  Key features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything you need to analyze your conversations
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Powerful tools that transform your conversations into
                  actionable data.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-purple-100 p-3">
                  <Mic className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Recording</h3>
                <p className="text-center text-gray-500">
                  Easily record your conversations and important meetings.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-purple-100 p-3">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Automatic Summary</h3>
                <p className="text-center text-gray-500">
                  Get concise summaries that capture the essence of each
                  conversation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-purple-100 p-3">
                  <Tags className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Keyword Extraction</h3>
                <p className="text-center text-gray-500">
                  Identify important words and terms so you don't miss anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-20" id="how-it-works">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  Simple process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How it works
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  A simple three-step process to transform your conversations
                  into insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Record</h3>
                <p className="text-center text-gray-500">
                  Use our application to record your conversations or import
                  your audio files.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Analyze</h3>
                <p className="text-center text-gray-500">
                  Our AI automatically analyzes the content to generate
                  summaries and extract keywords.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Leverage</h3>
                <p className="text-center text-gray-500">
                  View insights in your dashboard and make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  Mobile Application
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Rezum Smart Recording App
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Download our mobile application for seamless conversation
                  recording and analysis on the go.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Recording in Your Pocket
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Transform your smartphone into a powerful conversation
                    analysis tool with our app, offering intelligent recording
                    with automatic cloud sync and AI-powered analysis.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">
                        Advanced noise cancellation for crystal clear audio
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">
                        Automatic cloud synchronization with your Rezum
                        dashboard
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">
                        Energy-efficient recording for extended sessions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">
                        End-to-end encryption for maximum privacy
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">
                        Simple interface with beautiful visualizations
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <Link
                      href="https://apps.apple.com/download/rezum"
                      className="flex-1"
                    >
                      <Button
                        className="w-full flex items-center justify-center gap-2"
                        size="lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19c-4.3 0-7.3-3-7.3-6.5 0-3 2.5-5.5 5.5-5.5 2.5 0 4.3 1.5 4.8 3 .3-1.5 1.5-3 3.5-3 2 0 3.5 1.5 3.5 3.5 0 1-.3 2-.8 2.5" />
                          <path d="M12 19c-2.5 0-4-1.5-4-3.5 0-2 1.5-3.5 3.5-3.5 1.5 0 2.5 1 2.8 2.5" />
                          <path d="M12 21c-4.3 0-7.3-3-7.3-6.5 0-2 1-3.5 2.3-4.5" />
                          <path d="M15 9c1-.3 2-.3 3-.3 2 0 3.5 1.5 3.5 3.5a4 4 0 0 1-4 4" />
                        </svg>
                        App Store
                      </Button>
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.rezum.app"
                      className="flex-1"
                    >
                      <Button
                        className="w-full flex items-center justify-center gap-2"
                        size="lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21" />
                        </svg>
                        Google Play
                      </Button>
                    </Link>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Free download • Premium features available with subscription
                  </p>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Rezum Mobile App"
                        className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      4.8 ★
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" id="testimonials">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What our users say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Discover how Rezum transforms conversations for our customers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <p className="mb-4 text-gray-500">
                  "Rezum has completely transformed the way we document our
                  meetings. We save hours each week thanks to automatic
                  summaries."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Sophie Martin</p>
                    <p className="text-sm text-gray-500">
                      Marketing Director, TechCorp
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-6">
                <p className="mb-4 text-gray-500">
                  "Keyword extraction helps us quickly identify important topics
                  in our customer calls. An indispensable tool for our sales
                  team."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Thomas Dubois</p>
                    <p className="text-sm text-gray-500">
                      VP Sales, Innovate Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your conversations?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed">
                Join thousands of users already leveraging Rezum to improve
                their productivity.
              </p>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Start now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-10">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-bold">
                  <Mic className="h-5 w-5 text-purple-600" />
                  <span>Rezum</span>
                </div>
                <p className="text-sm text-gray-500">
                  © 2024 Rezum. All rights reserved.
                </p>
              </div>
              <nav className="flex flex-col gap-4 text-sm md:flex-row">
                <Link href="#" className="text-gray-500 hover:underline">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-500 hover:underline">
                  Terms of Use
                </Link>
                <Link href="#" className="text-gray-500 hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
