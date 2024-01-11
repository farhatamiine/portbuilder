"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {trpc} from "@/app/_trpc/client";
import {Loader2} from "lucide-react";

const Page = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const {isSuccess, isError, error} = trpc.authCallback.useQuery(undefined, {
        retry: true,
        retryDelay: 500
    })

    if (isSuccess) {
        router.push(origin ? `/${origin}` : "/dashboard")
    }
    if (isError && error.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in")

    }

    return (
        <div className={"flex w-full mt-24  justify-center"}>
            <div className={"flex flex-col items-center"}>
                <Loader2 className={"h-8 w-8 animate-spin text-zinc-800"}/>
                <h3 className={"font-semibold text-xl"}>Setting up your account</h3>
                <p>You will be redirected automatically</p>
            </div>
        </div>
    )
}


export default Page;