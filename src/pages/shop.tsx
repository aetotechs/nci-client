import React, { useState } from 'react';
import EmptyCart from '@/components/EmptyCart';
import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';

function Shop() {
  const [CartItems, setCartItems] = useState(true);
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];

  return (
    <>
      <div className="my-[40px] mx-10 md:mx-[104px] ">
        <Header />

        <div className="mt-36">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className="flex justify-center items-center h-[500px]">
            {CartItems===false? <EmptyCart/>:<CartWithItems/>}
           
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Shop;
