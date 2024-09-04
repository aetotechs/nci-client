
import { IStatus } from '@/App';
import BreadCrumb from '@/components/BreadCrumb';
import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function CoffeeShop({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/shop-page', label: 'Shop' }];
  return (
    <>
      <div className="my-[40px] mx-10 md:mx-[130px] ">
        <Header status={status} />

        <div className="mt-36">
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
