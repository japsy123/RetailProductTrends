import { createSelector } from "reselect";
import { IProductInfo, IProductState } from "../../store/reducers";

export interface IProductSideDetails {
  tags: [];
  image: string;
  subtitle: string;
  title: string;
}

export const productSideDetails = createSelector<
  IProductState,
  IProductInfo,
  IProductSideDetails
>(
  (state) => state.productInfo[0],
  function (product) {
    return {
      tags: product.tags,
      image: product.image,
      subtitle: product.subtitle,
      title: product.title,
    };
  }
);
