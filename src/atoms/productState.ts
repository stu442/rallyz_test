import { atom } from "recoil";
import { Product } from "../types/productType";

export const productState = atom<Product[]>({
    key: "productState",
    default: [],
});

export const totalProductsState = atom<number>({
    key: "totalProductsState",
    default: 0,
})

export const pageState = atom<number>({
    key: "pageState",
    default: 0,
})