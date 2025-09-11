import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "d-floe's docs",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "docs.d-floe.com",
    ignorePatterns: ["!private", "templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Signika Negative",
        body: "Exo 2",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#577498",
          gray: "#3e3e3e",
          darkgray: "#202e4f",
          dark: "#202e4f",
          secondary: "#044d7c",
          tertiary: "#427af1",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "rgb(30, 30, 30)",
          lightgray: "rgb(173, 173, 173)",
          gray: "#ebebeb",
          darkgray: "rgb(241, 244, 244)",
          dark: "rgb(241, 244, 244)",
          secondary: "#f88c85",
          tertiary: "rgb(255, 174, 168)",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true, comments: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
