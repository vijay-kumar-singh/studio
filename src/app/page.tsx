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
            Welcome to Vijay Singh Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate and results-oriented Technical Lead with over 10+ years of experience driving software development, managing projects, and crafting high-performance web applications.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <UserCircle className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">My Profile</h3>
            <p className="text-muted-foreground text-sm">
              My Skills and Experience.
            </p>
            <Button variant="link" asChild className="mt-4 text-accent">
              <Link href="/resume">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <BriefcaseBusiness className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">My Projects</h3>
            <p className="text-muted-foreground text-sm">This project developed as per personal interest.
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
              <Link href="/resume-improver">Build Resume <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
