import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// Sample gallery data - you can easily add more images here
const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    alt: "Emergency Relief Distribution - Providing food packages to families in need",
    title: "Emergency Relief Distribution",
    description: "Distributing essential food packages to families affected by recent floods in Karachi."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    alt: "Education Support Program - Children receiving school supplies",
    title: "Education Support Program", 
    description: "Providing school supplies and uniforms to underprivileged children in Lahore."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    alt: "Medical Camp - Free healthcare services",
    title: "Free Medical Camp",
    description: "Organizing free medical checkups and treatment in rural areas of Punjab."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
    alt: "Community Development - Building water wells",
    title: "Clean Water Initiative",
    description: "Installing clean water pumps in underserved communities in Sindh."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1594213140031-e249dc2b727a?w=800&h=600&fit=crop",
    alt: "Ramadan Food Drive - Iftar distribution",
    title: "Ramadan Food Drive",
    description: "Organizing daily Iftar meals for underprivileged families during Ramadan."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1597804308160-0adfc8b808e7?w=800&h=600&fit=crop",
    alt: "Winter Clothing Distribution - Warm clothes for the needy",
    title: "Winter Relief Campaign",
    description: "Distributing warm clothing and blankets to homeless families in Islamabad."
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (image: typeof galleryData[0], index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryData.length;
    setSelectedImage(galleryData[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedImage(galleryData[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground">
              Our Work in Pictures
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Witness the beautiful moments of compassion and hope as we continue 
              her legacy of kindness across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              Moments of Impact
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Each photograph tells a story of hope, compassion, and the continuing 
              legacy of love that drives our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {galleryData.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image, index)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square md:aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 md:w-12 md:h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-semibold text-primary text-sm md:text-base lg:text-lg mb-2">
                      {image.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[60vh] object-contain"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              Be Part of Our Next Story
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Your support helps us create more moments like these. Join us in continuing 
              her beautiful legacy of compassion and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold">
                Support Our Work
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;