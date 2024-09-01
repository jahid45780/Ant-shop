const Footer = () => {
    return (
        <div>
  <footer className="bg-gray-200  text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Shop Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Ant-Shop</h2>
          <p className="mb-4">Your go-to shop for all things fashion and lifestyle.</p>
          <p>123 Fashion St.</p>
          <p>New York, NY 10001</p>
          <p>Email: support@antshop.com</p>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Customer Service</h2>
          <ul>
            <li><a href="#" className="hover:underline">Help & Contact</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">About Us</h2>
          <ul>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Subscribe</h2>
          <p className="mb-4">Get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none"
            />
            <button className="p-2 bg-blue-600 rounded-r text-black hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-black">
        <p>&copy; 2024 Ant-Shop. All Rights Reserved.</p>
      </div>
    </footer>

        </div>
    );
};

export default Footer;