"use client";
import { createURL } from "@/utils/services";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";

const Colors = ({ colors }: { colors: string[] }) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queries = new URLSearchParams(searchParams.toString());

  const handleSelectColor = useCallback(
    (color: string) => {
      queries.set("color", color.replace("#", ""));
      const queryUrl = createURL(pathname, queries);
      router.push(queryUrl, { scroll: false });
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
    const queryUrl = createURL(pathname, queries);
    router.push(queryUrl, { scroll: false });
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

export default memo(Colors);
