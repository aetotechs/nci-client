import { IStatus } from '@/App';
import BreadCrumb from '@/components/BreadCrumb';
import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CoffeeShop({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/coffee-shop', label: 'Shop' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="my-10 mx-auto w-[1232px] ">
        <Header status={status} />

        <div className="mt-10">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div className="flex  justify-between my-5 py-5">
          <h3 className="text-[26px] font-semibold">Coffee Shop</h3>
          <div>Sort by</div>
        </div>
        <div className="md:flex gap-3">
          <div className="w-[372px] bg-white">
            <h5>Filter</h5>
          </div>
          <div>
            <Explore status={status} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoffeeShop;
