import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import lambChopsImg from "../assets/lamb-chops.jpg";
import goatMeatImg from "../assets/goat-meat.jpg";
import chickenImg from "../assets/chicken.jpg";

const ProductCard = ({ product }) => {
  const { addToCart, isInCart, getProductQuantity } = useCart();
  const inCart = isInCart(product.id);
  const quantity = getProductQuantity(product.id);

  // Map product IDs to real images
  const getProductImage = (id) => {
    const imageMap = {
      1: lambChopsImg,
      2: goatMeatImg, 
      3: chickenImg,
      4: lambChopsImg,
      5: goatMeatImg,
      6: chickenImg,
      7: lambChopsImg,
      8: goatMeatImg,
      9: chickenImg,
      10: lambChopsImg,
      11: goatMeatImg,
      12: chickenImg,
    };
    return imageMap[id] || product.imageURL;
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart(product);
  };

  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden animate-fade-in">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={getProductImage(product.id)}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              {product.category}
            </Badge>
          </div>
          {product.inStock && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-green-500/90 text-white backdrop-blur-sm animate-pulse">
                In Stock
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                ₹{product.pricePerKg.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground">per kg</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-muted-foreground block">
                {product.weight}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full group/btn shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-in"
          disabled={!product.inStock}
        >
          {inCart ? (
            <>
              <Plus className="h-4 w-4 mr-2 group-hover/btn:rotate-90 transition-transform duration-200" />
              Add More {quantity > 0 && `(${quantity} in cart)`}
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;