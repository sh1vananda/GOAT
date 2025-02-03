import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: "production",
  useCdn: true,
});

export async function get({ params }) {
  const query = `*[_type == "list" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    coverImage,
    items[]{
      title,
      description,
      "image": image.asset->url,
      link
    }
  }`;

  const list = await client.fetch(query, { slug: params.slug });
  return list ? { body: list } : { status: 404 };
}
