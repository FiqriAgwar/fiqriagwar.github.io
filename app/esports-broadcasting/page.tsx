import { Timeline } from "@/components/Timeline";
import { esportsExp } from "@/constants/workExperiences";

export default function EsportsBroadcasting() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold">Esports Broadcasting Portfolio</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <Timeline items={esportsExp} />
      </section>
    </div>
  );
}
