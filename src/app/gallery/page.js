import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Gallery from '../components/gallery';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introductory Image */}
        <div className="flex justify-center mb-8">
          <Image src="/gallery-intro.jpg" alt="Gallery Intro" width={800} height={400} className="rounded-lg shadow-md" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Arts Gallery</h2>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
          Explore the stunning artwork from previous festivals and get inspired by the creativity on display.
        </p>
        <p className="text-md text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          From paintings to sculptures, our gallery showcases a variety of artistic expressions. Discover the brilliance of our artists and immerse yourself in the beauty of their work.
        </p>

        <Gallery />

        <div className="text-center mt-12">
          <Link
            href="#"
            className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            View All Artwork <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
