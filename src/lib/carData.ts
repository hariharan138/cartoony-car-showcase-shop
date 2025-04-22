
// Car data model with 3D model information
export interface Car {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: {
    topSpeed: string;
    acceleration: string;
    engine: string;
    transmission: string;
  };
  color: string;
  modelUrl: string; // URL to the 3D model
  thumbnailUrl: string;
  sketchfabId: string; // Sketchfab model ID
}

// Sample car data
export const carData: Car[] = [
  {
    id: "1",
    name: "Cartoon Sport Car",
    price: 6499,
    description: "A sleek and stylish sporty car with aerodynamic design. Perfect for animation projects or racing games.",
    features: ["Low-poly design", "Fully textured", "Animation-ready", "Multiple color options"],
    specifications: {
      topSpeed: "220 km/h (virtual)",
      acceleration: "0-100 in 4.5s (virtual)",
      engine: "V8 (animated)",
      transmission: "6-speed (simulated)"
    },
    color: "Red",
    modelUrl: "https://sketchfab.com/models/88b89d3074cb4946a353ab990d1ff6a2/embed",
    thumbnailUrl: "/car-red-thumbnail.jpg", 
    sketchfabId: "88b89d3074cb4946a353ab990d1ff6a2"
  },
  {
    id: "2",
    name: "Cartoon SUV",
    price: 7299,
    description: "A robust and spacious SUV design with family-friendly features. Ideal for adventure games or animated shorts.",
    features: ["Detailed interior", "Opening doors", "Roof rack", "High clearance"],
    specifications: {
      topSpeed: "180 km/h (virtual)",
      acceleration: "0-100 in 7.2s (virtual)",
      engine: "V6 (animated)",
      transmission: "5-speed automatic (simulated)"
    },
    color: "Blue",
    modelUrl: "https://sketchfab.com/models/d67e67fbfb034b3a9eed17e633301416/embed",
    thumbnailUrl: "/car-blue-thumbnail.jpg",
    sketchfabId: "d67e67fbfb034b3a9eed17e633301416"
  },
  {
    id: "3",
    name: "Cartoon Truck",
    price: 8599,
    description: "A rugged and powerful truck model with high detail. Perfect for logistics simulations or construction games.",
    features: ["Working lights", "Detailed cargo area", "Animated suspension", "Weather effects"],
    specifications: {
      topSpeed: "160 km/h (virtual)",
      acceleration: "0-100 in 9.0s (virtual)",
      engine: "Diesel V8 (animated)",
      transmission: "8-speed manual (simulated)"
    },
    color: "Green",
    modelUrl: "https://sketchfab.com/models/a30c221220c84971a65a57ff2eb2a6bb/embed",
    thumbnailUrl: "/car-green-thumbnail.jpg",
    sketchfabId: "a30c221220c84971a65a57ff2eb2a6bb"
  },
  {
    id: "4",
    name: "Cartoon City Car",
    price: 5299,
    description: "A compact and efficient city car with modern design. Great for urban environment simulations.",
    features: ["Eco-friendly design", "Small turning radius", "Parking assist animation", "City navigation"],
    specifications: {
      topSpeed: "160 km/h (virtual)",
      acceleration: "0-100 in 8.5s (virtual)",
      engine: "4-cylinder (animated)",
      transmission: "CVT (simulated)"
    },
    color: "Yellow",
    modelUrl: "https://sketchfab.com/models/9c47a3be918a46e5a7a5a9155f0ce830/embed",
    thumbnailUrl: "/car-yellow-thumbnail.jpg",
    sketchfabId: "9c47a3be918a46e5a7a5a9155f0ce830"
  },
  {
    id: "5",
    name: "Cartoon Vintage Car",
    price: 9899,
    description: "A classic vintage car model with nostalgic design elements. Perfect for historical games or period animations.",
    features: ["Historical accuracy", "Chrome detailing", "Leather interior", "Vintage sound effects"],
    specifications: {
      topSpeed: "120 km/h (virtual)",
      acceleration: "0-100 in 12.0s (virtual)",
      engine: "Inline-6 (animated)",
      transmission: "3-speed manual (simulated)"
    },
    color: "Black",
    modelUrl: "https://sketchfab.com/models/1c69caf85550421ab9b149d3a72e9c8f/embed", 
    thumbnailUrl: "/car-black-thumbnail.jpg",
    sketchfabId: "1c69caf85550421ab9b149d3a72e9c8f"
  }
];

// Function to initialize car data in local storage
export const initializeCarData = (): void => {
  const storedCars = localStorage.getItem('carData');
  if (!storedCars) {
    localStorage.setItem('carData', JSON.stringify(carData));
  }
};

// Function to get all cars from local storage
export const getCars = (): Car[] => {
  const storedCars = localStorage.getItem('carData');
  return storedCars ? JSON.parse(storedCars) : [];
};

// Function to get a specific car by ID
export const getCarById = (id: string): Car | undefined => {
  const cars = getCars();
  return cars.find(car => car.id === id);
};
