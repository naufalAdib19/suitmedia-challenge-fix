"use client";
import { useEffect, useState, useCallback } from "react";
import { useProductSettings } from "@/zustand/store";
import axios from "axios";
import { convertProductDates } from "./productDatesConvertToString";

export const useProducts = (currentPages: number = 1) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const productsDate = useProductSettings((state) => state.productDates);
  const totalProducts = useProductSettings((state) => state.totalProducts);
  const API = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPages}&page[size]=${totalProducts}&append[]=small_image&append[]=medium_image&sort=${convertProductDates(productsDate)}`;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API);
      setData(response.data);
      setIsLoading(false);
      window.location.href = "#product-settings";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productsDate, totalProducts, currentPages]);

  return {
    data,
    isLoading,
  };
};
