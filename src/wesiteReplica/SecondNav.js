import React from "react";
import DropdownIcon from "./DropdownIcon";

function SecondNav() {
  return (
    <div className="flex px-1">
      <div className="flex space-x-2 lg:space-x-3 text-white">
        <DropdownIcon active title="How-to Tutorials" />
        <DropdownIcon title="Courses" />
        <DropdownIcon title="Guides" />
        <DropdownIcon title="Ebooks" />
        <DropdownIcon title="Student Pricing" />
      </div>
    </div>
  );
}

export default SecondNav;
