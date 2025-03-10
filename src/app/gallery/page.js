import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Gallery from '../components/gallery';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introductory Image */}
       

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Arts Gallery</h2>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
          Explore the stunning artwork from previous festivals and get inspired by the creativity on display.
        </p>
        <p className="text-md text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          From paintings to sculptures, our gallery showcases a variety of artistic expressions. Discover the brilliance of our artists and immerse yourself in the beauty of their work.
        </p>

        <Gallery />

        
      </div>
    </section>
  );
};

export default GallerySection;
