import { MoveRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
  <div className="w-full py-20 lg:py-15">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-orange-600 font-bold">
            Try our platform today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/products">
            <Button size="lg" variant="outline" className="bg-gap-4 hover:bg-orange-600 hover:border-orange-600 mt-5">
              Find products <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);