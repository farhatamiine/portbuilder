import { Dashboard } from "@/components/Dashboard"

interface AccountLayoutProps {
    children: React.ReactNode,
    params: {
        accountId: string
    }
}

export default async function AccountLayout({ children, params }: AccountLayoutProps) {

    
    return (
        <Dashboard navCollapsedSize={4} defaultLayout={[200, 655]}>
            {children}
        </Dashboard>
    )
}