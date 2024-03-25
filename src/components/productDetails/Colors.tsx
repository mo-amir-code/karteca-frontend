"use client";
import { useQueryContext } from "@/context/QueryContext";
import { quantities } from "@/data";
import { createURL } from "@/utils/services";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";

const Color = ({ colors }: { colors: string[] }) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const {queries, handleSetQueries} = useQueryContext();

  const handleSelectColor = useCallback(
    (color: string) => {
      queries.set("color", color.replace("#", ""));
      handleSetQueries()
      setSelectedColor(color);
    },
    [selectedColor]
  );

  useEffect(() => {
    const color = queries.get("color");

    if (color) {
      queries.set("color", color);
      setSelectedColor(`#${color}`);
    } else {
      queries.set("color", selectedColor.replace("#", ""));
    }
    handleSetQueries();
  }, []);

  return (
    <div className="flex items-center justify-start gap-2">
      {colors.map((color, idx) => (
        <span
          onClick={() => handleSelectColor(color)}
          key={idx}
          style={{ backgroundColor: color }}
          className={`w-6 h-6 rounded-md smooth_transition ${
            selectedColor === color
              ? "shadow-md scale-110 border-primary-color"
              : "hover:shadow-md"
          } border-2 border-transparent`}
        />
      ))}
    </div>
  );
};

const Quantity = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const {queries, handleSetQueries} = useQueryContext();

  const handleSelectQuantity = useCallback(
    (qty: number) => {
      queries.set("quantity", qty.toString());
      handleSetQueries();
      setQuantity(qty);
    },
    [quantity]
  );

  useEffect(() => {
    const quantity = queries.get("quantity");

    if (quantity) {
      queries.set("quantity", quantity);
      setQuantity(parseInt(quantity));
    } else {
      queries.set("quantity", "1");
    }
    handleSetQueries();
  }, []);

  return (
    <div className="flex items-center justify-start gap-2">
      <select value={quantity} onChange={(e)=>handleSelectQuantity(parseInt(e.target.value))} className="hide_scrollbar px-2 outline-none border border-primary-color" >
        {
          quantities.map((qty) => (
            <option key={qty} value={qty} className="" >{qty}</option>
          ))
        }
      </select>
    </div>
  );
};

const Colors = memo(Color);
const SelectQuantity = memo(Quantity);

export {Colors, SelectQuantity};
