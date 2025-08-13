import Header from '../../../components/Header';

const ProductsAdmin = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Add New Product
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Product Name</th>
                <th className="text-left py-4">Description</th>
                <th className="text-left py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Product list will go here */}
              <tr className="text-gray-600">
                <td className="py-4">No products yet</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProductsAdmin;