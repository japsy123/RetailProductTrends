import { SET_PRODUCT_DETAILS } from "./actions";


export function productsReducer(state = [], action: any) {
    switch(action.type) {
        case SET_PRODUCT_DETAILS:
            return {
                action
            }
    }
}