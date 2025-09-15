import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Eye, Users, Shield, Truck } from "lucide-react";
import facilityImg from "../assets/facility.jpg";

const About = () => {
  const certifications = [
    "HACCP Certified",
    "ISO 22000:2018",
    "Export License",
    "Halal Certified",
    "FSSAI Licensed",
    "Cold Chain Certified"
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards of hygiene and quality throughout our processing chain."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, ensuring satisfaction with every order."
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Reliable Supply",
      description: "Consistent and timely delivery to meet your business needs, anywhere in India."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            About Bengaluru Meat Exporters
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Premium quality meat products delivered with excellence since 2010
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
              <CardTitle className="text-2xl font-heading text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                To provide the finest quality meat products to our customers while maintaining 
                the highest standards of hygiene, sustainability, and ethical practices. We are 
                committed to supporting local farmers and delivering excellence in every cut.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
              <CardTitle className="text-2xl font-heading text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                To be the most trusted and preferred meat exporter in South India, known for 
                our unwavering commitment to quality, innovation in processing techniques, 
                and exceptional customer service that exceeds expectations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2010 in the heart of Bengaluru, Bengaluru Meat Exporters began as a 
              small family business with a simple vision: to provide the highest quality meat 
              products to our community.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Over the years, we have grown into one of Karnataka's leading meat exporters, 
              serving customers across India with our premium lamb, goat, and poultry products. 
              Our success is built on trust, quality, and an unwavering commitment to excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we operate state-of-the-art processing facilities and maintain a cold chain 
              network that ensures freshness from farm to your table.
            </p>
          </div>
          <div className="animate-slide-up">
            <img 
              src={facilityImg} 
              alt="Our modern processing facility" 
              className="rounded-lg shadow-card-hover w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-bounce-in">
                <CardContent className="p-6">
                  <div className="mb-4 animate-float">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="bg-gradient-card shadow-card animate-fade-in">
          <CardHeader className="text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
            <CardTitle className="text-2xl font-heading text-foreground">
              Certifications & Quality Standards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              We maintain the highest industry standards and are certified by leading quality 
              assurance organizations to ensure the safety and quality of our products.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;