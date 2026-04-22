export const CATEGORIES = [
  "All",
  "Tax",
  "Audit & Assurance",
  "Advisory",
  "Technology",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Article {
  slug: string;
  title: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  author: string;
  authorTitle: string;
  excerpt: string;
  image: string;
  featured: boolean;
}

export const ARTICLES: Article[] = [
  {
    slug: "finance-act-2024-key-implications",
    title: "Finance Act 2024: Key Tax Implications for Nigerian Businesses",
    category: "Tax",
    date: "March 15, 2026",
    readTime: "8 min read",
    author: "Adeoye H. Abiola",
    authorTitle: "Partner, Tax",
    excerpt:
      "The Finance Act 2024 introduces significant changes to corporate income tax, VAT administration, and transfer pricing regulations. Here's what every business leader needs to know about the shifting fiscal landscape.",
    image: "https://picsum.photos/seed/finance-act/800/450",
    featured: true,
  },
  {
    slug: "ifrs-17-practical-guide",
    title: "IFRS 17 in Practice: Lessons from Early Nigerian Adopters",
    category: "Audit & Assurance",
    date: "February 28, 2026",
    readTime: "11 min read",
    author: "Oladimeji Lawal",
    authorTitle: "Managing Partner",
    excerpt:
      "Two years into mandatory IFRS 17 adoption, we examine what insurance companies got right, the pitfalls to avoid, and what the standard means for financial reporting quality.",
    image: "https://picsum.photos/seed/ifrs17/800/450",
    featured: false,
  },
  {
    slug: "transfer-pricing-west-africa",
    title:
      "Transfer Pricing in West Africa: Navigating Multi-Jurisdiction Complexity",
    category: "Tax",
    date: "January 20, 2026",
    readTime: "9 min read",
    author: "Adeoye H. Abiola",
    authorTitle: "Partner, Tax",
    excerpt:
      "Multinational groups operating across Nigeria, Ghana, and Kenya face a patchwork of transfer pricing regimes. Our regional specialist breaks down the key compliance obligations.",
    image: "https://picsum.photos/seed/transfer-pricing/800/450",
    featured: false,
  },
  {
    slug: "digital-transformation-nigerian-smes",
    title: "Digital Transformation for Nigerian SMEs: Where to Start",
    category: "Technology",
    date: "December 10, 2025",
    readTime: "6 min read",
    author: "Sheu Olatunji",
    authorTitle: "Partner, Technology",
    excerpt:
      "Many SMEs know they need to transform digitally but don't know where to begin. Here's a practical, stage-by-stage roadmap to drive lasting results without breaking the bank.",
    image: "https://picsum.photos/seed/digital-transform/800/450",
    featured: false,
  },
  {
    slug: "esg-reporting-nigeria",
    title: "ESG Reporting: Why Nigerian Companies Can No Longer Wait",
    category: "Advisory",
    date: "November 5, 2025",
    readTime: "7 min read",
    author: "Abdul-Matin Gbadegesin",
    authorTitle: "Partner, Advisory",
    excerpt:
      "With SEC Nigeria's sustainability disclosure guidelines taking effect, ESG reporting has shifted from aspiration to obligation. Here's how to build a credible, investor-ready ESG programme.",
    image: "https://picsum.photos/seed/esg-nigeria/800/450",
    featured: false,
  },
  {
    slug: "corporate-governance-red-flags",
    title: "Corporate Governance Red Flags: What Boards Miss",
    category: "Advisory",
    date: "October 14, 2025",
    readTime: "8 min read",
    author: "Abdul-Matin Gbadegesin",
    authorTitle: "Partner, Advisory",
    excerpt:
      "Our governance reviews consistently reveal the same blind spots — weak board oversight, conflicted audit committees, and unclear delegation frameworks. This article addresses them head-on.",
    image: "https://picsum.photos/seed/governance/800/450",
    featured: false,
  },
  {
    slug: "firs-audit-preparation",
    title: "FIRS Audit: A Practical Preparation Guide for Nigerian Businesses",
    category: "Tax",
    date: "September 2, 2025",
    readTime: "10 min read",
    author: "Adeoye H. Abiola",
    authorTitle: "Partner, Tax",
    excerpt:
      "A FIRS desk or field audit notice can be unsettling. Our tax team outlines exactly what to expect, what records to compile, and how to engage the process professionally.",
    image: "https://picsum.photos/seed/firs-audit/800/450",
    featured: false,
  },
  {
    slug: "forensic-accounting-nigeria",
    title: "The Rise of Forensic Accounting in Nigeria",
    category: "Audit & Assurance",
    date: "August 19, 2025",
    readTime: "7 min read",
    author: "Oladimeji Lawal",
    authorTitle: "Managing Partner",
    excerpt:
      "Fraud losses in Nigerian businesses reached a historic high in 2024. Forensic accounting is no longer a reactive measure — discover why proactive forensic reviews are becoming standard practice.",
    image: "https://picsum.photos/seed/forensic-accounting/800/450",
    featured: false,
  },
  {
    slug: "business-resilience-volatile-markets",
    title: "Building Resilient Business Processes in Volatile Markets",
    category: "Advisory",
    date: "July 7, 2025",
    readTime: "6 min read",
    author: "Abdul-Matin Gbadegesin",
    authorTitle: "Partner, Advisory",
    excerpt:
      "Currency volatility, energy costs, and supply chain disruptions define the Nigerian operating environment. We outline the process design principles that separate resilient businesses from the rest.",
    image: "https://picsum.photos/seed/resilience/800/450",
    featured: false,
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  Tax: "bg-warm-orange/10 text-warm-orange border-warm-orange/25",
  "Audit & Assurance": "bg-cyan/10 text-cyan border-cyan/25",
  Advisory: "bg-orange/10 text-orange border-orange/25",
  Technology: "bg-amber/10 text-amber border-amber/25",
};
