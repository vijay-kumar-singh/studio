import type { PersonalInfo } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface PersonalInfoSectionProps {
  info: PersonalInfo;
}

export function PersonalInfoSection({ info }: PersonalInfoSectionProps) {
  const initial = info.name.charAt(0).toUpperCase();

  return (
    <Card className="max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">{info.name}</CardTitle>
        <CardDescription className="text-accent text-lg">{info.title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-center text-muted-foreground">{info.bio}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
            <a href={`mailto:${info.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" /> {info.email}
            </a>
            {info.phone && (
              <a href={`tel:${info.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" /> {info.phone}
              </a>
            )}
             <Link href={info.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" /> LinkedIn Profile
            </Link>
            <Link href={info.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Github className="w-5 h-5" /> GitHub Profile
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Top Skills</h3>
            <ul className="space-y-1">
              {info.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center pt-6">
          <Button asChild>
            <Link href="/resume">View Full Resume</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
