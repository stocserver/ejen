import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">About EJEN</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading the food and beverage industry with excellence and innovation across Taiwan and Vietnam
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-8">
                EJEN Company Limited has established itself as a premier food and beverage company, 
                serving customers across Taiwan and Vietnam with dedication to quality and excellence.
              </p>
              <p className="mb-8">
                Our commitment to providing the finest beverages, snacks, frozen food, and packaged food 
                products has made us a trusted partner for businesses and consumers alike. We pride ourselves 
                on maintaining the highest standards of quality while delivering innovative solutions that meet 
                the evolving needs of our markets.
              </p>
              <p>
                With strategic locations in both Taiwan and Vietnam, we are uniquely positioned to serve 
                the growing demand for premium food and beverage products in the region. Our experienced 
                leadership team, including our Vice Presidents Ivy Chuang and Hong Dao Ngo, brings decades 
                of industry expertise to ensure our continued growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">IC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ivy Chuang</h3>
              <p className="text-red-600 font-semibold mb-4">Vice President</p>
              <p className="text-gray-600">Leading our Taiwan operations with expertise in market development and strategic partnerships.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">HN</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Hong Dao Ngo</h3>
              <p className="text-red-600 font-semibold mb-4">Vice President</p>
              <p className="text-gray-600">Overseeing our Vietnam operations and driving expansion in the Southeast Asian market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in all our products and services.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-gray-600">Our customers&apos; success is our priority in everything we do.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to meet evolving market demands.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}