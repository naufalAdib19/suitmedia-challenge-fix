import * as React from "react";
import { useProductSettings } from "@/zustand/store";

export default function TotalProductOptions() {
  const totalProducts = useProductSettings((state) => state.totalProducts);
  const updateTotalProducts = useProductSettings(
    (state) => state.updateTotalProducts
  );

  return (
    <div className="flex gap-x-3 items-center">
      <label>Show Products</label>
      <select
        name="totalProducts"
        id="totalProducts"
        className="border border-slate-300 rounded-full min-w-[100px] py-2 px-3"
        defaultValue={totalProducts}
        onChange={(event) =>
          updateTotalProducts(parseInt(event.currentTarget.value))
        }
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}
