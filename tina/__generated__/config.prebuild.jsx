// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ───────────────────────────────────────── BLOG
      {
        name: "post",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => values?.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") ?? ""
          }
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          {
            type: "string",
            name: "tag",
            label: "Category Tag",
            required: true,
            options: ["Career Guide", "DGCA Exams", "Flight Training", "Cabin Crew", "Industry", "Medical"]
          },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" }, required: true },
          { type: "string", name: "readTime", label: "Read Time (e.g. 8 min)", required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      // ───────────────────────────────────────── NEWS
      {
        name: "news",
        label: "News Articles",
        path: "content/news",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => values?.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") ?? ""
          }
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          {
            type: "string",
            name: "tag",
            label: "Category Tag",
            required: true,
            options: ["Industry", "DGCA", "Global Aviation", "Airline"]
          },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" }, required: true },
          { type: "string", name: "source", label: "Source / Publication", required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      // ───────────────────────────────────────── GALLERY
      {
        name: "gallery",
        label: "Gallery Photos",
        path: "content/gallery",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => values?.caption?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") ?? `photo-${Date.now()}`
          },
          allowedActions: { create: true, delete: true }
        },
        fields: [
          { type: "image", name: "src", label: "Photo", required: true },
          { type: "string", name: "alt", label: "Alt Text (accessibility)", required: true },
          {
            type: "string",
            name: "cat",
            label: "Category",
            required: true,
            options: ["Training", "Cockpit", "USA Training", "In-flight", "Cabin Crew", "Operations", "Industry"]
          },
          { type: "string", name: "caption", label: "Caption", isTitle: true, required: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
