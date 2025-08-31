import { FaWhatsapp, FaFacebookMessenger, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-300 py-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          © {currentYear} Beerta Xamar. All Rights Reserved
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 mt-2 md:mt-0">
        <a
          href="tel:+252613174074"
          // className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition"
        >
          Developed By Bicir
        </a>
        </div>
      </div>

      {/* Floating Buttons (Fixed) */}
      <div className="fixed right-4 bottom-8 flex flex-col space-y-4">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/252613174074"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>

        {/* Messenger Icon */}
        <a
        
          href="https://www.facebook.com/profile.php?id=61560178297529"
          target="_blank"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition"
        >
          <FaFacebookMessenger className="w-6 h-6 text-white" />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+252613174074"
          className="block md:hidden w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition"
        >
          <FaPhoneAlt className="w-6 h-6 text-white" />
        </a>
      </div>
    </footer>
  );
}
