'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CallToAction() {
  return (
    <section id='contact' className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Transform Your Space Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover our extensive range of premium laminates and elevate your interior design projects.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
