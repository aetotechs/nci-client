function CoffeeHistory() {
  return (
    <div className="flex flex-col gap-2 md:grid rounded-[16px] px-4 py-6 md:mx-0 md:grid-cols-2 bg-white min-h-max md:py-10 md:px-20 md:my-24">
      <div className="w-full h-[250px] md:h-[340px] bg-coffeehistory bg-cover bg-center rounded-[12px]"></div>

      <div className="flex flex-col  justify-center mt-5 md:mt-0 md:pl-10">
        <h3 className="font-semibold text-xl md:text-[24px] md:leading-[50px] ">
          History Of Coffee In Kenya
        </h3>
        <p className="leading-6 md:leading-[24px] py-1 md:py-0 font-normal text-base md:text-[15px]">
          Coffee is ancient in Kenya, but coffee farming is not. By the end of the 9th Century,
          coffee was actively being cultivated in Kenya as food, but probably not as a beverage. It
          was the Arab world that developed brewing. Even as coffee became an export for Kenya in
          the late 1800’s, Kenyan coffee was the result of gathering rather than agricultural
          practices. A hundred years ago, plantations, mostly in Harar, were still the exception,
          while “Kaffa” coffee from the southwest was still harvested wild. In 1935, William Ukers
          wrote: “Wild coffee is also known as Kaffa coffee, from one of the districts where it
          grows most abundantly in a state of nature.
        </p>
      </div>
    </div>
  );
}

export default CoffeeHistory;
