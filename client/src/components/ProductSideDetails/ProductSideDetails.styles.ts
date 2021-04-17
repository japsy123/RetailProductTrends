import { IStackStyles } from "@fluentui/react"

export interface IProductSideDetails {
    sidePanel: IStackStyles;
}

 export const productSideStyles = (): IProductSideDetails  => {

    return {
        sidePanel: {
           root: {
               width: "20%",
               height: "70vh",
               margin: '15px',
               border: '1px solid white',
               backgroundColor: 'white'
           }
        }
    }
}