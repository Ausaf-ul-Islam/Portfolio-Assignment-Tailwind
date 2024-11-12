import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-gradient-to-r from-[#1C2B35] to-[#3C4C58] py-16 px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#F39C12] mb-8">Get in Touch</h2>
        
        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-[#283743] p-8 shadow-md rounded-lg">
            <form action="https://formspree.io/f/{your-form-id}" method="POST" className="space-y-6">
              <div>
                <label className="block text-[#F39C12] font-semibold">Name</label>
                <input type="text" name="name" required className="w-full p-3 border border-gray-400 rounded-md bg-[#1C2B35] text-white" />
              </div>
              <div>
                <label className="block text-[#F39C12] font-semibold">Email</label>
                <input type="email" name="email" required className="w-full p-3 border border-gray-400 rounded-md bg-[#1C2B35] text-white" />
              </div>
              <div>
                <label className="block text-[#F39C12] font-semibold">Message</label>
                <textarea name="message" required className="w-full p-3 border border-gray-400 rounded-md bg-[#1C2B35] text-white h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#F39C12] text-white font-bold p-3 rounded-md hover:bg-yellow-600">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col  space-y-8  ">
            <div className="flex items-center space-x-4">
              <FaPhone className=" text-[#F39C12] text-3xl " />
              <div>
                <h4 className="text-lg font-semibold text-[#F39C12]">Phone</h4>
                <p className="text-gray-300">+123 456 789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#F39C12] text-3xl" />
              <div>
                <h4 className="text-lg font-semibold text-[#F39C12]">Email</h4>
                <p className="text-gray-300">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#F39C12] text-3xl" />
              <div>
                <h4 className="text-lg font-semibold text-[#F39C12]">Address</h4>
                <p className="text-gray-300">123 Main St, Anytown, USA</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-[#F39C12] text-3xl hover:text-yellow-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-[#F39C12] text-3xl hover:text-yellow-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#F39C12] text-3xl hover:text-yellow-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#F39C12] text-3xl hover:text-yellow-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5313906350534!2d67.19876541059422!3d24.845694277846896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3309a1285ed8b%3A0xf6996718975e5724!2s89%20Landhi%20Rd%2C%20Sector%2037%20B%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731216132594!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: "2px solid #F39C12", borderRadius: "10px" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
