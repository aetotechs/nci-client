import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import { Link } from 'react-router-dom';

function AdminSideBarDesktop() {
  return (
    <aside className="flex flex-col gap-3 fixed ">
      <div className="border-b border-primary/30 py-2 mb-4 w-[200px] ">
        <Link to="/">
          <div className="w-[160px] h-12 md:w-[180px] md:h-10 px-3 ">
            <img src="/logos/logo.png" alt="coffee logo" width="200" height={38} />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 px-3 ">
        <div className="flex items-center gap-1">
          <span>
            <img src="/icons/home.svg" alt="Home" />
          </span>
          Dashboard
        </div>
        <div className="flex gap-1">
         
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1">
              <AccordionTrigger className='flex justify-between w-40  '>
              <div className='flex gap-1'>
              <span>
                  <img src="/icons/catalog.svg" alt="Catalog" />
                </span>
                Catalogue
              </div>
              </AccordionTrigger>
              <AccordionContent className='max-w-36' >
                <div className="flex flex-col gap-2 px-3">
                  <Link to='/coffee-listings'>Coffee Listings</Link>
                  <Link to='/categories'>Categories</Link>
                  <Link to='/admin-origins'>Origins</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
           
         
          </Accordion>
        </div>
        <div className="flex gap-1">
         
         <Accordion type="single" collapsible >
           <AccordionItem value="item-1">
             <AccordionTrigger className='flex justify-between w-40  '>
             <div className='flex gap-1'>
             <span>
                 <img src="/icons/sales.svg" alt="Sales" />
               </span>
               Sales
             </div>
             </AccordionTrigger>
             <AccordionContent className='max-w-36' >
               <div className="flex flex-col gap-2 px-3">
                 <Link to='/coffee-listings'>Coffee Listings</Link>
                 <Link to='/categories'>Categories</Link>
                 <Link to='/origins'>Origins</Link>
               </div>
             </AccordionContent>
           </AccordionItem>
          
        
         </Accordion>
       </div>
        <div className="flex items-center gap-1">
          <span>
            <img src="/icons/customer.svg" alt="Customers" />
          </span>
          Customers
        </div>
        <div className="flex items-center gap-1">
          <span>
            <img src="/icons/analytics.svg" alt="Analytics" />
          </span>
          Analytics
        </div>
        <div className="flex items-center gap-1">
          <span>
            <img src="/icons/settings.svg" alt="Settings" />
          </span>
          Settings
        </div>
        <div className="flex items-center gap-1">
          <span>
            <img src="/icons/logout.svg" alt="Logout" />
          </span>
          Logout
        </div>
      </div>
    </aside>
  );
}

export default AdminSideBarDesktop;
