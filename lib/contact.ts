import { client } from "@/sanity/lib/client";

export async function sendEnquiry(
  name: string,
  email: string,
  enquiry: string
) {
  try {
    const doc = {
      _type: "contact",
      name,
      email,
      enquiry,
    };

    await client.create(doc).then((res) => {
      console.log("Enquiry sent successfully!", res);
    });
  } catch (error) {
    console.log("Error occurred while sending enquiry:", error);
    throw error;
  }
}
