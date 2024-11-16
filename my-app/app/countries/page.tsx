import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Countries:</h1>
      <ul className="list-disc">
        {countries &&
          countries.map((country) => <li key={country.id}>{country.name}</li>)}
      </ul>
      <Link
        href="/"
        className="bg-blue-500 w-fit py-4 px-8 rounded-xl text-white font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}
