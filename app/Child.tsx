"use client";

import { useState, useEffect } from "react";

export default function ChildComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(Math.random());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-4xl">
      <p>1 Counter: {counter}</p>
    </div>
  );
}
