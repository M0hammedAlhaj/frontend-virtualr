import React from "react";
import Cart from "./Cart";

const Features = () => {
  const mockCartData = [
    {
      id: 1,
      title: "Drag-and-Drop Interface",
      paragraph:
        "VirtualR’s intuitive drag-and-drop interface allows users to organize tasks, files, and workflows with ease — no training required.",
    },
    {
      id: 2,
      title: "Real-time Collaboration",
      paragraph:
        "Collaborate with your team in real time. Changes are synced instantly across all devices, keeping everyone on the same page.",
    },
    {
      id: 3,
      title: "Custom Workflows",
      paragraph:
        "Design your own process. VirtualR lets you build tailored workflows that match your team’s exact needs — from Kanban to Agile.",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      paragraph:
        "Gain insights with an integrated dashboard. Track team productivity, monitor project timelines, and make data-driven decisions.",
    },
    {
      id: 5,
      title: "Secure Cloud Storage",
      paragraph:
        "All your data is stored securely in the cloud, with end-to-end encryption and daily backups — your work is always safe with VirtualR.",
    },
    {
      id: 6,
      title: "Integrated Notifications",
      paragraph:
        "Stay in the loop with customizable notifications. Whether it’s task updates or team mentions, VirtualR keeps you informed in real time.",
    },
  ];

  return (
    <div
      className="  h-96 flex
       flex-col px-30 justify-around 
      gap-12 items-center"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-center">
        Easily build <span className="text-amber-800">your code</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {mockCartData.map((item) => (
          <Cart key={item.id} title={item.title} pargraph={item.paragraph} />
        ))}
      </div>
    </div>
  );
};

export default Features;
