"use client";

import { Dashboard } from "@/components/Dashboard";
import DetailCard from "@/components/DetailCard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import AddNewCard from "@/components/AddNew";
import { trpc } from "@/app/_trpc/client";
import Skeleton from "react-loading-skeleton";
import { NoItemFound } from "@/components/NoItemFound";
import { convertObjectsToStringArray } from "@/lib/utils";
import { log } from "console";

const Page = () => {
  const { data: projects, isLoading } = trpc.getUserProjects.useQuery();
  const { data: user, isLoading: LoadingUserInfo } =
    trpc.getUserInformation.useQuery();
  const formatNameId = (obj: { name: string; id: number | string }) =>
    `${obj.name}`;

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <aside className="2xl:col-span-1 col-span-3 mb-5 xl:mb-0 h-fit bg-white p-6 border rounded border-slate-400">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center w-full">
              <Image
                alt="User avatar"
                className="w-32 h-32 rounded-full"
                height="200"
                src={"https://github.com/shadcn.png"}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h2 className="mt-4 text-xl font-semibold">
                {user?.given_name + " " + user?.family_name}
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
        <main className="2xl:col-span-2 col-span-3">
          <div className="px-0 mt-4 md:mt-0 lg:px-8">
            <Tabs defaultValue="Projects" className="w-full">
              <TabsList>
                <TabsTrigger value="Projects">Projects</TabsTrigger>
                <TabsTrigger value="Education">Education</TabsTrigger>
                <TabsTrigger value="Experiences">Experiences</TabsTrigger>
              </TabsList>
              <TabsContent value="Projects">
                <AddNewCard
                  title={"Add a project"}
                  description={
                    "Your projects should highlight your best skills and experience."
                  }
                >
                  <p>Hello World</p>
                </AddNewCard>
                <ScrollArea className="h-[750px] w-full px-2 md:px-0 rounded-md ">
                  {projects && projects.length > 0 ? (
                    projects.map(
                      ({ name: projectName, description, id, Tools }) => {
                        return (
                          <DetailCard
                            key={id}
                            title={projectName}
                            image={""}
                            description={description}
                            badges={convertObjectsToStringArray(
                              Tools,
                              formatNameId
                            )}
                          />
                        );
                      }
                    )
                  ) : isLoading ? (
                    <Skeleton height={100} className="my-2" count={3} />
                  ) : (
                    <NoItemFound
                      description="No projects found"
                      image={
                        <Image
                          src={"/noProjects.png"}
                          alt="No Projects"
                          width={250}
                          className="object-cover"
                          height={250}
                        />
                      }
                    />
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="Experiences">
                <AddNewCard
                  title={"Add an Experiences"}
                  description={
                    "Showcase your professional journey and highlight career milestones."
                  }
                >
                  <p>Experiences</p>
                </AddNewCard>
                <ScrollArea className="h-[750px] w-full px-2 md:px-0 rounded-md ">
                  {projects && projects.length > 0 ? (
                    projects.map(
                      ({ name: projectName, description, id, Tools }) => {
                        return (
                          <DetailCard
                            key={id}
                            title={projectName}
                            image={""}
                            description={description}
                            badges={convertObjectsToStringArray(
                              Tools,
                              formatNameId
                            )}
                          />
                        );
                      }
                    )
                  ) : isLoading ? (
                    <Skeleton height={100} className="my-2" count={3} />
                  ) : (
                    <NoItemFound
                      description="No Experience found"
                      image={
                        <Image
                          src={"/noExperience.svg"}
                          alt="No Experience"
                          width={250}
                          className="object-cover"
                          height={250}
                        />
                      }
                    />
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="Education">
                <AddNewCard
                  title={"Add an Education"}
                  description={
                    "Detail your academic background to underscore your technical foundation."
                  }
                >
                  <p>Education</p>
                </AddNewCard>
                <ScrollArea className="h-[750px] w-full px-2 md:px-0 rounded-md ">
                  {projects && projects.length > 0 ? (
                    projects.map(
                      ({ name: projectName, description, id, Tools }) => {
                        return (
                          <DetailCard
                            key={id}
                            title={projectName}
                            image={""}
                            description={description}
                            badges={convertObjectsToStringArray(
                              Tools,
                              formatNameId
                            )}
                          />
                        );
                      }
                    )
                  ) : isLoading ? (
                    <Skeleton height={100} className="my-2" count={3} />
                  ) : (
                    <NoItemFound
                      description="No Education found"
                      image={
                        <Image
                          src={"/NoEducation.svg"}
                          alt="No education"
                          width={250}
                          className="object-cover"
                          height={250}
                        />
                      }
                    />
                  )}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </section>
  );
};
export default Page;
