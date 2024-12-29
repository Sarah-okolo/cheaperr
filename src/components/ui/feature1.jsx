import { Badge } from "@/components/ui/badge";

export const Feature1 = () => (
  <div className="w-full py-20 lg:py-15">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="rounded-md w-full aspect-video h-full flex-1">
          <img src="/images/Price-cuate.svg" alt="Illustration of a boy sitting on a couch" className="image-clamp mx-auto relative bottom-8" />
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>Cheaperr</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              How it works
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
            Simply enter the name of a product you want to compare prices for. Cheaperr searches Amazon, eBay, and AliExpress for the best prices and tells you which one of them sells your requested product for cheaperr.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);