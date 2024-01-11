import {Dashboard} from "@/components/Dashboard"
import {PropsWithChildren} from "react";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {TRPCError} from "@trpc/server";
import {db} from "@/db";
import {redirect} from "next/navigation";


export default async function DashboardLayout({children}: PropsWithChildren) {

    const {getUser} = getKindeServerSession()
    const user = await getUser();

    if (!user?.id || !user?.email) redirect("/auth-callback?origin=dashboard")

    const dbUser = await db.user.findFirst({
        where: {
            id: user.id
        }
    })
    if (!dbUser) {
        redirect("/auth-callback?origin=dashboard")
    }


    return (
        <Dashboard>
            {children}
        </Dashboard>
    )
}