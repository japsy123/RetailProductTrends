import { IStackStyles } from "@fluentui/react";

export interface IRetailDashboardStyles {
  dashboardContainer: IStackStyles;
  navbar: IStackStyles;
  loading: IStackStyles;
}

export const dashboardStyles = (): IRetailDashboardStyles => {
  return {
    dashboardContainer: {
      root: {
        backgroundColor: "#faf9f8",
        width: "100vw",
        height: "100vh",
      },
    },
    navbar: {
      root: {
        backgroundColor: "rgb(0, 20, 51)",
        width: "100%",
        height: "50px",
        padding: "10px",
        marginBottom: "25px",
      },
    },
    loading: {
      root: {
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        fontSize: "30px",
        backgroundColor: "#c7e0f4",
      },
    },
  };
};
