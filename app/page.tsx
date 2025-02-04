import Footer from './component/Footer';
import Header from './component/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-center p-8">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg p-8 ">
          <div className="flex flex-col items-center">
            <img src="/profile.jpg" alt="Your Name" className="w-40 h-40 rounded-full border-4 border-blue-600 mb-4 " />
            <h1 className="text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            <p className="text-gray-600 mt-2 text-lg">Frontend Developer | UI/UX Designer</p>
            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">About Me</Link>
              <Link href="/contact" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 ">Contact</Link>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Projects</h2>
            <div className="mt-4">
              {/* Project Card 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 hover:scale-105">
                <img src="/22.jpg" alt="Cooking Website" className="w-full h-72 object-cover rounded-lg mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">Food Recipe Template</h3>
                <p className="text-gray-600">A beautiful template for sharing delicious food recipes.</p>
              </div>
              {/* Project Card 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 hover:scale-105">
                <img src="/33.jpg" alt="Resume Template" className="w-full h-72 rounded-lg mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">Packages</h3>
                <p className="text-gray-600">A modern and customizable Packages template to showcase my skills.</p>
              </div>
              {/* Project Card 3 */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <img src="/44.jpg" alt="Personal Portfolio" className="w-full h-72  rounded-lg mb-2 hover:scale-105" />
                <h3 className="text-lg font-semibold mt-2 text-gray-800">Personal Portfolio</h3>
                <p className="text-gray-600">A modern and customizable Portfolio template to showcase my skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
