import { client } from "@/sanity/lib/client";
// GET ALL PORTFOLIO ITEMS
export async function getAllPortfolio(): Promise<any[]> {
  const query = '*[_type == "portfolio"]';
  const params = {};

  try {
    const portfolio = await client.fetch(query, params);
    return portfolio;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return [];
  }
}
