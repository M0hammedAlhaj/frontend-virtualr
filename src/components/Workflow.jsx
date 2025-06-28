import React from "react";
import Code from "../assets/code.jpg";
import Cart from "./Cart";
const Workflow = () => {
  const mockFeatures = [
    {
      id: 1,
      text: "Fast Setup",
      pargraph: "Start coding instantly with pre-configured environments.",
    },
    {
      id: 2,
      text: "Real-time Collaboration",
      pargraph: "Work with teammates in real time, just like Google Docs.",
    },
    {
      id: 3,
      text: "Built-in Preview",
      pargraph: "See your changes live with instant browser preview.",
    },
    {
      id: 4,
      text: "One-click Deploy",
      pargraph: "Deploy your app to production with a single click.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-12 items-center justify-center">
        <h1 className="txt-primary">
          Accelerate your
          <span className="text-amber-700">coding overflow</span>
        </h1>
        <div className="flex items-center justify-center gap-12 ">
          <img src={Code} className="size-1/2" />
          <ul className="flex flex-col gap-6">
            {mockFeatures.map((item) => (
              <Cart key={item.id} title={item.text} pargraph={item.pargraph} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Workflow;
