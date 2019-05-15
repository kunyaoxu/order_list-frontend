export interface IOrderFormData extends Object {
  name: string;
  address: string;
  email: string;
  product_ids: Array<number>;
}