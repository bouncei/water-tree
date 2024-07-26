import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "sg48aej9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

// RUN THIS TO ADD EXCEPTION FOR LOCALHOST:300 CORS POLICY
// sanity cors add http://localhost:3000
export default client;
