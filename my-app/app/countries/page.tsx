import { createClient } from "@/utils/supabase/server";

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return (
    <div>
      <h1 className="text-2xl font-bold">Countries:</h1>
      <ul className="mt-8 list-disc">
        {countries &&
          countries.map((country) => <li key={country.id}>{country.name}</li>)}
      </ul>
    </div>
  );
}
