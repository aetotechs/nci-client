
type IProduct = {
    flavor: string;
    name: string;
    lotNumber: string;
    stockAvailable: boolean;
    description: string;
    stockCount: number;
    unitPrice: number;
    wareHouse: string;
    status: string;
    sampleCount: number;
    sampleUnitPrice: number;
    processingMode: string;
    sampleAvailable: boolean;
    quantity: number;
    specie: string;
    bagType: string;
    variety: string;
    farmName: string;
    producerType: string;
    itemId: string;
  }

  interface ProductProps {
    index?: any,
    product: IProduct
  }


export type{
    IProduct,
    ProductProps
}