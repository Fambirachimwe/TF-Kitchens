import { LOGO_PUBLIC_PATH } from "~/constants/brand";
import { SITE } from "~/constants/site";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
}

export function buildMeta({ title, description, path = "" }: PageMeta) {
  const url = `${SITE.url}${path}`;
  const imageUrl = `${SITE.url}${LOGO_PUBLIC_PATH}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE.name },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}
