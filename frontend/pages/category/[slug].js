import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {fetchDataFromApi} from "@/utils/api";
import useSWR from "swr";

const maxResult = 9;
const category = ({category, products, slug}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const {query} = useRouter();

  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  const {data, error, isLoading} = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[500px] mx-auto mt-8 md:mt-0">
          <div className="text-[40px] md:text-[50px]  mb-5 rounded-full font-extrabold drop-shadow-xl  leading-tight text-red-500 capitalize">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          ;
          {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
        </div>

        {/* PAGINATION BUTTONS START */}
        {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded-lg py-2 px-4 bg-red-500 text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded-lg py-2 px-4 bg-red-500 text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/mm7.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default category;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  const paths = category.data.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({params: {slug}}) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );

  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
