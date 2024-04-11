import { atom } from "recoil";
import { Products } from "../types/productType";

export const productState = atom<Products>({
    key: "productState",
    default: {
        products: [],
        total: 0,
        skip: 0,
        limit: 0
    },
});