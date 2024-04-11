import { atom } from "recoil";
import { Product } from "../types/productType";

export const productState = atom<Product[]>({
    key: "productState",
    default: [],
});