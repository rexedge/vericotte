export interface Role {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export const ROLES: Role[] = [
  {
    id: "senior-audit-associate",
    title: "Senior Audit Associate",
    department: "Audit & Assurance",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Lead financial statement audits for mid-to-large clients across banking, manufacturing, and professional services. Manage engagement teams and interface directly with clients.",
    requirements: [
      "ACA/ACCA qualified or finalist",
      "3+ years in external audit",
      "Strong knowledge of IFRS and ISA",
    ],
  },
  {
    id: "tax-advisory-associate",
    title: "Tax Advisory Associate",
    department: "Tax",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Support clients with corporate tax compliance, FIRS interactions, and transfer pricing documentation. Work on multi-jurisdiction engagements across Nigeria, Kenya, and Ghana.",
    requirements: [
      "CITN or ACA (tax stream)",
      "2+ years in tax practice",
      "Familiarity with FIRS regulations",
    ],
  },
  {
    id: "business-advisory-analyst",
    title: "Business Advisory Analyst",
    department: "Advisory",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Deliver strategic consulting, business process optimization, and financial modelling to corporate clients. Work alongside senior partners on high-impact transformation projects.",
    requirements: [
      "BSc in Business, Finance, or related field",
      "1–3 years in consulting",
      "Strong Excel / PowerPoint skills",
    ],
  },
  {
    id: "technology-consulting-analyst",
    title: "Technology Consulting Analyst",
    department: "Technology",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Support digital transformation projects for clients in financial services, manufacturing, and retail. Contribute to ERP implementations, process automation, and IT audit reviews.",
    requirements: [
      "BSc in Computer Science or Engineering",
      "Knowledge of ERP systems (SAP, Oracle)",
      "Analytical and problem-solving mindset",
    ],
  },
  {
    id: "financial-advisory-associate",
    title: "Financial Advisory Associate",
    department: "Advisory",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Conduct due diligence, financial modelling, and valuation work for M&A transactions, fundraising, and corporate restructuring mandates.",
    requirements: [
      "ACA / CFA or active pursuit",
      "2+ years in finance or advisory",
      "Strong financial modelling skills",
    ],
  },
  {
    id: "audit-intern",
    title: "Audit & Assurance Intern",
    department: "Audit & Assurance",
    type: "NYSC / Internship",
    location: "Lagos, Nigeria",
    description:
      "Gain hands-on exposure to external audit engagements across multiple industries. Ideal for NYSC members and recent graduates building a career in professional services.",
    requirements: [
      "BSc Accounting, Finance, or Economics",
      "Good academic standing",
      "Eagerness to learn in a fast-paced environment",
    ],
  },
  {
    id: "marketing-communications",
    title: "Marketing & Communications Associate",
    department: "Business Development",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Drive Vericotte's brand visibility through content creation, social media management, event coordination, and client communications.",
    requirements: [
      "BSc Mass Communication, Marketing, or related",
      "2+ years in B2B marketing",
      "Strong writing and design sensibility",
    ],
  },
];

export const DEPT_ACCENT: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "Audit & Assurance": {
    bg: "bg-cyan/10",
    text: "text-cyan",
    border: "border-cyan/25",
  },
  Tax: {
    bg: "bg-warm-orange/10",
    text: "text-warm-orange",
    border: "border-warm-orange/25",
  },
  Advisory: {
    bg: "bg-orange/10",
    text: "text-orange",
    border: "border-orange/25",
  },
  Technology: {
    bg: "bg-amber/10",
    text: "text-amber",
    border: "border-amber/25",
  },
  "Business Development": {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/25",
  },
};

export const TYPE_ACCENT: Record<string, string> = {
  "Full-time": "bg-navy/8 text-navy",
  "NYSC / Internship": "bg-teal/10 text-teal",
};
