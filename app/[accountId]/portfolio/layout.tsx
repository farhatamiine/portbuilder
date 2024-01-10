import {Dashboard} from "@/components/Dashboard"
import {auth, currentUser} from "@clerk/nextjs";

interface AccountLayoutProps {
    children: React.ReactNode,
    params: {
        accountId: string
    }
}

export default async function PortfolioLayout({children, params}: AccountLayoutProps) {

    const {userId} = auth();

    return (
        <>
            {children}
        </>
    )
}