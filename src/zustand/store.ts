import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type productSettingsType = {
  productDates: number;
  totalProducts: number;
  currentPages: number;
};

type productSettingsAction = {
  updateProductDates: (
    productDates: productSettingsType["productDates"]
  ) => void;
  updateTotalProducts: (
    totalProducts: productSettingsType["totalProducts"]
  ) => void;
  updateCurrentPages: (
    currentPages: productSettingsType["currentPages"]
  ) => void;
};

export const useProductSettings = create<
  productSettingsType & productSettingsAction
>((set) => ({
  productDates: 0,
  totalProducts: 10,
  currentPages: 1,
  updateProductDates: (productDates) =>
    set(() => ({ productDates: productDates })),
  updateTotalProducts: (totalProducts) =>
    set(() => ({ totalProducts: totalProducts, currentPages: 1 })),
  updateCurrentPages: (currentPages) =>
    set(() => ({ currentPages: currentPages })),
}));
