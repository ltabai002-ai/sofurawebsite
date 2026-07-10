import { createClient } from "@sanity/client";

const client = createClient({ projectId: "kwmd4k9e", dataset: "production", useCdn: true, apiVersion: "2024-01-01" });

// Full body structure for check-ge
const data = await client.fetch('*[_type == "post" && slug.current == "check-ge"][0]{ title, slug, mainImage, body }');
console.log("check-ge full data:");
console.log(JSON.stringify(data, null, 2));

// Full body for welcome-to-sofura-blog too for comparison
const data2 = await client.fetch('*[_type == "post" && slug.current == "welcome-to-sofura-blog"][0]{ title, slug, mainImage }');
console.log("\nwelcome-to-sofura-blog mainImage:");
console.log(JSON.stringify(data2, null, 2));
