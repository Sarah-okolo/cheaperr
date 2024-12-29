import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useResponseDataStore, useProductsStore, useSearchTermStore, useReceivedDataStore } from "@/store";


function Products() {
  const [searching, setSearching] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const searchInputRef = useRef(null);
  const { responseData, setResponseData } = useResponseDataStore();
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  const { receivedData, setReceivedData } = useReceivedDataStore();
  const { products, setProducts } = useProductsStore();

  const fetchProducts = async () => {
    if (searchInputRef.current.value !== "") {
      setSearching(true);
      try {
          setErrMsg(null);
          const response = await fetch(`http://localhost:3000/scrape?search=${encodeURIComponent(searchInputRef.current.value)}`);
          if (!response.ok) {
              throw new Error();
          }
          const data = await response.json();
          setResponseData(data);
          setProducts([...data.amazon, ...data.ebay, ...data.aliexpress]);
          setSearching(false);
          setReceivedData(true)
          setSearchTerm(searchInputRef.current.value);
      } catch (error) {
          console.error("Error fetching products:", error);
          setErrMsg("OOPS! An error occured while finding product. Please try again in a few seconds.");
          setSearching(false);
      }
    }
    else {
      searchInputRef.current.classList.add('border-red-600');
    }
  };

  const handleSearchInput = () => {
    if (searchInputRef.current.value == "") {
      searchInputRef.current.classList.add('border-red-600');
    }
    else {
      searchInputRef.current.classList.remove('border-red-600');
    }
  }

  useEffect(() => {
    console.log(products);
  }, [products]);


  return (
    <>
      <div className="w-full py-16 px-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-2">
              <div className="flex gap-5 md:gap-2 flex-col">
                <h2 className="text-4xl md:text-5xl tracking-tighter max-w-xl font-medium text-center md:text-left text-orange-600">
                  Find products!
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left mt-2 pr-5">
                  Compares a product price across Amazon, eBay, and AliExpress.
                </p>
              </div>
              <div className="flex w-full md:w-1/2 items-center space-x-5">
                <Input type="email" placeholder="Enter product name..." className="w-full border-foreground focus:border-2 px-3 py-6" onInput={handleSearchInput} ref={searchInputRef}/>
                <Button type="submit" disabled={searching} className={!searching ? "hover:bg-orange-600" : "bg-orange-600 cursor-not-allowed hover:bg-orange-600"} onClick={fetchProducts}>{!searching ? 'Find Product' : <span>Searching...</span>}</Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                { products.length > 0 &&
                  <Link to="/compare-prices">
                    <Button size="lg" variant="outline" className="bg-gap-4 bg-orange-600 border-orange-600 text-black text-lg">
                      Compare prices <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                }
              </div>
              { searchTerm !== '' &&
                <h2 className="font-medium text-2xl">{searchTerm}</h2>
              }
            </div>
            { receivedData && products.length > 0 &&
              <h2 className="font-medium text-2xl">All results</h2>
            }
            <div className={products.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' : ''}>
              { products.length > 0 ?
                products.map((product, index) => (
                  product.price && !product.isSponsored &&
                    <div key={index} className="flex flex-col justify-between gap-4">
                      <div className="border-2 rounded-md mb-2 aspect-square w-full h-64 overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-full object-contain"/>
                      </div>
                      <h3 className="text-xl tracking-tight text-pretty line-clamp-3">{product.title}</h3>
                      <p className="font-medium text-orange-600">{product.site}</p>
                    </div>
              )) 
              : 
                !searchTerm && !errMsg?
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img src="/images/search.png" alt="Cheaperr Logo" className="w-80 object-contain"/>
                    <p className="text-xl text-muted-foreground">Search for a product to compare prices <ArrowUpRight className="inline"/> </p>
                  </div>
                :
                 <div className='mx-auto mt-20 text-center text-red-400'>{errMsg && errMsg}</div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;