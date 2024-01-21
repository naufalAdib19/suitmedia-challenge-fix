"use client";
import Hero from "@/components/Hero/Hero";
import TotalProductOptions from "@/components/TotalProductOptions";
import ProductDates from "@/components/DateProductOptions";
import { useProducts } from "@/services/useProduct";
import Pagination from "@mui/material/Pagination";
import CardProduct from "@/components/CardsProduct";
import Loaders from "@/components/Loaders";
import { useProductSettings } from "@/zustand/store";

export default function Home() {
  const currentPage = useProductSettings((state) => state.currentPages);
  const setCurrentPage = useProductSettings(
    (state) => state.updateCurrentPages
  );
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const { data, isLoading }: any = useProducts(currentPage);

  return (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="product mt-12">
        <div
          id="product-settings"
          className="product-settings flex flex-col gap-y-3 md:flex-row md:justify-between md:items-center px-7 md:px-12 mb-12"
        >
          <p>
            Showing {data?.meta?.from} - {data?.meta?.to} of {data?.meta?.total}{" "}
            prouducts
          </p>
          <div className="flex gap-x-5 flex-col md:flex-row gap-y-5">
            <TotalProductOptions />
            <ProductDates />
          </div>
        </div>
        <div className="product-list flex justify-center my-16 px-5 md:px-12">
          <div className=" flex flex-wrap justify-center gap-7">
            {isLoading ? (
              <Loaders />
            ) : (
              data?.data?.map((data: any) => {
                return (
                  <CardProduct
                    key={data.id}
                    props={{
                      id: data.id,
                      image: data.medium_image[0]?.url,
                      date: data.created_at,
                      desc: data.title,
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="pagination flex justify-center mb-12">
        <Pagination
          size="small"
          count={data.meta?.last_page}
          showFirstButton
          showLastButton
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
