import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaSpotify, FaSoundcloud, FaFacebook, FaWikipediaW } from 'react-icons/fa';
import { SiAudiomack } from 'react-icons/si';
import picone from "../../assets/picone.jpeg"

const HeroSection = () => {
  return (
    <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-6 lg:flex-row flex-col">
        {/* Text Content Section */}
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Saminem4lf</span>
            <span className="block text-indigo-600 xl:inline">Music Journey</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Saminem4lf started his music journey in 2021. He primarily performs in the genres of Afrobeat, Hip-Hop, and
            R&B. He is known for his unique musical style and deep lyrical compositions.
          </p>
          {/* Button Section */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/get-started"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </Link>
            </div>
            {/* <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="/live-demo"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </Link>
            </div> */}
          </div>
          {/* Social Media Icons */}
          <div className="mt-8 flex space-x-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
            <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
            <Link href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
              <FaSoundcloud className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
            <Link href="https://audiomack.com" target="_blank" rel="noopener noreferrer">
              <SiAudiomack className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
            <Link href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">
              <FaWikipediaW className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-800 hover:text-indigo-600" />
            </Link>
          </div>
          {/* End of Button Section */}
        </div>

        {/* Image Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <Image
            src={picone} alt="4"
            width={800} // Increased width
            height={600} // Increased height
            className="h-72 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          />
        </div>
        {/* End of Image Section */}
      </div>
    </section>
  );
};

export default HeroSection;