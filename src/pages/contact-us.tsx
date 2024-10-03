import { useEffect } from 'react';

import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';

import { ContactUsForm } from '@/components/forms/ContactUsForm';
import { MailIcon, Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function ContactUs({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]   ">
        <Header status={status} />
        <div className=" px-5 md:py-7  md:pt-0  overflow-hidden">
          <div className="md:mt-10 mt-3 ">
            <h3 className="font-semibold text-[26px]">Contact Us</h3>
          </div>
          <div className="flex flex-col gap-7 md:flex-row ">
            <div className="  md:w-[60vw] ">
              <h4 className="font-normal text-base leading-6 md:leading-5 md:text-base mb-5 text-textcolor">
                Fill the form with your inquiries and a member of our team would reach out to you
              </h4>
              <h5 className="font-semibold text-[18px]">Office Contact Info</h5>
              <div className="my-1 flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>
                    <img src="/icons/location.svg" alt="" className="w-4 h-4" />
                  </span>
                  415 Elm Street, Suite 2B San Francisco, CA 94102
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <Phone className="h-4 w-4 text-primary" />
                  </span>
                  +1 (914) 793-2110
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  support@nilecoffeeimports.com
                </div>
              </div>
            </div>
            <div className="md:w-[40vw]  p-5 mb-20 md:mb-0 md:py-10  bg-white md:px-10 flex items-center rounded-[20px] ">
              <ContactUsForm />
            </div>
          </div>

          <div className="bg-white grid md:grid-cols-2 p-4 md:p-10 md:gap-20 rounded-[20px]  md:mt-20">
            <div className="md:w-[40vw]">
              <h3 className="font-semibold text-[24px]">Suppliers</h3>
              <p className="text-base font-normal leading-6 md:leading-7 text-textdark">
                We value building new relationships and strengthening existing ones with
                cooperatives, estates, individual producers, farmer groups, associations, mills, and
                exporters. If you are interested in sending us a sample offer, please download the
                <span className="text-primary"> Coffee Information Sheet</span> and mail it to the
                address below, along with a 350-gram offer sample. Be sure to include a Reference
                Number for each sample. We will taste your coffee and get back to you promptly.
                <div className="my-4">
                  <h4 className="text-textcolor font-semibold"> Nile Coffee Imports </h4>
                  <p>Quality Control Department,</p>
                  <p> 415 Elm Street, Suite 2B San Francisco, CA 94102 USA</p>
                </div>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[24px]">Careers</h3>
              <p className="text-base font-normal leading-7">
                We are regularly looking for new talent as we supply more high quality coffee to our
                roasting customers. Please send all career inquiries, including a cover letter and
                resume to <span className="text-primary">customerservice@nilecoffee.com</span>
              </p>
            </div>
          </div>
          <div className="flex  flex-col md:mt-20 px-2">
            <h3 className="md:text-center my-3 font-semibold text-xl md:text-[24px] ">
              Frequently Asked Questions
            </h3>

            <div className=" md:px-0">
              <Tabs defaultValue="shipping" className=" ">
                <TabsList className="md:my-5 pl-56 md:pl-0 md:mx-0 min-w-[90vw] overflow-x-auto flex justify-center items-center  ">
                  <TabsTrigger
                    value="shipping"
                    className=" text-base data-[state=active]:text-primary data-[state=active]:border  border-primary data-[state=active]:bg-primary/20 data-[state=active]:rounded-[6px] data-[state=active]:font-medium"
                  >
                    Shipping & Tracking
                  </TabsTrigger>
                  <TabsTrigger
                    value="buying"
                    className=" text-base data-[state=active]:text-primary data-[state=active]:border  border-primary data-[state=active]:bg-primary/20 data-[state=active]:rounded-[6px] data-[state=active]:font-medium"
                  >
                    Buying Online
                  </TabsTrigger>
                  <TabsTrigger
                    value="origin"
                    className=" text-base data-[state=active]:text-primary data-[state=active]:border  border-primary data-[state=active]:bg-primary/20 data-[state=active]:rounded-[6px] data-[state=active]:font-medium"
                  >
                    Origin Insights
                  </TabsTrigger>
                  <TabsTrigger
                    value="quality"
                    className=" text-base data-[state=active]:text-primary data-[state=active]:border  border-primary data-[state=active]:bg-primary/20 data-[state=active]:rounded-[6px] data-[state=active]:font-medium"
                  >
                    Quality Control
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="shipping" className="w-full">
                  <Accordion type="single" collapsible className="">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="md:font-medium text-sm md:text-base">
                        How do I track my green coffee shipment?
                      </AccordionTrigger>
                      <AccordionContent>
                        Track your coffee shipment using the provided tracking number, whether
                        shipped via FedEx (for 60 kg bags) or Ground Freight. Check your email for
                        shipping details or contact customer service if you can't find the tracking
                        information.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="md:font-medium  text-[13px] md:text-base">
                        How do I pick up green coffee from the warehouse?
                      </AccordionTrigger>
                      <AccordionContent>
                        Once you place your order, you&apos;ll receive pickup instructions,
                        including location and available times. Just bring your confirmation, and
                        the warehouse staff will assist you.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-medium text-base">
                        How do you ship my coffee?
                      </AccordionTrigger>
                      <AccordionContent>
                        We ship your coffee in resealable packaging to keep it fresh. You'll get a
                        tracking number after shipment, and we offer standard and expedited shipping
                        options.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="buying" className="w-full">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="md:font-medium md:text-base">
                        What should I consider when choosing the quantity of coffee to buy online?
                      </AccordionTrigger>
                      <AccordionContent>
                        Consider how quickly you&apos;ll consume the coffee. Buying too much may
                        lead to stale coffee. For best freshness, order small amounts regularly
                        rather than in bulk, especially if you drink coffee less frequently.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-medium md:text-base">
                        What grind size should I choose when ordering online?
                      </AccordionTrigger>
                      <AccordionContent>
                        The grind size depends on your brewing method. Coarse grind for French
                        press, medium grind for drip coffee, and fine grind for espresso. If you're
                        unsure, opt for whole beans and grind them at home.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-medium text-base">
                        How long does it take to receive coffee ordered online?
                      </AccordionTrigger>
                      <AccordionContent>
                        Shipping times depend on the retailer and location. Standard shipping
                        usually takes 3-7 days, but some retailers offer faster shipping options.
                        Always check delivery times before ordering.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="origin" className="w-full">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-medium text-base">
                        Is your coffee ethically sourced?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, all of our coffee is ethically sourced. We work directly with farmers
                        who use sustainable practices, and many of our beans come with
                        certifications like Fair Trade, ensuring farmers are paid fairly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-medium text-base">
                        Is your coffee single-origin or a blend?
                      </AccordionTrigger>
                      <AccordionContent>
                        We offer both single-origin coffees, which come from one specific region or
                        farm, and blends, which combine beans from different regions to create a
                        well-rounded flavor profile.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-medium text-base">
                        Where do your coffee beans come from?
                      </AccordionTrigger>
                      <AccordionContent>
                        We source our coffee beans from top regions around the world, including
                        Kaenya, Uganda, Tanzania, and more. Each origin offers a unique flavor
                        profile, allowing you to explore a variety of tastes.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="quality" className="w-full">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-medium text-sm md:text-base">
                        How often is the coffee tested for quality and flavor consistency?
                      </AccordionTrigger>
                      <AccordionContent>
                        Regular quality checks and cupping sessions help ensure that each batch
                        meets the desired flavor profile and quality standards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-medium text-sm md:text-base">
                        How do you test your coffee for quality?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our coffee is regularly tested through cupping sessions, where expert
                        tasters evaluate its flavor, aroma, and texture. We ensure that each batch
                        meets our high-quality standards before it&apos;s packaged and shipped.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-medium text-sm md:text-base">
                        What certifications should I look for to ensure the coffee meets
                        high-quality standards?
                      </AccordionTrigger>
                      <AccordionContent>
                        Look for certifications like Fair Trade, USDA Organic, Rainforest Alliance,
                        or Direct Trade, which indicate certain standards in farming and production.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
