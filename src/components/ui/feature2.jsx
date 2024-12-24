import { Badge } from "@/components/ui/badge";

export const Feature2 = () => (
  <div className="w-full py-20 lg:py-15">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              This is the start of something new
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="rounded-md w-full aspect-video h-full flex-1">
          <img src="/images/Price-cuate.svg" alt="Illustration of a boy sitting on a couch" className="image-clamp mx-auto relative bottom-8" />
        </div>
      </div>
    </div>
  </div>
);