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
                    "621a6872a0e0753cc75258b5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-y26tf34v",
                  apiId: "c7c9a001-9df3-4875-a3a0-942a24bec98d",
                },
                {
                  buildHookId: "621a6872135308209d7accfb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ebqkp7ym",
                  apiId: "1f968571-a234-4fe0-866a-e1e12c70ffa8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jmoralest10/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ebqkp7ym.netlify.app",
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
