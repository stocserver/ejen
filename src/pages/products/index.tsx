import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive range of premium food and beverage products
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Beverages */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/beverages-category.jpg"
                  alt="Beverages"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Beverages</h3>
                <p className="text-gray-600 mb-4">Premium drinks including fruit juices, tea, coffee, and soft drinks</p>
                <div className="w-12 h-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Snacks */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/snacks-category.jpg"
                  alt="Snacks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Snacks</h3>
                <p className="text-gray-600 mb-4">Delicious and healthy snack options including chips, nuts, and sweet treats</p>
                <div className="w-12 h-1 bg-green-600 rounded"></div>
              </div>
            </div>

            {/* Frozen Food */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/frozen-food-category.jpg"
                  alt="Frozen Food"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Frozen Food</h3>
                <p className="text-gray-600 mb-4">Quality frozen meals, vegetables, and seafood products</p>
                <div className="w-12 h-1 bg-purple-600 rounded"></div>
              </div>
            </div>

            {/* Packaged Food */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/packaged-food-category.jpg"
                  alt="Packaged Food"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Packaged Food</h3>
                <p className="text-gray-600 mb-4">Convenient packaged food solutions including instant foods and canned goods</p>
                <div className="w-12 h-1 bg-orange-600 rounded"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Interested in Our Products?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our product offerings and how we can meet your food and beverage needs.
          </p>
          <Link href="/contact" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}