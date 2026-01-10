// Structured Data (JSON-LD) helpers for SEO

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.gr8glazerefinishing.com",
  "name": "Gr8 Glaze Refinishing",
  "image": "https://www.gr8glazerefinishing.com/gr8glazelogo.png",
  "logo": "https://www.gr8glazerefinishing.com/gr8glazelogo.png",
  "url": "https://www.gr8glazerefinishing.com",
  "telephone": "+13238551752",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Fernando Valley",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.2800",
    "longitude": "-118.4400"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Los Angeles"
    },
    {
      "@type": "City",
      "name": "San Fernando Valley"
    },
    {
      "@type": "City",
      "name": "Burbank"
    },
    {
      "@type": "City",
      "name": "Glendale"
    },
    {
      "@type": "City",
      "name": "Pasadena"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "34.2800",
      "longitude": "-118.4400"
    },
    "geoRadius": {
      "@type": "Distance",
      "name": "LA Area"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Refinishing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathtub Refinishing",
          "description": "Professional bathtub refinishing and reglazing services for cast iron, fiberglass, and acrylic tubs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tile Resurfacing",
          "description": "Tile refinishing and resurfacing services for bathrooms and kitchens"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Color Changes",
          "description": "Transform the color of tubs and tiles to update your space"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Refinishing",
          "description": "Commercial property refinishing solutions"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/gr8_glaze_refinishing_inc/",
    "https://www.google.com/maps/place/Gr8+Glaze+Refinishing+INC./@34.2357703,-118.9515784,9z/data=!3m1!4b1!4m6!3m5!1s0x492b93995576769:0x7fafbc128bda681!8m2!3d34.2363994!4d-118.2921706!16s%2Fg%2F11xmbsmd1l?entry=ttu",
    "https://www.yelp.com/biz/gr8-glaze-refinishing-san-fernando-valley"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "5"
  }
});

export const getServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Gr8 Glaze Refinishing",
    "telephone": "+13238551752"
  },
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles"
  },
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  })
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gr8 Glaze Refinishing",
  "url": "https://www.gr8glazerefinishing.com",
  "logo": "https://www.gr8glazerefinishing.com/gr8glazelogo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+13238551752",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.instagram.com/gr8_glaze_refinishing_inc/",
    "https://www.google.com/maps/place/Gr8+Glaze+Refinishing+INC./@34.2357703,-118.9515784,9z/data=!3m1!4b1!4m6!3m5!1s0x492b93995576769:0x7fafbc128bda681!8m2!3d34.2363994!4d-118.2921706!16s%2Fg%2F11xmbsmd1l?entry=ttu",
    "https://www.yelp.com/biz/gr8-glaze-refinishing-san-fernando-valley"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Gr8 Glaze Refinishing",
  "url": "https://www.gr8glazerefinishing.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.gr8glazerefinishing.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

export const getAggregateRatingSchema = (ratingValue: number, reviewCount: number) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gr8 Glaze Refinishing",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": ratingValue,
    "reviewCount": reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

