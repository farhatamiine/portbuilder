import { Dashboard } from "@/components/Dashboard";
import ExperienceCard from "@/components/ExperienceCard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="grid grid-cols-3">
      <aside className="md:col-span-1 col-span-1 h-fit bg-white p-6 border rounded border-slate-400">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-center w-full">
            <Image
              alt="User avatar"
              className="w-32 h-32 rounded-full"
              height="200"
              src="https://generated.vusercontent.net/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
            <p className="mt-2 text-sm text-gray-600">Fullstack Engineer</p>
            <p className="mt-2 text-sm text-gray-600">Building React apps</p>
          </div>
          <h3 className="mt-4 text-lg font-semibold">About Me</h3>
          <p className="mt-2 text-sm text-gray-600">
            Passionate Fullstack Engineer with 5+ years of experience in
            building web applications using React and other modern technologies.
          </p>
          <h3 className="mt-4 text-lg font-semibold">Language</h3>
          <p className="mt-2 text-sm text-gray-600">English</p>
          <h3 className="mt-4 text-lg font-semibold">Country</h3>
          <p className="mt-2 text-sm text-gray-600">United States</p>
          <h3 className="mt-4 text-lg font-semibold">Skills</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="secondary">React JS</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Express.js</Badge>
          </div>
        </div>
      </aside>
      <main className="md:col-span-2 col-span-2">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            <div className="py-6">
              <div className="flex items-center justify-between pb-6 ">
                <h1 className="text-2xl font-semibold leading-tight">
                  Fullstack Engineer building React apps
                </h1>
              </div>
              <Tabs defaultValue="project">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="project">Projects</TabsTrigger>
                  <TabsTrigger value="experience">Experiences</TabsTrigger>
                  <TabsTrigger value="education">Educations</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="project"
                  className="h-[680px] overflow-y-scroll pr-3 grid grid-cols-2 md:grid-cols-3 gap-5"
                >
                  <ExperienceCard />
                  <ExperienceCard />
                  <ExperienceCard />
                  <ExperienceCard />
                </TabsContent>
                <TabsContent
                  value="experience"
                  className="h-[680px] grid grid-cols-2 md:grid-cols-3 gap-5"
                >
                  <ExperienceCard />
                </TabsContent>
                <TabsContent
                  value="education"
                  className=" h-[680px] grid grid-cols-2 md:grid-cols-3 gap-5"
                >
                  <ExperienceCard />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
