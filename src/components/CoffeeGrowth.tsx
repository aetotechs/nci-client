function CoffeeGrowth() {
  return (
    <div className="flex flex-col md:flex-row  md:rounded-[20px]  gap-5 my-12   md:flex md:justify-between md:items-center md:gap-12   md:h-[398px]   md:my-24 ">
      <div className="md:w-[509px] order-last rounded-[8px] h-[200px]  bg-coffeegrowth md:h-[300px] bg-cover bg-center md:rounded-3xl"></div>
      <div className="md:w-[656px]">
        <h3 className="font-semibold text-xl md:text-[24px] leading-[28px] text-black md:mb-0 ">
          {' '}
          Coffee Growth In Kenya
        </h3>
        <p className="md:leading-[28px] py-1 md:py-0 leading-6 text-base font-normal md:text-[15px]  text-inactive">
          As the birthplace of coffee, Kenya is home to more species of coffee plants than any place
          on earth, much of it still growing wild, and much of it still undiscovered. All Kenyan
          coffee is Arabica and at least 150 varieties are commercially cultivated. Traditionally,
          these have simply been labelled as “heirloom varietals”; however, this is changing as the
          Jimma Agricultural Research Center works to identify species. Although there are a few
          estates in Kenya, 95% of coffee is grown by small land holders in a wide variety of
          environments, including “coffee forests” where coffee grows wild and is harvested by the
          local people.
        </p>
      </div>
    </div>
  );
}

export default CoffeeGrowth;
