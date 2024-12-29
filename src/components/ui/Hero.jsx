import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Amazon", "eBay", "AliExpress"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:pt-5 lg:pb-15 items-center justify-center flex-col relative">
          <div className="flex gap-4 flex-col">
            <img src="/images/Shopping bag-amico.svg" alt="A hand holding shopping bags" className="hidden md:block w-[20%] absolute left-[4%] top-[30%] z-[-10] opacity-90"/>
            <img src="/images/Shopping bag-amico.svg" alt="A hand holding shopping bags" className="hidden md:block w-[20%] absolute right-[4%] top-[30%] z-[-10] opacity-90" />
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Find <b>Cheaperr</b> on</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:py-10 text-orange-600">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-10">
               Cheaperr enables you to compare prices for your desired product across Amazon, eBay, and AliExpress, helping you find the best deal effortlessly.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link to="/products">
              <Button size="lg" variant="outline" className="bg-gap-4 hover:bg-orange-600 hover:text-black hover:border-orange-600 p-7 mt-6">
                Find Products <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};