import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

function DropdownIcon({ title, active}) {
  return (
    <div className={`inputIcon ${active && "text-green-400"}`}>
      <span className="items-center cursor-pointer">{title}</span>
      <ChevronDownIcon className="h-4 mt-1" />
    </div>
  );
}

export default DropdownIcon;
