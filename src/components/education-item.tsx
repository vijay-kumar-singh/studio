import type { Education } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Disc3 } from 'lucide-react';

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <Card className="border-l-4 border-accent">
      <CardHeader>
        <CardTitle className="text-xl">{education.degree}</CardTitle>
        <CardDescription className="text-md font-medium">{education.institution}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          {education.startDate} – {education.endDate}
        </div>
      </CardHeader>
      {education.details && education.details.length > 0 && (
        <CardContent>
          <ul className="list-none space-y-2 pl-1">
            {education.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <Disc3 className="mr-2 mt-1 h-3 w-3 text-primary flex-shrink-0" />
                <span className="text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
