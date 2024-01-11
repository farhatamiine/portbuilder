import {Dashboard} from "@/components/Dashboard"


interface AccountLayoutProps {
    children: React.ReactNode,
    params: {
        accountId: string
    }
}

export default async function PortfolioLayout({children, params}: AccountLayoutProps) {



    return (
        <>
            {children}
        </>
    )
}