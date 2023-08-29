"use client";

import Card from "@/components/Card";
import React from "react";

export default function Page() {
  const primaryAction = () => {};
  const secondaryAction = () => {};
  return (
    <div className="flex flex-col items-center justify-center">
      page 1
      <Card
        title="Card Title"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        primaryActionTitle="Button"
        secondaryActionTitle="Button"
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
    </div>
  );
}
