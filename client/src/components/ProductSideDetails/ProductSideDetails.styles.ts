import { IStackStyles, ITextStyles } from "@fluentui/react"

export interface IProductSideDetails {
    sidePanel: IStackStyles;
    tagsContainer: IStackStyles;
    info: IStackStyles;
    subInfo: IStackStyles;
}

 export const productSideStyles = (): IProductSideDetails  => {

    return {
        sidePanel: {
           root: {
               width: "30vw",
               height: "80vh",
               margin: '15px',
               paddingTop: '15px',
               border: '1px solid white',
               backgroundColor: 'white',
               boxShadow: 'rgb(0 0 0 / 13%) 0px 1.6px 3.6px 0px, rgb(0 0 0 / 11%) 0px 0.3px 0.9px 0px',
               alignItems: 'center'
           }
        },
        info: {
            root: {
                justifyContent: 'center',
                alignItems: 'center',
                'span:first-child': {
                    fontSize: '16px',
                    fontWeight: '800'
                }
            }
        },
        tagsContainer: {
            root: {
                borderTop: '1px solid #e1dfdd',
                borderBottom: '1px solid #e1dfdd',
                padding: '10px',
                height: 'auto',
                width: '100%',
                flexWrap: 'wrap'
            }
        },
        subInfo: {
            root: {
                padding: '5px',
                textAlign: 'center',
                color: '#bebbb8',
                fontWeight: 600,
                width: '200px',
                fontSize: '12px'
            }
        }
    }
}