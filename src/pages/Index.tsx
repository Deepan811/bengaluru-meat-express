import React, { useState } from 'react';
import { products, getAllCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Search, Filter } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', ...getAllCategories()];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Quality Meat
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            From our farms to your table. Experience the finest selection of fresh, premium meat 
            sourced directly from trusted farms across Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/95 backdrop-blur-sm border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b border-border bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center">
              <Filter className="h-5 w-5 mr-2 text-primary" />
              Our Products
            </h2>
            <span className="text-muted-foreground">
              {filteredProducts.length} products available
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="bg-gradient-accent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
            Our Quality Promise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">🥩</span>
              </div>
              <h3 className="font-semibold mb-2">Farm Fresh</h3>
              <p className="text-muted-foreground text-sm">
                Sourced directly from trusted farms with no intermediaries
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">❄️</span>
              </div>
              <h3 className="font-semibold mb-2">Cold Chain</h3>
              <p className="text-muted-foreground text-sm">
                Temperature controlled from farm to your doorstep
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">✅</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">
                Every product meets our strict quality standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
