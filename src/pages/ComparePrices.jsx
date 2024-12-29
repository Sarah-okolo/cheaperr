import { useSearchTermStore, useResponseDataStore, useProductsStore } from "@/store";
import { useState, useEffect } from 'react';


function ComparePrices() {
  const { searchTerm } = useSearchTermStore();
  const { responseData } = useResponseDataStore();
  const [ amazonCheapestPrice, setAmazonCheapestPrice ] = useState('');
  const [ ebayCheapestPrice, setEbayCheapestPrice ] = useState('');
  const [ aliCheapestPrice, setAliCheapestPrice ] = useState('');
  const { products } = useProductsStore();

  // Function to get the cheapest price for the searched item.
  const getCheapestPrice = (site) => {
    let cheapestPrice = '';
    let cheapestPriceValue = 0;
    let siteData = responseData[site];
    if (siteData.length > 0) {
      cheapestPrice = siteData[0].price;
      cheapestPriceValue = parseFloat(siteData[0].price.replace('$', ''));
      for (let i = 1; i < siteData.length; i++) {
        let currentPriceValue = parseFloat(siteData[i].price.replace('$', ''));
        if (currentPriceValue < cheapestPriceValue) {
          cheapestPrice = siteData[i].price;
          cheapestPriceValue = currentPriceValue;
        }
      }
    }
    return cheapestPrice;
  }

  // Set the cheapest price for the item on each site
  useEffect(() => {
    console.log(responseData);
    if ( responseData.length > 0 ) {
      setAmazonCheapestPrice(getCheapestPrice('amazon'));
      setEbayCheapestPrice(getCheapestPrice('ebay'));
      setAliCheapestPrice(getCheapestPrice('aliexpress'));
    }
  }, [responseData]);

  return (
    <>
      <div className=''>
        <div className="flex gap-10 items-center mx-auto md:w-1/2 mt-6 relative left-24">
          <div>
            <img src={products[0].image} alt={products[0].title} className="border-2 rounded-md aspect-square w-60 h-40 object-contain"/>
          </div>
          <div className='grid gap-6'>
            <h1 className="text-4xl tracking-tight">{searchTerm}</h1>
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
            <td>{ amazonCheapestPrice !== '' ? amazonCheapestPrice : 'N/A' }</td>
          </tr>
          <tr>
            <td>eBay</td>
            <td>{ ebayCheapestPrice !== '' ? ebayCheapestPrice : 'N/A' }</td>
          </tr>
          <tr>
            <td>AliExpress</td>
            <td>{ aliCheapestPrice !== '' ? aliCheapestPrice : 'N/A' }</td>
          </tr>
        </tbody>
        </table>

        <div className=' mx-10 md:mx-30 my-20 grid place-items-center'>
          <p className='text-xl mt-6 tracking-wide'>This product can be gotten at a <span className='font-bold'>cheaperr</span> price from <a href='#' className='text-orange-600 font-bold underline'>AliExpress</a></p>
        </div>
      </div>
    </>
  )
}

export default ComparePrices