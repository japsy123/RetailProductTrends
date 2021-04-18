import { IStackStyles } from "@fluentui/react";

export interface IProductTagStyles {
  tag: IStackStyles;
}

export const productTagStyles = (): IProductTagStyles => {
  return {
    tag: {
      root: {
        border: "1px solid #e1dfdd",
        borderRadius: "3px",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        height: "25px",
        fontSize: "12px",
        marginRight: "10px",
        marginBottom: "6px",
      },
    },
  };
};
