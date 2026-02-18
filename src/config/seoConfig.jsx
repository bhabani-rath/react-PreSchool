// ═══════════════════════════════════════════════════════════
// SEO HEAD COMPONENT
// Uses React 19 native <title> and <meta> support
// No react-helmet-async needed!
// ═══════════════════════════════════════════════════════════

import { siteConfig } from "@/config/siteConfig";

// ═══════════════════════════════════════════════════════════
// STRUCTURED DATA (JSON-LD)
// ═══════════════════════════════════════════════════════════

const { schoolName, phone, email, address, social, hours } = siteConfig;
const fullAddress = `${address.line1}, ${address.line2}, ${address.city}, ${address.state} ${address.pincode}`;

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `${schoolName} Pre-School`,
    url: typeof window !== "undefined" ? window.location.origin : "",
    logo: "/logo.png",
    email,
    telephone: phone[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.pincode,
      addressCountry: "IN",
    },
    sameAs: Object.values(social).filter((url) => !url.includes("wa.me")),
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: `${schoolName} Pre-School`,
    image: "/og-image.jpg",
    email,
    telephone: phone[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
// PAGE-LEVEL SEO CONFIGURATION
// ═══════════════════════════════════════════════════════════

const siteName = `${schoolName} Pre-School`;
const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

export const seoConfig = {
  home: {
    title: `${siteName} – ${siteConfig.tagline}`,
    description: `Welcome to ${siteName}, a premier preschool in ${siteConfig.address.city}. We nurture young minds with innovative teaching methods, experienced educators, and a safe learning environment.`,
    keywords: `preschool, ${siteConfig.address.city}, early childhood education, nursery school, kindergarten, ${schoolName}, playschool`,
    url: baseUrl,
    image: "/og-image.jpg",
  },
  about: {
    title: `About Us – ${siteName}`,
    description: `Learn about ${siteName}'s mission, vision, and ${siteConfig.stats.years}+ years of excellence in early childhood education in ${siteConfig.address.city}.`,
    keywords: `about ${schoolName}, preschool history, teaching methodology, our team`,
    url: `${baseUrl}/about`,
    image: "/og-image.jpg",
  },
  programs: {
    title: `Our Programs – ${siteName}`,
    description: `Explore ${siteName}'s ${siteConfig.stats.programs} specialized programs designed for children of all ages. From playgroup to senior KG, we offer holistic development.`,
    keywords: `preschool programs, playgroup, nursery, junior KG, senior KG, curriculum`,
    url: `${baseUrl}/programs`,
    image: "/og-image.jpg",
  },
  admissions: {
    title: `Admissions – ${siteName}`,
    description: `Apply for admission at ${siteName}. Learn about our admission process, eligibility criteria, fee structure, and required documents.`,
    keywords: `preschool admissions, enrollment, fee structure, apply now, ${siteConfig.address.city}`,
    url: `${baseUrl}/admissions`,
    image: "/og-image.jpg",
  },
  gallery: {
    title: `Gallery & Events – ${siteName}`,
    description: `Browse photos and videos from ${siteName}'s events, activities, and campus life. See our vibrant learning environment in action.`,
    keywords: `preschool gallery, school events, campus photos, activities`,
    url: `${baseUrl}/gallery`,
    image: "/og-image.jpg",
  },
  blog: {
    title: `Blog – ${siteName}`,
    description: `Read expert articles on parenting, early childhood development, and education tips from ${siteName}'s team of educators.`,
    keywords: `parenting blog, early childhood education, preschool tips, child development`,
    url: `${baseUrl}/blog`,
    image: "/og-image.jpg",
  },
  contact: {
    title: `Contact Us – ${siteName}`,
    description: `Get in touch with ${siteName}. Visit us at ${fullAddress} or call ${siteConfig.phone[0]}. We'd love to hear from you!`,
    keywords: `contact ${schoolName}, preschool address, phone number, location, ${siteConfig.address.city}`,
    url: `${baseUrl}/contact`,
    image: "/og-image.jpg",
  },
  notFound: {
    title: `Page Not Found – ${siteName}`,
    description: `The page you're looking for doesn't exist. Navigate back to ${siteName} to explore our programs and services.`,
  },
};

// ═══════════════════════════════════════════════════════════
// DYNAMIC SEO HELPERS
// ═══════════════════════════════════════════════════════════

export const getBlogPostSeo = (post) => ({
  title: `${post.title} – ${siteName}`,
  description: post.excerpt || post.description || "",
  keywords: post.tags ? post.tags.join(", ") : "",
  url: `${baseUrl}/blog/${post.slug}`,
  image: post.image || "/og-image.jpg",
  type: "article",
  author: post.author || "",
  publishedDate: post.date || post.publishedDate || "",
});

// ═══════════════════════════════════════════════════════════
// SEO HEAD COMPONENT
// ═══════════════════════════════════════════════════════════

const SEOHead = ({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
  author,
  publishedDate,
  noIndex = false,
}) => {
  const siteName = `${siteConfig.schoolName} Pre-School`;
  const defaultImage = "/og-image.jpg";

  return (
    <>
      {/* ── Basic Meta Tags ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph Meta Tags ── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card Meta Tags ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* ── Article Meta (for blog posts) ── */}
      {type === "article" && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          {author && <meta property="article:author" content={author} />}
        </>
      )}

      {/* ── Canonical URL ── */}
      {url && <link rel="canonical" href={url} />}
    </>
  );
};

export default SEOHead;

// ═══════════════════════════════════════════════════════════
// STRUCTURED DATA COMPONENT (JSON-LD)
// Add to RootLayout for site-wide schema
// ═══════════════════════════════════════════════════════════

export const StructuredDataScript = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.localBusiness),
        }}
      />
    </>
  );
};