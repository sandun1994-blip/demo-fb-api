import Image from "next/image";
import React from "react";
import GroupItem from "./GroupItem";

export default function SideBar() {
  const groups = [
    { id: 1, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 2, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 3, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 4, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 5, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 6, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 7, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 8, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 9, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 10, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 11, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 12, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 13, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 14, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
    { id: 15, name: "My Facebook Group", image: "/assets/images/fb-group.png" },
  ];

  return (
    <div className="h-[88vh] rounded-xl transition-transform -translate-x-full sm:translate-x-0 bg-white p-2 shadow-md shadow-black/5">
      <h3 className="text-md font-semibold text-center py-2">
        Facebook Groups ({groups.length})
      </h3>
      <div className="flex flex-col gap-2 rounded-xl bg-sky-50 h-[92%] p-2 overflow-y-scroll ">
        {groups.map((group) => (
          <GroupItem
            key={group.id}
            id={group.id}
            name={group.name}
            image={group.image}
          />
        ))}
      </div>
    </div>
  );
}
