
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Sofas, coffee tables, and entertainment units"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Beds, wardrobes, and nightstands"
  },
  {
    id: "dining",
    name: "Dining Room",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    description: "Dining tables, chairs, and buffets"
  }
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Browse by Category</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/products?category=${category.id}`}
            className="transform transition-transform hover:scale-105"
          >
            <Card className="overflow-hidden h-[400px] relative group">
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-200">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
