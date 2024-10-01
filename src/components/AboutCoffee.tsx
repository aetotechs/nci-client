function AboutCoffee() {
  return (
    <div className="w-[full] flex flex-col px-5  md:px-0 md:flex-row gap-10  my-24">
      <div className="md:w-[40vw] ">
        <h3 className="font-semibold text-[24px]">About This Coffee</h3>
        <p className="py-1 font-normal text-[15px] text-black">
          The Olam Coffee Estate Company in Kenya was started in 2012. It is both the largest coffee
          producer in Kenya and now the largest employer in the country.
        </p>
        <div className="flex flex-col gap-1 my-2">
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Country of Origin </div>
            <div className="font-medium text-[14px]">Kenya</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Region</div>{' '}
            <div className="font-medium text-[14px]">Sidamo</div>
          </div>

          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Producer Type</div>
            <div className="font-medium text-[14px]"> Washing Station</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Farm Name</div>{' '}
            <div className="font-medium text-[14px]">Various smallholders</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Processing</div>{' '}
            <div className="font-medium text-[14px]">Natural/Dry Processed</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Plant Species</div>
            <div className="font-medium text-[14px]"> Arabica</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Certifications</div>{' '}
            <div className="flex flex-col text-texthighlight font-medium text-[14px]">
              <p>Organic Certified NOP</p>
              <p> FLO Fairtrade Certified</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Bag Type</div>{' '}
            <div className="font-medium text-[14px]">Grain Pro / Ecotact</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Variety </div>
            <div className="font-medium text-[14px]">Kenya Heirloom</div>
          </div>
        </div>
      </div>
      <div className="bg-aboutcoffee bg-cover bg-center h-[300px] md:w-[606px] md:h-[360px] rounded-[8px]"></div>
    </div>
  );
}

export default AboutCoffee;
