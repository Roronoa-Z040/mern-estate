import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import AdmListingItem from '../components/AdmListingItem';

export default function Home() {

  const [offerListings, setOfferListings] = useState([]);
 
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get');
        const data = await res.json();
        setOfferListings(data);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600  '>All listings</h2>
              {/* <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link> */}
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <AdmListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        

      </div>
              
    
    </div>   

  );    
  
}
