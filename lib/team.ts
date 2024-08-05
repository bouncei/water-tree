import { client } from "@/sanity/lib/client";
import { Team } from "./types";

export async function getTeamMembers(): Promise<Team[]> {
  const query = `*[_type == "team"]{
  name, position, image, bio, twitter, facebook, instagram, linkedin}`;
  const params = {};

  try {
    const teamMembers = await client.fetch(query, params);
    return teamMembers;
  } catch (error) {
    console.error("Error fetching teams members:", error);
    return [];
  }
}
