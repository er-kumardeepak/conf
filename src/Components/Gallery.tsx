import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import whatsappImage163158 from "../assets/WhatsApp Image 2026-04-02 at 16.31.58.jpeg";
import whatsappImage163159 from "../assets/WhatsApp Image 2026-04-02 at 16.31.59.jpeg";
import whatsappImage1631593 from "../assets/WhatsApp Image 2026-04-02 at 16.31.593.jpeg";
import whatsappImage16315888 from "../assets/WhatsApp Image 2026-04-02 at 16.31.5888.jpeg";
import whatsappImage1631 from "../assets/WhatsApp Image 2026-04-02 at 16.31.jpeg";
import whatsappImage163200 from "../assets/WhatsApp Image 2026-04-02 at 16.32.00.jpeg";
import whatsappImage1632007 from "../assets/WhatsApp Image 2026-04-02 at 16.32.007.jpeg";
import whatsappImage163200789 from "../assets/WhatsApp Image 2026-04-02 at 16.32.00789.jpeg";
import whatsappImage16320188888888 from "../assets/WhatsApp Image 2026-04-02 at 16.32.0188888888.jpeg";
import whatsappImage1632 from "../assets/WhatsApp Image 2026-04-02 at 16.32.jpeg";

const publicImage = (path: string) =>
  `${import.meta.env.BASE_URL}${encodeURI(path.replace(/^\/+/, ""))}`;

const galleryByYear: Record<string, string[]> = {
  "2025": [
    publicImage("All 2025 ICAC2N Images/unnamed.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed (1).jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed3.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed4.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed5.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed6.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed7.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed8.jpg"),
    publicImage("All 2025 ICAC2N Images/unnamed9.jpg"),
  
    whatsappImage163158,
    whatsappImage163159,
    whatsappImage1631593,
    whatsappImage16315888,
    whatsappImage1631,
    whatsappImage163200,
    whatsappImage1632007,
    whatsappImage163200789,
    whatsappImage16320188888888,
    whatsappImage1632,
    ],
  "2026": [
  ],
};

interface GalleryImageProps {
  image: string;
  selectedYear: string;
  index: number;
  onSelect: (image: string) => void;
}

const GalleryImage = ({ image, selectedYear, index, onSelect }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          observer.unobserve(img);
        }
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <button
      key={`${selectedYear}-${index}`}
      type="button"
      onClick={() => onSelect(image)}
      className="overflow-hidden rounded-md border border-slate-200 shadow-sm bg-white"
    >
      <div className="relative w-full h-[260px] sm:h-[280px] bg-slate-100">
        <img
          ref={imgRef}
          data-src={image}
          alt={`ICAC2N ${selectedYear} gallery image ${index + 1}`}
          className={`w-full h-full object-cover brightness-150 hover:scale-105 transition-transform duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
        )}
      </div>
    </button>
  );
};

const Gallery = () => {
  const { year } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleSelectImage = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const selectedYear = useMemo(() => {
    if (year && galleryByYear[year]) {
      return year;
    }
    return "2025";
  }, [year]);

  const images = galleryByYear[selectedYear];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="w-full py-6">
      <div className="w-full px-2 sm:px-6 lg:px-12 my-8">
        <div className="mb-8">
          <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings text-2xl mb-4 leading-tight">
            ICAC2N Gallery
          </h1>
          <p className="text-[16px] text-slate-700">
            Year: <span className="font-semibold text-red-900">{selectedYear}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryImage
              key={`${selectedYear}-${index}`}
              image={image}
              selectedYear={selectedYear}
              index={index}
              onSelect={handleSelectImage}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close full image view"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/95 text-red-900 text-xl leading-none shadow-md"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt={`ICAC2N ${selectedYear} full image`}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-md"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
