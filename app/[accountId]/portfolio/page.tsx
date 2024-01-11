import { Dashboard } from "@/components/Dashboard";
import DetailCard from "@/components/DetailCard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";
import { projects } from "@/lib/data";

export default async function PortfolioPage() {
  const user = await currentUser();

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <aside className="md:col-span-1 col-span-2 h-fit bg-white p-6 border rounded border-slate-400">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center w-full">
              <Image
                alt="User avatar"
                className="w-32 h-32 rounded-full"
                height="200"
                src={user!.imageUrl}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h2 className="mt-4 text-xl font-semibold">
                {user?.firstName + " " + user?.lastName}
              </h2>
              <p className="mt-2 text-sm text-gray-600">Fullstack Engineer</p>
              <p className="mt-2 text-sm text-gray-600">Building React apps</p>
            </div>
            <h3 className="mt-4 text-lg font-semibold">About Me</h3>
            <p className="mt-2 text-sm text-gray-600">
              Passionate Fullstack Engineer with 5+ years of experience in
              building web applications using React and other modern
              technologies.
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
          <div className="px-0 mt-4 md:mt-0 lg:px-8">
            <Tabs defaultValue="Projects" className="w-full">
              <TabsList>
                <TabsTrigger value="Projects">Projects</TabsTrigger>
                <TabsTrigger value="Education">Education</TabsTrigger>
                <TabsTrigger value="Experiences">Experiences</TabsTrigger>
              </TabsList>
              <TabsContent value="Projects">
                <ScrollArea className="h-[750px] w-full sm:px-2 rounded-md ">
                  {projects.map(
                    ({ title, badges, image, description }, index) => {
                      return (
                        <DetailCard
                          key={index}
                          title={title}
                          image={image}
                          description={description}
                          badges={badges}
                        />
                      );
                    }
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="Experiences">Experiences</TabsContent>
              <TabsContent value="Education">Education</TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </section>
  );
}