import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({ projectId: "kwmd4k9e", dataset: "production", useCdn: true, apiVersion: "2024-01-01" });
const builder = imageUrlBuilder(client);

const data = await client.fetch('*[_type == "post"]{ title, slug, mainImage }');
for (const d of data) {
  const hasAssetRef = d.mainImage?.asset?._ref || d.mainImage?.asset?._id;
  const hasUpload = d.mainImage?._upload;
  console.log(`\n${d.title} (${d.slug.current}):`);
  console.log(`  asset._ref: ${d.mainImage?.asset?._ref || "null"}`);
  console.log(`  has _upload: ${!!hasUpload}`);
  if (hasAssetRef) {
    try {
      const url = builder.image(d.mainImage).width(600).url();
      console.log(`  URL: ${url}`);
    } catch (e) {
      console.log(`  URL ERROR: ${e.message}`);
    }
  }
}
