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
};

interface ProductProps {
  product: IProduct;
  skeleton?: boolean;
}

interface IProductDetails {
  product: IProduct;
}

interface IAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  updatedAt: string | null;
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  position: string;
  company: string;
  companyWebsiteUrl: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  userId: string;
  verified: boolean;
  workPhone: string;
  address: IAddress;
}

interface ICartItem {
  product: IProduct;
  quantity: number;
  selected: boolean;
}

export type { IProduct, ProductProps, IProductDetails, IAddress, IUser, ICartItem };
