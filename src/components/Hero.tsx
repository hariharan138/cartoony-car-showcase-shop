
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Transform Your Space",
      subtitle: "Discover Elegant Living Room Collections",
    },
    {
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      title: "Sleep in Style",
      subtitle: "Premium Bedroom Furniture",
    },
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      title: "Dine with Class",
      subtitle: "Modern Dining Room Sets",
    },
  ];

  return (
    <div className="relative min-h-[90vh]">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-[90vh] flex items-center">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                
                <div className="container mx-auto px-4 z-10">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-100">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4 animate-fade-in delay-200">
                      <Button
                        asChild
                        size="lg"
                        className="text-lg px-8 group hover:scale-105 transition-transform"
                      >
                        <Link to="/products">
                          Shop Now
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 bg-white/10 hover:bg-white/20"
                      >
                        <Link to="/categories">Browse Categories</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </div>
  );
};
