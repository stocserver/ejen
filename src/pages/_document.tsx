import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="EJEN Food Distribution" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Hidden SEO Keywords for Global Site */}
        <meta name="keywords" content="food distribution, supply chain management, cold chain logistics, food safety, North America food distributor, Asia food distribution, retail food supply, restaurant supply chain, food distributor Canada, food distributor USA, food distributor Taiwan, food distributor Vietnam" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EJEN Food Distribution",
              "url": "https://ejen.com",
              "description": "Leading food distribution company serving North America and Asia with premium supply chain solutions",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "North America"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://ejen.com/contact"
              },
              "sameAs": [
                "https://ejen.com/about",
                "https://ejen.com/clients",
                "https://ejen.com/products",
                "https://ejen.com/blog"
              ]
            })
          }}
        />
      </Head>
      <body className="antialiased">
        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h1>EJEN - Premium Food Distribution Services</h1>
          <p>Leading food distributor serving retail chains, restaurant groups, and food distributors across North America and Asia. Specializing in cold chain logistics, supply chain optimization, and food safety compliance.</p>
        </div>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
