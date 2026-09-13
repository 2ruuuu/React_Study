import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

const Controller = () => {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
};

export default Controller;
