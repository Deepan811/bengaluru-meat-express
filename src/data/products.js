// Bengaluru Meat Exporters - Product Catalog
export const products = [
  {
    id: 1,
    name: "Premium Lamb Chops",
    description: "Tender, premium quality lamb chops sourced from the finest farms. Perfect for grilling and roasting with exceptional marbling and flavor.",
    pricePerKg: 1250,
    category: "Lamb",
    imageURL: "https://placehold.co/400x300/8B5A3C/FFFFFF?text=Premium+Lamb+Chops",
    inStock: true,
    weight: "500g - 2kg portions available"
  },
  {
    id: 2,
    name: "Organic Lamb Leg",
    description: "Whole organic lamb leg, perfect for special occasions and family gatherings. Grass-fed and naturally raised without antibiotics.",
    pricePerKg: 1450,
    category: "Lamb",
    imageURL: "https://placehold.co/400x300/A0522D/FFFFFF?text=Organic+Lamb+Leg",
    inStock: true,
    weight: "2kg - 4kg portions available"
  },
  {
    id: 3,
    name: "Fresh Goat Curry Cut",
    description: "Traditional goat meat cut specifically for curries and stews. Rich flavor and tender texture, ideal for authentic Indian preparations.",
    pricePerKg: 850,
    category: "Goat",
    imageURL: "https://placehold.co/400x300/CD853F/FFFFFF?text=Goat+Curry+Cut",
    inStock: true,
    weight: "500g - 1kg portions available"
  },
  {
    id: 4,
    name: "Goat Biryani Cut",
    description: "Specially cut goat meat with bone, perfect for making authentic biryanis and traditional rice dishes. Expertly portioned for optimal cooking.",
    pricePerKg: 950,
    category: "Goat",
    imageURL: "https://placehold.co/400x300/DEB887/FFFFFF?text=Goat+Biryani+Cut",
    inStock: true,
    weight: "1kg - 2kg portions available"
  },
  {
    id: 5,
    name: "Free Range Chicken Whole",
    description: "Farm-fresh, free-range whole chicken. Raised naturally with plenty of space to roam, resulting in superior taste and texture.",
    pricePerKg: 320,
    category: "Poultry",
    imageURL: "https://placehold.co/400x300/F4A460/FFFFFF?text=Free+Range+Chicken",
    inStock: true,
    weight: "1kg - 2kg birds available"
  },
  {
    id: 6,
    name: "Chicken Breast Boneless",
    description: "Premium boneless chicken breast fillets. Lean, protein-rich, and perfect for healthy meals, grilling, and quick cooking preparations.",
    pricePerKg: 450,
    category: "Poultry",
    imageURL: "https://placehold.co/400x300/F5DEB3/FFFFFF?text=Chicken+Breast",
    inStock: true,
    weight: "250g - 1kg portions available"
  },
  {
    id: 7,
    name: "Lamb Shoulder Roast",
    description: "Succulent lamb shoulder, perfect for slow roasting. Marbled with fat for incredible flavor and tenderness when cooked properly.",
    pricePerKg: 1150,
    category: "Lamb",
    imageURL: "https://placehold.co/400x300/BC8F8F/FFFFFF?text=Lamb+Shoulder",
    inStock: true,
    weight: "1.5kg - 3kg portions available"
  },
  {
    id: 8,
    name: "Goat Ribs",
    description: "Tender goat ribs with excellent marbling. Perfect for BBQ, grilling, or slow cooking. Rich flavor that pairs well with bold spices.",
    pricePerKg: 750,
    category: "Goat",
    imageURL: "https://placehold.co/400x300/D2691E/FFFFFF?text=Goat+Ribs",
    inStock: true,
    weight: "500g - 1.5kg portions available"
  },
  {
    id: 9,
    name: "Duck Whole",
    description: "Premium whole duck, raised in optimal conditions. Rich, flavorful meat perfect for roasting and special occasion meals.",
    pricePerKg: 680,
    category: "Poultry",
    imageURL: "https://placehold.co/400x300/8B4513/FFFFFF?text=Whole+Duck",
    inStock: true,
    weight: "1.5kg - 2.5kg birds available"
  },
  {
    id: 10,
    name: "Chicken Thighs Bone-in",
    description: "Juicy bone-in chicken thighs with skin. Perfect for braising, roasting, and grilling. More flavorful than breast meat.",
    pricePerKg: 280,
    category: "Poultry",
    imageURL: "https://placehold.co/400x300/DAA520/FFFFFF?text=Chicken+Thighs",
    inStock: true,
    weight: "500g - 2kg portions available"
  },
  {
    id: 11,
    name: "Premium Lamb Mince",
    description: "Freshly ground premium lamb mince. Perfect for kebabs, burgers, and traditional dishes. Made from choice cuts for superior taste.",
    pricePerKg: 980,
    category: "Lamb",
    imageURL: "https://placehold.co/400x300/A0522D/FFFFFF?text=Lamb+Mince",
    inStock: true,
    weight: "250g - 1kg portions available"
  },
  {
    id: 12,
    name: "Country Chicken",
    description: "Traditional country chicken raised in natural village conditions. Firm texture and authentic flavor, perfect for traditional recipes.",
    pricePerKg: 420,
    category: "Poultry",
    imageURL: "https://placehold.co/400x300/CD853F/FFFFFF?text=Country+Chicken",
    inStock: true,
    weight: "800g - 1.5kg birds available"
  }
];

// Helper functions for product data
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

export const searchProducts = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
};