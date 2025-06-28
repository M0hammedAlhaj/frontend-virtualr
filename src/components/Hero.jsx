import React from 'react'
import VideoOne from "../assets/video1.mp4";
import VideoTwo from "../assets/video2.mp4";
const Hero = () => {
  return (
          <div className="text-center  flex flex-col justify-center gap-16 px-20 items-center ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold   ">
            VirtualR build tools{" "}
            <span className="text-amber-700">for developers</span>
          </h1>
          <p className="max-w-5xl">
            Empower your creativity and bring your VR app ideas to life with our
            bring your VR empower your creativity and bring your VR app ideas to
            life with our bring your VRmpower your creativity and bring your VR
            app ideas to life with our bring your VR empower your creativity and
            bring your VR app ideas to life with our bring your VR{" "}
          </p>
          <div className="flex gap-6">
            <button className="btn-primary">Start for free</button>
            <button className="btn-secondary">Documentation</button>
          </div>
          <div className="flex  gap-6 justify-center items-center">
            <video
              src={VideoOne}
              className="size-1/3 "
              controls
            />
            <video
              src={VideoTwo}
              className="size-1/3 "
              controls
            />
          </div>{" "}
        </div>

  )
}

export default Hero
