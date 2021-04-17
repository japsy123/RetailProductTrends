import { SET_PRODUCT_DETAILS } from "./actions";

export interface IProductInfo {
    brand: string,
            details: [],
            id: string,
            image: string,
            retailer: string,
            reviews:[],
            sales:[],
            subtitle: string,
            tags:[],
            title: string
}
export interface IProductState {
    productInfo: [
        {
            brand: string,
            details: [],
            id: string,
            image: string,
            retailer: string,
            reviews:[],
            sales:[],
            subtitle: string,
            tags:[],
            title: string
        }
    ]
}
export interface IProductAction {
    type: string,
    id: string,
    payload: {
        productInfo: [
            {
                brand: string,
                details: [],
                id: string,
                image: string,
                retailer: string,
                reviews:[],
                sales:[],
                subtitle: string,
                tags:[],
                title: string
            }
        ]
    }
}
export const initialState: IProductState = {
    productInfo: [
        {
            brand: '',
            details: [],
            id: '',
            image: '',
            retailer: '',
            reviews:[],
            sales:[],
            subtitle: '',
            tags:[],
            title: ''
        }
    ]
};

export function productsReducer(state:IProductState = initialState, action: IProductAction) {
    switch(action.type) {
        case SET_PRODUCT_DETAILS:
            return {
                productInfo: action.payload.productInfo
            }
        default:
            return state;
    }
}