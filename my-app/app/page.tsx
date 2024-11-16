import Hero from "@/components/hero";
// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Countries Database</h2>
        <Link
          href="/countries"
          className="bg-blue-500 w-fit py-4 px-8 rounded-xl text-white font-semibold"
        >
          View All Countries
        </Link>
      </main>
    </>
  );
}
