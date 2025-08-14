import Head from 'next/head';
import Header from '../../components/Header';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'trump-2025-tariffs-food-supply-chain',
    title: 'Trump\'s 2025 Tariffs: Disrupting North American Food Supply Chains',
    excerpt: 'Analysis of how Trump\'s 2025 tariffs are causing chaos in US-Canada food supply chains, affecting farmers, distributors, and consumers.',
    date: '2025-01-20',
    category: 'Trade Policy',
    readTime: '8 min read',
    keywords: 'Trump tariffs 2025, food supply chain disruption, US Canada trade war'
  },
  {
    slug: 'agricultural-trade-war-impact-2025',
    title: '2025 Agricultural Trade War: Impact on Food Prices and Supply Chains',
    excerpt: 'Comprehensive analysis of how the 2025 US-Canada trade war is affecting food prices, agricultural exports, and supply chain operations.',
    date: '2025-01-22',
    category: 'Market Analysis',
    readTime: '10 min read',
    keywords: 'agricultural trade war 2025, food price inflation, supply chain disruption'
  },
  {
    slug: 'food-distribution-trends-2024',
    title: 'Top Food Distribution Trends Shaping 2024',
    excerpt: 'Discover the latest trends in food distribution, from cold chain innovations to sustainable packaging solutions.',
    date: '2024-01-15',
    category: 'Industry Insights',
    readTime: '5 min read',
    keywords: 'food distribution, supply chain, cold chain, food logistics'
  },
  {
    slug: 'supply-chain-optimization-strategies',
    title: 'Supply Chain Optimization Strategies for Food Distributors',
    excerpt: 'Learn proven strategies to optimize your food supply chain for efficiency, cost reduction, and quality preservation.',
    date: '2024-01-10',
    category: 'Best Practices',
    readTime: '7 min read',
    keywords: 'supply chain optimization, food distribution, logistics efficiency'
  },
  {
    slug: 'cold-chain-management-best-practices',
    title: 'Cold Chain Management: Best Practices for Food Safety',
    excerpt: 'Essential guidelines for maintaining food safety and quality throughout the cold chain distribution process.',
    date: '2024-01-05',
    category: 'Food Safety',
    readTime: '6 min read',
    keywords: 'cold chain management, food safety, temperature control, food distribution'
  }
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Food Distribution Blog | Industry Insights & Best Practices | EJEN</title>
        <meta name="description" content="Expert insights on food distribution, supply chain management, and industry trends. Learn from EJEN's experience in North American and Asian markets." />
        <meta name="keywords" content="food distribution blog, supply chain insights, food logistics, cold chain management, food industry trends, distribution strategies" />
        <meta property="og:title" content="Food Distribution Blog | Industry Insights & Best Practices | EJEN" />
        <meta property="og:description" content="Expert insights on food distribution, supply chain management, and industry trends from EJEN." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Distribution Blog | EJEN" />
        <meta name="twitter:description" content="Expert insights on food distribution and supply chain management." />
        <link rel="canonical" href="https://ejen.com/blog" />
        
        {/* Hidden SEO Keywords */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EJEN Food Distribution" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "EJEN Food Distribution Blog",
              "description": "Expert insights on food distribution, supply chain management, and industry trends",
              "url": "https://ejen.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "EJEN",
                "url": "https://ejen.com"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Industry Insights & Best Practices
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert knowledge on food distribution, supply chain optimization, and industry trends
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <time className="text-gray-500 text-sm">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                      
                      {/* Hidden SEO Keywords */}
                      <div className="sr-only">
                        Keywords: {post.keywords}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}