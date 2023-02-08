import {useProducts} from "@/hooks";
import {UiContext} from "@/pages/_app";
import {useContext, useEffect} from "react";

export const Pagination = () => {
  const {pagination, setPagination} = useContext(UiContext);
  const {products} = useProducts();
  const {page, perPage, total} = pagination;

  useEffect(() => {
    // how many products are in {products}
    setPagination({
      perPage,
      page,
      total: products.length,
    })

  }, [perPage,page, setPagination, products]);

  const pageCount = Math.ceil(total / perPage);

  return <ul className="flex gap-2">
    {Array(pageCount).fill('x').map((_, index) => {
      const i = index + 1

      return <li key={index} >
        <button type="button"
        title={`Page ${i}`}
        className={`border border-zinc-200 p-2 hover:bg-black hover:text-white transition-color
          ${page === i ? 'bg-black text-white' : ''}`}
        onClick={() => {
          setPagination({
            ...pagination,
            page: i,
          })
        }}>
          {i}
        </button>
      </li>
    })}
  </ul>
}
