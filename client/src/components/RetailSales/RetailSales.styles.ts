import { IStackStyles, ITextStyles } from "@fluentui/react";

export interface IRetailSalesStyles {
  salesContainer: IStackStyles;
  header: ITextStyles;
}

export const retailSalesStyles = (): IRetailSalesStyles => {
  return {
    salesContainer: {
      root: {
        width: "auto",
        margin: "15px",
        height: "600px",
        border: "1px solid white",
        backgroundColor: "white",
        boxShadow:
          "rgb(0 0 0 / 13%) 0px 1.6px 3.6px 0px, rgb(0 0 0 / 11%) 0px 0.3px 0.9px 0px",
      },
    },
    header: {
      root: {
        fontSize: "20px",
        padding: "15px",
        marginBottom: "30px",
        fontWeight: "400",
      },
    },
  };
};
