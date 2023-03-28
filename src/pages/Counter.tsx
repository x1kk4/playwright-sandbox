import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter</p>
    </div>
  );
};

export default Counter;
