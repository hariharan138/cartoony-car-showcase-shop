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
  modelUrl: string;
  imageUrl: string;
  thumbnailUrl: string;
  sketchfabId: string;
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
  },
  {
    id: "3",
    name: "Scandinavian Coffee Table",
    price: 8499,
    description: "A minimalist coffee table with a Scandinavian touch. Made from solid ash wood, perfect for cozy spaces.",
    features: ["Solid wood top", "Matte finish", "Tapered legs", "Easy to clean"],
    specifications: {
      material: "Ash wood, Veneer",
      dimensions: "120cm x 60cm x 45cm",
      weight: "12 kg",
      warranty: "1 year"
    },
    color: "Light Wood",
    modelUrl: "https://sketchfab.com/models/5799f3df37d54959b3d2fec0614336b3/embed",
    imageUrl: "/furniture-3.jpg",
    thumbnailUrl: "/furniture-3-thumb.jpg",
    sketchfabId: "2e4a8a6f59a546eabdfec52a65d55ab4"
  },
  {
    id: "4",
    name: "Industrial Bookshelf",
    price: 18999,
    description: "A five-tier bookshelf combining rustic wood and black steel for an industrial vibe. Ideal for living rooms and home offices.",
    features: ["Rustic wood finish", "Heavy-duty steel frame", "Adjustable shelves", "Anti-tip hardware included"],
    specifications: {
      material: "Engineered wood, Powder-coated steel",
      dimensions: "80cm x 30cm x 180cm",
      weight: "30 kg",
      warranty: "3 years"
    },
    color: "Rustic Brown",
    modelUrl: "https://sketchfab.com/models/1af8e88439b649e1aa6a9a9b0b2fbd4f/embed",
    imageUrl: "/furniture-4.jpg",
    thumbnailUrl: "/furniture-4-thumb.jpg",
    sketchfabId: "1af8e88439b649e1aa6a9a9b0b2fbd4f"
  },
  {
    id: "5",
    name: "Executive Office Desk",
    price: 32999,
    description: "A luxurious executive desk featuring spacious storage, cable management, and a smooth walnut finish.",
    features: ["Lockable drawers", "Built-in cable tray", "Soft-close mechanism", "Walnut wood finish"],
    specifications: {
      material: "Walnut veneer, MDF core, Metal legs",
      dimensions: "160cm x 70cm x 76cm",
      weight: "50 kg",
      warranty: "5 years"
    },
    color: "Walnut Brown",
    modelUrl: "https://sketchfab.com/models/f6d4a6b546d1449ba3e5439a476f01a2/embed",
    imageUrl: "/furniture-5.jpg",
    thumbnailUrl: "/furniture-5-thumb.jpg",
    sketchfabId: "f6d4a6b546d1449ba3e5439a476f01a2"
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
