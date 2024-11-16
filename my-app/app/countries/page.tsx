import { createClient } from "@/utils/supabase/server";

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries &&
          countries.map((country) => <li key={country.id}>{country.name}</li>)}
      </ul>
    </div>
  );
}
