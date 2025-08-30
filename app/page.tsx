"use client"
import { useState } from "react";

function Tree({size}: {size: number}){
  return(
    <div className="flex flex-col items-center">
      <div className="bg-green-600" style={{
        width: `${size * 10 + 10}px`,
        height: `${size * 10 + 10}px`
      }}></div>
      <div className="bg-[#8f6036]" style={{
        width: `${size * 1 + 5}px`,
        height: `${size * 10 + 10}px`
      }}></div>
    </div>
  )
}

export default function Home() {
  const [size, setSize] = useState(1)

  return (
    <div className="flex justify-center h-screen items-center">
      <div onClick={() => {
        setSize(size+1)
      }}>
        <h1>Click on the tree</h1>
        <Tree size={size} />
      </div>
    </div>
  );
}
