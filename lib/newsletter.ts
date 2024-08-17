import { client } from "@/sanity/lib/client";

export async function addToNewLetter(email: string) {
  try {
    const doc = {
      _type: "newsletter",
      email,
    };

    await client.create(doc).then((res) => {
      console.log("Added successfully!", res);
    });
  } catch (error) {
    console.log(
      "Error occurred while adding an email to our newsletter:",
      error
    );
    throw error;
  }
}
