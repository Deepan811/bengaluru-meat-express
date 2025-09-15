import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const OrderConfirmed = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold text-foreground">
              Order Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Thank you for your order! Your premium meat selection will be carefully 
              prepared and delivered fresh to your doorstep.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="shadow-card bg-gradient-card">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  What happens next?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground font-bold text-lg">1</span>
                    </div>
                    <h3 className="font-semibold">Order Processing</h3>
                    <p className="text-muted-foreground">
                      We'll prepare your order with the freshest cuts available
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground font-bold text-lg">2</span>
                    </div>
                    <h3 className="font-semibold">Quality Check</h3>
                    <p className="text-muted-foreground">
                      Each product goes through our strict quality control
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground font-bold text-lg">3</span>
                    </div>
                    <h3 className="font-semibold">Safe Delivery</h3>
                    <p className="text-muted-foreground">
                      Cold chain delivery to maintain freshness and quality
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg">Delivery Information</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Estimated Delivery:</span>
                    <div className="font-medium">Within 24-48 hours</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Payment Method:</span>
                    <div className="font-medium">Cash on Delivery</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  * Delivery times may vary based on location and product availability
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <div className="font-medium">Call us</div>
                    <div className="text-muted-foreground">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <div className="font-medium">Email us</div>
                    <div className="text-muted-foreground">orders@bengalurumeat.com</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="shadow-button hover:shadow-lg transition-all duration-200">
                <Home className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to your registered email address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;