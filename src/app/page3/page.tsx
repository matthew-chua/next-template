"use client";

import Tabs from "@/components/Tabs";
import React, { useState } from "react";

export default function Page() {

  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="flex flex-col justify-center items-center">
      <Tabs label1="TEST 1" label2="TEST 2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === 0 ? "TEST 1" : "TEST 2"}
    </div>
  );
}
