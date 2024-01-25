import React from "react";
import CustomTabs from "./CustomTabs";

function RandomComponent() {
  return <h1>Random Component</h1>;
}

export default function CustomTabsTest() {
  const tabs = [
    { label: "tab 1", content: <div> 'content 1'</div> },
    { label: "tab 2", content: <div>'content 2' </div> },
    { label: "tab 3", content: <RandomComponent /> },
  ];

  function handleChange(currenttabIndex) {
    console.log(currenttabIndex);
  }

  return <CustomTabs tabsContent={tabs} onChange={handleChange} />;
}
