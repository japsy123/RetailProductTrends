export const LOAD_PRODUCT_DETAILS = "LOAD_PRODUCT_DETAILS";
export const SET_PRODUCT_DETAILS = "LOAD_PRODUCT_DETAILS_SUCCESS";

export interface IProductAction {
    type: string;
    id: string;
    payload: {
      productInfo: [
        {
          brand: string;
          details: [];
          id: string;
          image: string;
          retailer: string;
          reviews: [];
          sales: [];
          subtitle: string;
          tags: [];
          title: string;
        }
      ];
    };
  }