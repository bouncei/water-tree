import { client } from "@/sanity/lib/client";
// GET ALL COMPANIES
export async function getAllCompanies(): Promise<any[]> {
  const query = '*[_type == "company"]';
  const params = {};

  try {
    const companies = await client.fetch(query, params);
    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}
