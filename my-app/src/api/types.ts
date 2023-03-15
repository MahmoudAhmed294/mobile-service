
export type LoginResponse = {
  name: string;
  id: number | null;
  token?:string;
};

export type OrderResponse = {
  date: string;
  problem: string;
  id?: number;
  brand:  string;
  cost: number;
  status: string;
  customer: string;
  paid: boolean;
  phone: string;
};

export interface  OrderDetails  extends OrderResponse {
  model?:string;
  serialNumber: string;
  isInWarranty: boolean;
  cost:number;
  costReceived: number;
  comments?: string;
  maintenancePeriod:number;
  spareParts?:string;
  engineerName:string;
}

export type OrderBillResponse = {
  date: string;
  problem: string;
  id: number;
  brand: {
    brandName: string;
  };
  cost: number;
  costReceived: number;
  remainingCost: number;
  maintenancePeriod: number;
  customer: string;
  serialNumber: string;
  comments: string;
  phone: string;
};

