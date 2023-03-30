import type { ReactNode } from "react";
import { useState } from "react";

export default function Expand({ children }: { children: ReactNode }) {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="mt-4">
      <button className="text-green-600 underline" onClick={handleExpand}>
        {isExpanded ? "See Less..." : "See More..."}
      </button>
      <div className={!isExpanded ? "hidden" : ""}>{children}</div>
    </div>
  );
}
