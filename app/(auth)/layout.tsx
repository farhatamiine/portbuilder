import { Dashboard } from "@/components/Dashboard";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  );
}
