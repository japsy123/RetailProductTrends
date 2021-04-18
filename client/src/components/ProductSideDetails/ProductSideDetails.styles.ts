import { IStackStyles } from "@fluentui/react"

export interface IProductSideDetails {
    sidePanel: IStackStyles;
}

 export const productSideStyles = (): IProductSideDetails  => {

    return {
        sidePanel: {
           root: {
               width: "260px",
               height: "80vh",
               margin: '15px',
               border: '1px solid white',
               backgroundColor: 'white',
               boxShadow: 'rgb(0 0 0 / 13%) 0px 1.6px 3.6px 0px, rgb(0 0 0 / 11%) 0px 0.3px 0.9px 0px'
           }
        }
    }
}