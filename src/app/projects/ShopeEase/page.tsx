import Image from "next/image";
import home1 from '../../../Assets/javahome1.png';
import product from '../../../Assets/produc-java.png';
import order from '../../../Assets/order-java.png';

const Shope = () => {
  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 text-teal-400">ShopEase Manager</h1>
        <p className="text-center text-lg max-w-3xl mx-auto mb-10 text-neutral-300">
          ShopEase Manager is a user-friendly Java desktop application designed to help shop owners efficiently manage their business operations.
          Tailored for grocery stores and similar retail businesses, this app provides an all-in-one solution for tracking and organizing supplier and inventory details.
        </p>

        {/* Key Features Section */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-amber-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li><strong className="text-teal-400">ShopEase Manager:</strong> Store and manage detailed information about suppliers, including contact details and delivery records.</li>
            <li><strong className="text-teal-400">Inventory Tracking:</strong> Keep track of stock levels, availability, and product categories.</li>
            <li><strong className="text-teal-400">Data Security:</strong> Safely store all business-critical information with local database support.</li>
            <li><strong className="text-teal-400">Ease of Use:</strong> Intuitive interface designed for non-technical users.</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-400">Benefits</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li>Simplifies the process of inventory management, saving time and effort.</li>
            <li>Reduces errors and ensures accurate record-keeping.</li>
            <li>Enhances operational efficiency and organization for shop owners.</li>
          </ul>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={home1} alt="ShopEase Home Page" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Home Dashboard</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={product} alt="Product Manager" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Product Manager</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg shadow-md">
            <Image src={order} alt="Order Management" className="rounded-md" />
            <p className="mt-2 text-center text-neutral-300">Order/Inventory Tracker</p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-zinc-800 rounded-xl p-6 md:p-10 mb-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-200">
            <li><strong>Java:</strong> Core programming language for application development.</li>
            <li><strong>JavaFX / Swing:</strong> For creating an intuitive and responsive user interface.</li>
            <li><strong>SQLite / MySQL:</strong> Local database support for data storage and retrieval.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shope;
