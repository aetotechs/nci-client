import { IStatus } from '@/App';
import CoffeeListings from '@/components/CoffeeListings';
import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { FilterSheet, Listings } from '@/components/FilterMobile';
import { IProduct } from '@/components/ProductDetails';
import { FetchProducts } from '@/lib/hooks/FetchProducts';

function CoffeeShop({ status }: IStatus) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const products = FetchProducts();

  const { pathname } = useLocation();

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
      <div className="md:px-[5vw] w-[100vw] md:mb-10   ">
        <Header status={status} handleSearch={handleSearch} />
        <div className="px-4  md:pt-0  overflow-hidden">
          <div className="flex flex-col gap-5  my-5  md:mb-0 md:flex-row md:justify-between  md:py-5">
            <h3 className="text-[26px] font-semibold mb-4 md:mb-0">Coffee Shop</h3>
            <div className="flex  justify-between ">
              <div className="md:hidden ">
                <FilterSheet />
              </div>
              <div className="flex items-center gap-3">
                <div className="font-medium text-base">Sort by:</div>
                <div>
                  <Select>
                    <SelectTrigger className=" bg-selectbackground border border-selectborder outline-none rounded-[5px] w-[100px] md:w-[126px] h-[33px] ">
                      <SelectValue placeholder="Featured" className="p-5 text-base font-bold " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="latest">Latest</SelectItem>
                      <SelectItem value="lowestPrice">Lowest Price</SelectItem>
                      <SelectItem value="highestPrice">Highest Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="lg:min-w-[25vw] md:min-w-[40vw] h-max  bg-white px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <CoffeeListings Listings={Listings} />
              </div>
            </div>

            <div className="flex justify-center md:w-[70vw] ">
              <Explore
                status={status}
                product={filteredProducts.length > 0 ? filteredProducts : products}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoffeeShop;
