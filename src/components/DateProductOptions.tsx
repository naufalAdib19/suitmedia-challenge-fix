import * as React from "react";
import { useProductSettings } from "@/zustand/store";

export default function ProductDates() {
  const productsDate = useProductSettings((state) => state.productDates);
  const updateProductDates = useProductSettings(
    (state) => state.updateProductDates
  );

  return (
    <div className="flex gap-x-3 items-center">
      <label>Product Date</label>
      <select
        name="productDates"
        id="productDates"
        className="border border-slate-300 rounded-full min-w-[100px] py-2 px-3"
        defaultValue={productsDate}
        onChange={(e) => updateProductDates(parseInt(e.currentTarget.value))}
      >
        <option value={0}>Oldest</option>
        <option value={1}>Newest</option>
      </select>
    </div>
  );
}
