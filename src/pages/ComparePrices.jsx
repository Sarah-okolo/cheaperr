import { useSearchTermStore, useResponseDataStore, useProductsStore } from "@/store";
import { useState, useEffect } from 'react';


function ComparePrices() {
  const { searchTerm } = useSearchTermStore();
  const { responseData } = useResponseDataStore();
  const [ cheaperPrice, setCheaperPrice ] = useState([]);
  const { products } = useProductsStore();

  const toNumber = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  };

  const getCheaperPrice = () => {
      // Extract prices and handle potential null or invalid values
      const amazonPrice = responseData.amazon?.[0] ? toNumber(responseData.amazon[0].price) : NaN;
      const ebayPrice = responseData.ebay?.[0] ? toNumber(responseData.ebay[0].price) : NaN;
      const aliexpressPrice = responseData.aliexpress?.[0] ? toNumber(responseData.aliexpress[0].price) : NaN;
      // Filter valid prices
      const prices = [amazonPrice, ebayPrice, aliexpressPrice].filter(price => !isNaN(price));
      if (prices.length === 0) {
        console.log("No valid prices available");
        return;
      }
      // Find the minimum price
      const minPrice = Math.min(...prices);
      // Set the product with the cheapest price
      if (minPrice === amazonPrice) {
        setCheaperPrice(responseData.amazon[0]);
      } else if (minPrice === ebayPrice) {
        setCheaperPrice(responseData.ebay[0]);
      } else if (minPrice === aliexpressPrice) {
        setCheaperPrice(responseData.aliexpress[0]);
      }
  };
  

  useEffect(() => {
    if (responseData && Object.keys(responseData).length > 0) {
      getCheaperPrice();
    }
  }, [responseData])


  return (
    <>
      <div className='p-10'>
        <div className="flex flex-col justify-center md:flex-row gap-10 items-center mx-auto md:w-1/2 mt-6 relative md:left-24">
          <div>
            <img src={products.length > 0 ? products[0].image : '/images/placeholder-image.png'} alt={products.length > 0 ? products[0].title : ''} className="border-2 rounded-md aspect-square w-60 h-40 object-contain"/>
          </div>
          <div className='grid gap-6'>
            <h1 className="text-3xl tracking-tight text-center md:text-left">{searchTerm ? searchTerm : 'N/A'}</h1>
          </div>
        </div>
        <div className='w-4/5 border mx-auto my-16'></div>
        <table className='w-full table-auto border-collapse border-2 md:w-3/5 gap-20 mx-auto'>
        <thead>
          <tr className='bg-muted'>
            <th>Site</th>
            <th>Sells for as low as</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon</td>
            <td>{ Object.keys(responseData).length > 0 && responseData.amazon[0] ? responseData.amazon[0].price : 'N/A' }</td>
          </tr>
          <tr>
            <td>eBay</td>
            <td>{ Object.keys(responseData).length > 0 && responseData.ebay[0] ? responseData.ebay[0].price : 'N/A' }</td>
          </tr>
          <tr>
            <td>AliExpress</td>
            <td>{ Object.keys(responseData).length > 0 && responseData.aliexpress[0] ? responseData.aliexpress[0].price : 'N/A' }</td>
          </tr>
        </tbody>
        </table>

        <div className=' mx-10 md:mx-30 my-20 grid place-items-center'>
          <p className='text-xl mt-6 tracking-wide'>This product can be gotten at a <span className='font-bold'>cheaperr</span> price on <a href={cheaperPrice ? (cheaperPrice.site === 'Amazon' ? `https://www.amazon.com${cheaperPrice.url}` : cheaperPrice.url) : '#'} target="_blank" className='text-orange-600 font-bold underline'>{cheaperPrice ? cheaperPrice.site : '...'}</a></p>
        </div>
      </div>
    </>
  )
}

export default ComparePrices