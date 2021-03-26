export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605e281d477e9a11038c75fb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8rc416ck",
                  apiId: "8b7ce10c-3b95-404e-a523-78d656901fdc",
                },
                {
                  buildHookId: "605e281dd9f4300ddf7c8a31",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dtgbkvz3",
                  apiId: "50665e39-2a21-4462-bde8-47b5f6f46436",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/FrankBeatrice/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dtgbkvz3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
