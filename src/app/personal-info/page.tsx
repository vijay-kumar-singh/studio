import { PersonalInfoSection } from '@/components/personal-info-section';
import { personalInfoData } from '@/lib/data';

export default function PersonalInfoPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">About Me</h1>
      <PersonalInfoSection info={personalInfoData} />
    </div>
  );
}
