import { useState } from "react";

export function User() {
  const [Use, setUse] = useState(0);
  const add = () => setUse(Use + 1);
  const hasah = () => setUse(Use - 1);
  return (
    <div className="flex  gap-4">
      {Use}
      <button onClick={add}>+</button>
      <button onClick={hasah}>-</button>
    </div>
  );
}
