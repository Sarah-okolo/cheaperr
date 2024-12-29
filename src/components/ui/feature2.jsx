import { Badge } from "@/components/ui/badge";

export const Feature2 = () => (
  <div className="w-full py-20 lg:py-15">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Cheaperr</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Why choose us
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Cheaperr is a price comparison tool that helps you find the best prices for products on Amazon, eBay, and AliExpress. We help you save money by showing you the cheapest price for the product you want to buy.
            </p>
          </div>
        </div>
        <div className="rounded-md w-full aspect-video h-full flex-1">
          <img src="/images/rb_55410.png" alt="Illustration of people holding discount items" className="image-clamp mx-auto relative bottom-8" />
        </div>
      </div>
    </div>
  </div>
);