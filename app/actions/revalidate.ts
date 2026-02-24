"use server";

import { revalidateTag } from "next/cache";

export async function revalidatePosts() {
  console.log("CACHE CLEARED BY BUTTON");

 
  revalidateTag("posts", "max");
}