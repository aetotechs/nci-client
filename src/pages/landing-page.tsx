import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

import Explore from '@/components/Explore';
import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
import CoffeeJourney from '@/components/CoffeeJourney';
import Header, { HeaderProps } from '@/components/Header';
import { FetchProducts } from '@/lib/hooks/FetchProducts';
import { IStatus } from '@/App';
import { useState } from 'react';
import { IProduct } from '@/components/ProductDetails';

function LandingPage({ status }: IStatus) {
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
