import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";

function Products() {

  return (
    <>
      <div className="w-full py-16 px-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              {/* <div>
                <Badge>Platform</Badge>
              </div> */}
              <div className="flex gap-5 md:gap-2 flex-col">
                <h2 className="text-4xl md:text-5xl tracking-tighter max-w-xl font-regular text-center md:text-left text-orange-600">
                  Something new!
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Managing a small business today is already tough.
                </p>
              </div>
              <div className="flex w-full md:w-1/2 items-center space-x-5">
                <Input type="email" placeholder="Find product..." className="w-full border-foreground focus:border-none px-3 py-6"/>
                <Button type="submit" className="hover:bg-orange-600">Find Product</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="bg-muted rounded-md aspect-video mb-2">
                    <img src="/images/cheaperr-logo.png" alt="" className="w-full object-cover"/>
                  </div>
                  <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                  <p className="text-muted-foreground text-base">
                    Our goal is to streamline SMB trade, making it easier and faster
                    than ever.
                  </p>
                  <Link to="/compare-prices">
                  <Button size="lg" variant="outline" className="bg-gap-4 hover:bg-orange-600 hover:text-black hover:border-orange-600 mt-2">
                    Compare prices <MoveRight className="w-4 h-4" />
                  </Button>
                </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;