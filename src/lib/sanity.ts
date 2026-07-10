import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "kwmd4k9e",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: { name: string };
  _createdAt: string;
  mainImage?: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
  body?: unknown[];
}

export interface SanityPostPreview {
  _id: string;
  title: string;
  slug: { current: string };
  author: { name: string };
  _createdAt: string;
  mainImage?: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
}

export async function getAllPosts(): Promise<SanityPostPreview[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        author->{name},
        _createdAt,
        mainImage
      }`,
    );
  } catch (err) {
    console.error("Sanity getAllPosts failed:", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        author->{name},
        _createdAt,
        mainImage,
        body
      }`,
      { slug },
    );
  } catch (err) {
    console.error("Sanity getPostBySlug failed:", err);
    return null;
  }
}
