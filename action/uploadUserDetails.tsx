"use server";

import { Database, TablesInsert } from "@/database.types";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const uploadUserDetails = async (formData: TablesInsert<"profiles">) => {
  const supabase = createServerActionClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("profiles")
    .insert({ ...formData });
};
