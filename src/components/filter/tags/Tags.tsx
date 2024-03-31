"use client"
import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { useQueryContext } from "@/context/QueryContext";
import { filterTagFields } from "@/utils/services";

export type FilterFieldType = {
  field: string,
  value: string | string[]
}

const Tags = () => {
  const {queries} = useQueryContext();
  const sort = queries.get("sort");
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const sort = queries.get("sort");
    const categories = queries.get("category");
    const discount = queries.get("discount");
    const rating = queries.get("rating");
    const minPrice = queries.get("minvalue");
    const maxPrice = queries.get("maxvalue");

    let fltrs = [...filters];
    if(sort) fltrs = [...fltrs, `${sort} products`];
    if(discount) fltrs = [...fltrs, `${discount} % off`];
    if(rating) fltrs = [...fltrs, `${discount}% off`];
    if(minPrice) fltrs = [...fltrs, `${minPrice} Min. Price`];
    if(maxPrice) fltrs = [...fltrs, `${maxPrice} Max. Price`];
    

    // setFilters(fltrs);
  },  [queries]);

  return (
    <>
    {
      filters.map((filter, idx) => <Tag key={idx} text={filter} />)
    }
    </>
  );
};

export default Tags;
