import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type productSettingsType = {
  productDates: number;
  totalProducts: number;
};

type productSettingsAction = {
  updateProductDates: (
    productDates: productSettingsType["productDates"]
  ) => void;
  updateTotalProducts: (
    totalProducts: productSettingsType["totalProducts"]
  ) => void;
};

export const useProductSettings = create<
  productSettingsType & productSettingsAction
>((set) => ({
  productDates: 0,
  totalProducts: 10,
  updateProductDates: (productDates) =>
    set(() => ({ productDates: productDates })),
  updateTotalProducts: (totalProducts) =>
    set(() => ({ totalProducts: totalProducts })),
}));
