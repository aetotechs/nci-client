import { IProduct } from './ProductDetails';

interface IAbout {
  product: IProduct;
}

function AboutCoffee({ product }: IAbout) {
  return (
    <div className="w-[full] flex flex-col px-2 gap-5 my-12  md:px-0 md:flex-row md:gap-10  md:my-24">
      <div className="md:w-[40vw] ">
        <h3 className="font-semibold text-xl md:text-[24px]">About This Coffee</h3>
        <p className="py-1 font-normal leading-5 md:leading-[22.5px] text-[15px] text-black">
          {product?.description || 'Not Available'}
        </p>
        <div className="flex flex-col gap-1 my-1 md:my-2">
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
            <div className="font-medium text-[14px]">
              {' '}
              {product?.producerType || 'Not Available'}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Farm Name</div>{' '}
            <div className="font-medium text-[14px]">{product?.farmName || 'Not Available'}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Processing</div>{' '}
            <div className="font-medium text-[14px]">
              {product?.processingMode || 'Not Available'}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Plant Species</div>
            <div className="font-medium text-[14px] capitalize">
              {product?.specie || 'Not Available'}
            </div>
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
            <div className="font-medium text-[14px]">{product?.bagType || 'Not Available'}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[14px] text-[#585962]">Variety </div>
            <div className="font-medium text-[14px]">{product?.variety || 'Not Available'}</div>
          </div>
        </div>
      </div>
      <div className="bg-aboutcoffee bg-cover bg-center h-[200px] md:w-[606px] md:h-[360px] rounded-[8px]"></div>
    </div>
  );
}

export default AboutCoffee;
