
// Furniture data model with images and 3D model information
export interface Furniture {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    warranty: string;
  };
  color: string;
  modelUrl: string; // URL to the 3D model
  imageUrl: string; // Main product image
  thumbnailUrl: string;
  sketchfabId: string; // Sketchfab model ID
}

// Sample furniture data
export const furnitureData: Furniture[] = [
  {
    id: "1",
    name: "Modern Lounge Chair",
    price: 12499,
    description: "A sleek and comfortable lounge chair with modern design. Perfect for any contemporary living space.",
    features: ["Ergonomic design", "High-quality upholstery", "Sturdy construction", "Multiple color options"],
    specifications: {
      material: "Premium leather, Steel frame",
      dimensions: "75cm x 80cm x 85cm",
      weight: "15 kg",
      warranty: "2 years"
    },
    color: "Brown",
    modelUrl: "https://sketchfab.com/models/88b89d3074cb4946a353ab990d1ff6a2/embed",
    imageUrl: "/furniture-1.jpg",
    thumbnailUrl: "/furniture-1-thumb.jpg",
    sketchfabId: "88b89d3074cb4946a353ab990d1ff6a2"
  },
  {
    id: "2",
    name: "Contemporary Dining Table",
    price: 24999,
    description: "An elegant dining table that combines style with functionality. Features a durable wooden top and metal base.",
    features: ["Scratch-resistant surface", "Easy assembly", "Extendable design", "Modern aesthetic"],
    specifications: {
      material: "Oak wood, Stainless steel",
      dimensions: "180cm x 90cm x 75cm",
      weight: "45 kg",
      warranty: "5 years"
    },
    color: "Natural Oak",
    modelUrl: "https://sketchfab.com/models/d67e67fbfb034b3a9eed17e633301416/embed",
    imageUrl: "/furniture-2.jpg",
    thumbnailUrl: "/furniture-2-thumb.jpg",
    sketchfabId: "d67e67fbfb034b3a9eed17e633301416"
  }
];

// Function to initialize furniture data in local storage
export const initializeFurnitureData = (): void => {
  const storedFurniture = localStorage.getItem('furnitureData');
  if (!storedFurniture) {
    localStorage.setItem('furnitureData', JSON.stringify(furnitureData));
  }
};

// Function to get all furniture items from local storage
export const getFurniture = (): Furniture[] => {
  const storedFurniture = localStorage.getItem('furnitureData');
  return storedFurniture ? JSON.parse(storedFurniture) : [];
};

// Function to get a specific furniture item by ID
export const getFurnitureById = (id: string): Furniture | undefined => {
  const furniture = getFurniture();
  return furniture.find(item => item.id === id);
};
