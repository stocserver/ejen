import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with our team to discuss your food and beverage needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Taiwan Office */}
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Taiwan Office
                </h3>
                <div className="space-y-3 text-gray-600 ml-14">
                  <p><strong className="text-gray-800">Contact:</strong> Ivy Chuang, Vice President</p>
                  <p><strong className="text-gray-800">Address:</strong> 6F Sect 1. Taiwan Blvd. Taichung</p>
                  <p><strong className="text-gray-800">Phone:</strong> +886-912-621-915</p>
                  <p><strong className="text-gray-800">Email:</strong> poisonivy731@gmail.com</p>
                </div>
              </div>

              {/* Vietnam Office */}
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Vietnam Office
                </h3>
                <div className="space-y-3 text-gray-600 ml-14">
                  <p><strong className="text-gray-800">Contact:</strong> Hong Dao Ngo, Vice President</p>
                  <p><strong className="text-gray-800">Address:</strong> 36/27/48 BUI TU TOAN Street, AN LAC Ward, HO CHI MINH City</p>
                  <p><strong className="text-gray-800">Phone:</strong> +84-906-151-095</p>
                  <p><strong className="text-gray-800">Email:</strong> hongdaongo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}