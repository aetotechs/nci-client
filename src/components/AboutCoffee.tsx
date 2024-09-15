function AboutCoffee() {
  return (
    <div className="w-[full] flex flex-col px-5  md:px-0 md:flex-row gap-10 my-24 md:my-6">
      <div className="md:w-[579px]">
        <h3 className="font-semibold text-[26px]">About This Coffee</h3>
        <p className="my-2 font-normal text-black">
          The Olam Coffee Estate Company in Kenya was started in 2012. It is both the largest coffee
          producer in Kenya and now the largest employer in the country.
        </p>
        <div className="flex flex-col gap-3 my-4">
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Country of Origin </div>
            <div className="font-medium text-base">Kenya</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Region</div>{' '}
            <div className="font-medium text-base">Sidamo</div>
          </div>

          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Producer Type</div>
            <div className="font-medium text-base"> Washing Station</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Farm Name</div>{' '}
            <div className="font-medium text-base">Various smallholders</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Processing</div>{' '}
            <div className="font-medium text-base">Natural/Dry Processed</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Plant Species</div>
            <div className="font-medium text-base"> Arabica</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Certifications</div>{' '}
            <div className="flex flex-col text-texthighlight font-medium text-base">
              <p>Organic Certified NOP</p>
              <p> FLO Fairtrade Certified</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Bag Type</div>{' '}
            <div className="font-medium text-base">Grain Pro / Ecotact</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Variety </div>
            <div className="font-medium text-base">Kenya Heirloom</div>
          </div>
        </div>
      </div>
      <div className="bg-aboutcoffee bg-cover bg-center h-[300px] md:w-[606px] md:h-[484px] rounded-[8px]"></div>
    </div>
  );
}

export default AboutCoffee;
