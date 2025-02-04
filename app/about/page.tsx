// app/about/page.tsx (About Page)

import Footer from '../component/Footer';
import Link from 'next/link';
import Header from '../component/Header';
import Image from 'next/image';


export default function About() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center text-center p-4">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center">
            <Image src="profile.jpg" alt="Your Name" className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg" />
            <h1 className="text-4xl font-bold text-gray-800 mt-4">About Me</h1>
            <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
              I am a passionate web developer specializing in modern UI/UX design and frontend development using React and Next.js. 
              I have created various projects, including a cooking website, a resume template, and this personal portfolio.
            </p>
            <Link href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
