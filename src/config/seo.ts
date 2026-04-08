// Central SEO config used by the static export pipeline.

export interface SEOConfig {
  /** Canonical base URL (must be https + www). */
  baseUrl: string;

  /** Site name shown in link previews. */
  siteName: string;

  /** Open Graph locale (e.g., en_SG). */
  locale: string;

  /** Output filenames that should NOT be indexed or listed in sitemap.xml */
  excludeFromIndex: string[];

  /** Organization name used for Schema.org JSON-LD. */
  organizationName: string;

  /** Open Graph defaults. */
  og: {
    /** Default OG type for pages (usually "website"). */
    type: string;

    /** Default OG images per site type. Paths must be absolute ("/assets/..."), not full URLs. */
    defaultImageBySiteType: {
      main: string;
      teamworks: string;
      jess: string;
    };

    /** Optional per-page overrides keyed by output filename. */
    overridesByFilename?: Record<
      string,
      {
        title?: string;
        description?: string;
        image?: string; // absolute path like "/assets/..."
        type?: string;
      }
    >;
  };
}

export const seo: SEOConfig = {
  baseUrl: "https://www.ciagile.com",
  siteName: "CI Agile",
  locale: "en_SG",
  excludeFromIndex: ["thankyou.html", "teamworks/bookConsultation.html", "letstalk.html", "bookseat.html"],
  organizationName: "CI Agile",
  og: {
    type: "website",
    defaultImageBySiteType: {
      main: "/assets/og/main-og-v2.webp",
      teamworks: "/assets/og/teamworks-og.webp",
      jess: "/assets/og/jess-og.webp",
    },
    overridesByFilename: {
      "index.html": {
        title: "Enterprise & Team Performance Training in Malaysia | CI Agile",
        description:
          "Increase revenue, reduce cost, and gain more customers through world-class agile, AI, and leadership training programs delivered across Malaysia.",
        image: "/assets/og/main-og-v2.webp",
      },
      "teamworks/index.html": {
        title: "Private Team Training Workshops in Malaysia | TeamWorks by CI Agile",
        description:
          "Practical 2-day private workshops for Malaysian teams to improve productivity, problem-solving, and AI adoption — delivered in-house for your team.",
        image: "/assets/og/teamworks-og.webp",
      },
      "jess/index.html": {
        title: "Scrum at Scale Certification in Malaysia | Jeff Sutherland Program",
        description:
          "Official enterprise agile leadership program built on Scrum@Scale — designed for leaders scaling execution across Malaysia and Southeast Asia.",
        image: "/assets/og/jess-og.webp",
      },
      "jess/leadership-training.html": {
        title: "Enterprise Agile Leadership Training in Malaysia | Scrum@Scale Certification",
        description:
          "Asia Pacific's only official Scrum@Scale leadership training — endorsed by Dr. Jeff Sutherland. Drive Agile transformation at scale. Earn 3 internationally recognised credentials. Classes in Malaysia, Indonesia and online.",
        image: "/assets/og/jess-og.webp",
      },
    },
  },
};
