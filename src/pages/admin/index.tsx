import { useState } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/products" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
            <p className="text-gray-600">Add, edit, or remove products from your catalog</p>
          </Link>

          <Link href="/admin/about" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Edit About Page</h2>
            <p className="text-gray-600">Update your company&apos;s about information</p>
          </Link>

          <Link href="/admin/contact" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Edit Contact Page</h2>
            <p className="text-gray-600">Manage contact information and settings</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;