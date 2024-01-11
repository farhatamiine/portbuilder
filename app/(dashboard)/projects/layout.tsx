import { Dashboard } from "@/components/Dashboard"

interface ProjectLayoutProps {
    children: React.ReactNode,

}

export default async function ProjectLayout({ children }: ProjectLayoutProps) {


    return (
        <>
            {children}
        </>
    )
}