import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram, FileText, Send, User } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tabs = ["Writing", "Apps", "Services", "Clients", "Tools", "Connect"];

const clientLogos = [
  { src: "/Primary_Logo_30.png", alt: "NuWave Laser", size: "h-16 w-24" },
  { src: "/ab_logo_files_digital-05_500x500.webp", alt: "a'lei beauty", size: "h-12 w-20" },
  { src: "/Gilead_Transparent_Logo_Standard_RGB-color.png", alt: "Gilead", size: "h-12 w-20" },
  { src: "/BSI_Group_logo.svg.png", alt: "BSI Group", size: "h-8 w-16" },
  { src: "/WG_logo.png", alt: "Western Growers", size: "h-12 w-20" },
  { src: "/kentik-logo-vertical.png", alt: "Kentik", size: "h-12 w-20" },
  { src: "/EPA_logo.svg.png", alt: "U.S. Environmental Protection Agency", size: "h-12 w-20" },
  { src: "/bgs.png", alt: "Brown Girl Surf", size: "h-12 w-20" }
];

const ventures = [
  {
    name: "Kentik",
    description: "Currently, I'm a Senior Technical Writer at Kentik. My documentation work includes release notes, system overviews, instructions, and portal structure articles as well as detailed references to the interface and usage of all portal modules and settings.",
    link: "https://kb.kentik.com/",
  },
  {
    name: "U.S. Environmental Protection Agency",
    description: "Most of my contracted EPA work was proprietary. Here are a few public-facing contributions from my time at Systalex (2021-2025).",
    bulletList: [
      "Pre-Production Release Notes",
      "Concept of Operations (CONOPS)",
      "Data Model Analysis Summary Report",
      "Ground Water Rule (GWR) Data Reporting Instructions (DRIs)",
      "2022 General Assistance Program (GAP) Guidance"
    ],
    link: "#"
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Ventures");

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Profile Section */}
        <div className="mb-12">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 mb-8 overflow-hidden">
            <img 
              src="/Untitled_1400_x_1400_px_.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Hey, I'm Kendra Johng.
          </h1>

          {/* Bio */}
          <div className="space-y-2 mb-8">
            <p className="text-lg text-gray-600 font-normal">
                          Transforming complex ideas into clear, intuitive documentation for 10+ years.

            </p>
            <p className="text-lg text-gray-600 font-normal">
                          If you want documentation that empowers users and accelerates your business goals, <b>let's chat</b>! See work samples below.
            </p>
          </div>

          {/* Social Links */}
                  <div className="flex items-center gap-4">
          <Link
                          href="https://www.linkedin.com/in/kendra-johng/"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/kendrajohng"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:kendrajohng@gmail.com"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/cozycoworker/"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://substack.com/@kendrajohng"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <FileText className="w-5 h-5" />
            </Link>
            
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {activeTab === "Writing" && (
            <div className="space-y-8">
              {/* Client Logos - Animated Horizontal Scroll */}
              <div className="relative overflow-hidden py-8">
                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(0);
                    }
                    50% {
                      transform: translateX(-50%);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }
                  .scroll-container {
                    animation: scroll 60s linear infinite;
                  }
                `}</style>
                
                <div className="flex scroll-container">
                  {/* First set of logos */}
                  <div className="flex items-center gap-12 pr-12">
                    {clientLogos.map((logo, idx) => (
                      <div 
                        key={`first-${idx}`}
                        className={`grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 ${logo.size} flex-shrink-0`}
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.alt}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center gap-12 pr-12">
                    {clientLogos.map((logo, idx) => (
                      <div 
                        key={`second-${idx}`}
                        className={`grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 ${logo.size} flex-shrink-0`}
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.alt}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Writing Projects */}
              <div className="grid gap-6">
                {ventures.map((venture, index) => (
                  <Card
                    key={index}
                    className="p-8 bg-white border border-gray-200 hover:border-gray-300 transition-all cursor-pointer group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                          {venture.name}
                        </h3>
                        {venture.link !== "#" && (
                          <a 
                            href={venture.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg
                              className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {venture.description}
                      </p>
                      {venture.bulletList && (
                        <ul className="space-y-1.5 ml-4">
                          {venture.bulletList.map((item, idx) => (
                            <li key={idx} className="text-gray-600 leading-relaxed list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                    </div>
                  </Card>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-4 pt-6">
                <a 
                  href="https://docs.google.com/document/d/1R02J2B4PdOZW6LLabLbuIwHCRu27pgH_/edit?usp=sharing&ouid=108211663896525231891&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-6 text-base"
                  >
                    Download My Resume →
                  </Button>
                </a>
              </div>
            </div>
          )}

          {activeTab === "Apps" && (
            <div className="grid gap-6">
              <ProjectCard
                title="write good"
                description="I'm so stoked to launch my first web app, Write Good! I created this tool to help technical writers develop their skills through practical, algorithmically-generated exercises that mirror real-world documentation challenges. v0.2.0 released on December 1,2025. I'd love your input to make this tool great for you and to improve my dev skills."
                icon="wg"
                link="https://twpg.vercel.app"
                date="September 14, 2025"
                image="/Screenshot_2025-12-01_123035.jpg"
              />
              
              <ProjectCard
                title="banchan"
                description="Banchan is a dopamine menu app. like korean banchan (반찬)—side dishes that enhance the meal—banchan adds small joys that make the day feel complete. Add your custom activity, do the thing, and celebrate your tiny win."
                icon="bc"
                link="https://thebanchanapp.com"
                date="Launching 2026"
                image="/Screenshot_2025-12-01_123928.jpg"
              />
            </div>
          )}

          {activeTab === "Services" && (
            <div className="space-y-8">
              {/* Services Accordion */}
              <Accordion type="single" collapsible className="w-full space-y-4">
                {/* Service 01 */}
                <AccordionItem value="service-1" className="border-none">
                  <AccordionTrigger className="flex items-center justify-between py-6 border-b border-gray-200 hover:no-underline group">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-gray-400 font-normal text-base sm:text-lg">01.</span>
                      <h3 className="text-base sm:text-xl font-normal text-black group-hover:text-gray-600 transition-colors">
                        Documentation Health Audit & Roadmap
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 px-8 sm:px-12">
                    <div className="space-y-4 text-gray-600">
                      <p className="leading-relaxed">
                                              Get a clear picture of where your documentation stands and what to fix first. I review a curated sample of your SOPs, policies, and key docs, evaluate how they’re managed and used, and deliver a prioritized 90-day roadmap. You walk away with a concise findings summary, risk highlights, and concrete next steps instead of a vague “your docs need work.”
                      </p>
                      <p className="text-sm font-medium text-black pt-2">Contact for quote</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Service 02 */}
                <AccordionItem value="service-2" className="border-none">
                  <AccordionTrigger className="flex items-center justify-between py-6 border-b border-gray-200 hover:no-underline group">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-gray-400 font-normal text-base sm:text-lg">02.</span>
                      <h3 className="text-base sm:text-xl font-normal text-black group-hover:text-gray-600 transition-colors">
                        SOP & Policy System Build
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 px-8 sm:px-12">
                    <div className="space-y-4 text-gray-600">
                      <p className="leading-relaxed">
                                              Instead of one-off SOPs, I design a scalable documentation system. I create standardized templates, define the hierarchy (policies → SOPs → work instructions), and draft or rewrite your highest-priority documents. You get a consistent set of audit-ready SOPs/policies, plus templates and a short style guide so your team can keep things aligned without external help.
                      </p>
                      <p className="text-sm font-medium text-black pt-2">Contact for quote</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Service 03 */}
                <AccordionItem value="service-3" className="border-none">
                  <AccordionTrigger className="flex items-center justify-between py-6 border-b border-gray-200 hover:no-underline group">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-gray-400 font-normal text-base sm:text-lg">03.</span>
                      <h3 className="text-base sm:text-xl font-normal text-black group-hover:text-gray-600 transition-colors">
                        Documentation & Knowledge Base Operations
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 px-8 sm:px-12">
                    <div className="space-y-4 text-gray-600">
                      <p className="leading-relaxed">
                                              I act as a fractional documentation lead focused on keeping your content accurate, current, and organized. I manage the documentation backlog, coordinate updates tied to product or process changes, maintain structure in your tools (Confluence, SharePoint, help center, etc.), and report on coverage and freshness. This is focused DocOps—not general project management—so your documentation runs like a real function, not an afterthought.
                      </p>
                      <p className="text-sm font-medium text-black pt-2">Contact for quote</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Service 04 */}
                <AccordionItem value="service-4" className="border-none">
                  <AccordionTrigger className="flex items-center justify-between py-6 border-b border-gray-200 hover:no-underline group">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-gray-400 font-normal text-base sm:text-lg">04.</span>
                      <h3 className="text-base sm:text-xl font-normal text-black group-hover:text-gray-600 transition-colors">
                        Training & Onboarding Enablement
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 px-8 sm:px-12">
                    <div className="space-y-4 text-gray-600">
                      <p className="leading-relaxed">
                                              I turn complex SOPs and product knowledge into practical onboarding and training materials. That can include 30/60/90-day onboarding guides, role-specific quick reference sheets, training decks, and simple how-to guides for your LMS or intranet. The result is faster, more consistent ramp-up for new hires and fewer errors from unclear or ad hoc training.
                      </p>
                      <p className="text-sm font-medium text-black pt-2">Contact for quote</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pt-6">

                <a 
                  href="https://calendly.com/kendrajohng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-6 text-base"
                  >
                    Book a call →
                  </Button>
                </a>
              </div>
            </div>
          )}

          {activeTab === "Clients" && (
            <div className="space-y-12">
              {/* Testimonial 1 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    "Phenomenal work, thoroughly recommend. Kendra took the time to understand my requirements and produced a document that was above and beyond my expectations. Delivery was also incredibly quick. Kendra was also willing to provide revisions as requested. I wouldn't hesitate in engaging Kendra's services again to create standard operating procedures."
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-base font-medium text-black">@mwni79</span>
                  </div>
                  <span className="text-sm text-gray-400">Fiverr</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    "Kendra is supreme! She is great at translating what you are describing into coherent, actionable steps. Very happy she chose to accept my gig. Will be back!"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-base font-medium text-black">@christie_snow</span>
                  </div>
                  <span className="text-sm text-gray-400">Fiverr</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    "Excellent depth and quality of work. Very thorough."
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-base font-medium text-black">@clairemb2020</span>
                  </div>
                  <span className="text-sm text-gray-400">Fiverr</span>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                                      "I absolutely love working this this seller. She is awesome! Great communication and SOP is always so well written."
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-base font-medium text-black">@crawfsh40</span>
                  </div>
                  <span className="text-sm text-gray-400">Fiverr</span>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                                      "Very good communication and professionalism. I would do business with her again!"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-base font-medium text-black">@danjob1</span>
                  </div>
                  <span className="text-sm text-gray-400">Fiverr</span>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-gray-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                                      "Very professional and knowledgeable. We highly recommend her services."
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="text-base font-medium text-black">@fgfvegan</span>
                  </div>
                  <span className="text-sm text-gray-400">Fiverr</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Tools" && (
            <div className="space-y-6">
              {/* Authoring & Project Management Tools */}
              <Card className="p-8 bg-white border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Authoring & Project Management</h3>
                <div className="flex flex-wrap gap-2">
                  {["Jira", "Confluence", "GitHub", "Trello", "SharePoint", "Microsoft 365", "Google Workspace", "Notion", "Word", "Doc360", "Adobe Acrobat", "FrameMaker", "MadCap Flare", "Articulate 360", "Snagit"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Development & UI/UX Tools */}
              <Card className="p-8 bg-white border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Development & UI/UX</h3>
                <div className="flex flex-wrap gap-2">
                  {["GitHub", "HTML", "CSS", "JavaScript", "XML", "VS Code", "Vercel", "Supabase", "Framer", "Figma", "draw.io", "Photoshop", "Premiere Pro", "OBS", "Canva"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* AI Tools */}
              <Card className="p-8 bg-white border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">AI</h3>
                <div className="flex flex-wrap gap-2">
                  {["Claude", "OpenAI", "Gemini", "Perplexity", "Replit", "Softgen"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "Connect" && (
            <div className="grid gap-6">
              <Card className="p-8 bg-white border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Let's Connect</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hi! I'm Kendra Johng, a Senior Technical Writer with expertise in Software Development Life Cycle (SDLC) documentation, project management, process improvement, and content strategy for enterprise SaaS products. Donuts and cinnamon rolls are my weaknesses. I love skateboarding, vibe coding, and starting (possibly never finishing) new hobbies. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-3">
                  <a href="mailto:kendrajohng@gmail.com" className="block">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6">
                      <Mail className="w-4 h-4 mr-2" />
                      Send me an email
                    </Button>
                  </a>
                  <Link href="https://www.linkedin.com/in/kendra-johng/" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-black hover:bg-gray-50 rounded-full py-6"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Kendra Johng. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
