import Hero from '@/components/user/other/Hero';
import Footer from '@/components/user/other/Footer';
import AboutUs from '@/components/user/other/AboutUs';

import Explore from '@/components/user/other/Explore';
import Benefits from '@/components/user/other/Benefits';
import Categories from '@/components/user/other/Categories';
import CoffeeJourney from '@/components/user/other/CoffeeJourney';
import Header, { HeaderProps } from '@/components/user/other/Header';
import { FetchProducts } from '@/utils/services/FetchProducts';
import { IStatus } from '@/App';
import { useEffect, useState } from 'react';
import { IProduct } from '@/components/user/other/ProductDetails';
import { useLocation } from 'react-router-dom';

function LandingPage({ status }: IStatus) {
  const { pathname } = useLocation();

 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const products = FetchProducts();
  const handleSearch = (searchQuery: string) => {
    setSearchTerm(searchQuery.toLowerCase());

    const filtered = products?.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.flavor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.wareHouse.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.unitPrice.toString().includes(searchQuery)
    );

    if (filtered.length === 0) {
      <div className="bg-white rounded-[6px]">
        <p className="text-primary">No Results Found</p>
      </div>;
    }

    setFilteredProducts(filtered);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="lg:px-[4vw] md:px-[2vw] md:max-w-[100vw]     ">
        <Header status={status} handleSearch={handleSearch} />
        <main className="px-[5vw] lg:px-0 ">
          <Hero />
          <AboutUs />
          <Categories />
          <CoffeeJourney />
          <Explore
            status={status}
            product={filteredProducts.length > 0 ? filteredProducts : products}
          />
          <Benefits status={status} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
