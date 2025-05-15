import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness, Lightbulb, UserCircle, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <section className="text-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BriefcaseBusiness className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Welcome to Portfolio Pro
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Craft your professional story. Showcase your projects, build your resume,
            and use AI to make your achievements shine.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume-improver">
                Improve Resume <Lightbulb className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <UserCircle className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalize Your Profile</h3>
            <p className="text-muted-foreground text-sm">
              Share your story, skills, and contact information in one place.
            </p>
            <Button variant="link" asChild className="mt-4 text-accent">
              <Link href="/personal-info">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <BriefcaseBusiness className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Showcase Your Work</h3>
            <p className="text-muted-foreground text-sm">
              Display your best projects with images, descriptions, and links.
            </p>
            <Button variant="link" asChild className="mt-4 text-accent">
              <Link href="/projects">Explore Projects <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FileText className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Build & Improve Resume</h3>
            <p className="text-muted-foreground text-sm">
              Outline your experience and education, then enhance it with AI.
            </p>
            <Button variant="link" asChild className="mt-4 text-accent">
              <Link href="/resume">Build Resume <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Portfolio Pro Showcase" 
            width={800} 
            height={400}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="portfolio website computer"
          />
        </div>
      </section>
    </div>
  );
}
