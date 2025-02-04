"use client"


import Link from 'next/link';
import Footer from '../component/Footer';
import Header from '../component/Header';


export default function Contact() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center text-center p-4">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
          <p className="mt-2 text-lg text-gray-600">Lets work together! Reach out to me via the form below.</p>
          <form className="mt-6 bg-white p-6 rounded-lg shadow-lg w-80">
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded mb-3" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded mb-3" />
            <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded mb-3"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
          <Link href="/" className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
