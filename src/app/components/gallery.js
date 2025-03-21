"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery/arts1.jpg", alt: "Artwork 1", category: "Painting" },
  { id: 2, src: "/gallery/arts2.jpg", alt: "Artwork 2", category: "Sculpture" },
  { id: 3, src: "/gallery/arts3.jpg", alt: "Artwork 3", category: "Photography" },
  { id: 4, src: "/gallery/arts7.jpg", alt: "Artwork 4", category: "Digital Art" },
  { id: 5, src: "/gallery/arts5.jpg", alt: "Artwork 5", category: "Traditional" },
  { id: 6, src: "/gallery/arts6.jpg", alt: "Artwork 6", category: "Mixed Media" },
  { id: 7, src: "/gallery/arts17.jpg", alt: "Artwork 7", category: "Mixed Media" },
  { id: 9, src: "/gallery/arts9.jpg", alt: "Artwork 9", category: "Mixed Media" },
  { id: 10, src: "/gallery/arts10.jpg", alt: "Artwork 10", category: "Mixed Media" },
  { id: 11, src: "/gallery/arts11.jpg", alt: "Artwork 11", category: "Mixed Media" },
  { id: 12, src: "/gallery/arts12.jpg", alt: "Artwork 11", category: "Mixed Media" },
  { id: 13, src: "/gallery/arts13.jpg", alt: "Artwork 11", category: "Mixed Media" },
  { id: 14, src: "/gallery/arts14.jpg", alt: "Artwork 11", category: "Mixed Media" },
  { id: 15, src: "/gallery/arts15.jpg", alt: "Artwork 11", category: "Mixed Media" },
  { id: 16, src: "/gallery/arts16.jpg", alt: "Artwork 11", category: "Mixed Media" },


]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (id) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow-sm cursor-pointer group"
            onClick={() => openLightbox(item.id)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <Image
              src={galleryItems.find((item) => item.id === selectedImage)?.src || ""}
              alt={galleryItems.find((item) => item.id === selectedImage)?.alt || ""}
              width={1200}
              height={800}
              className="object-contain mx-auto max-h-[80vh]"
            />

            
          </div>
        </div>
      )}
    </div>
  )
}