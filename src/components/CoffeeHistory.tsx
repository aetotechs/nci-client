function CoffeeHistory() {
  return (
    <div className="grid grid-rows-2  rounded-[20px] px-5 mx-5   md:flex md:justify-between md:items-center md:gap-12   md:h-[428px]  py-10 md:px-20 my-20 ">
      <div className="md:w-[509px]  bg-coffeehistory h-[357px] bg-cover bg-center rounded-3xl"></div>
      <div className="md:w-[538px] h-[331px]    ">
        <h3 className="font-semibold text-[26px] md:leading-[50px] my-5 md:my-0 md:-mt-2  ">
          History Of Coffee In Kenya
        </h3>
        <p className="leading-[30px] font-normal text-base  ">
          Coffee is ancient in Kenya, but coffee farming is not. By the end of the 9th Century
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
