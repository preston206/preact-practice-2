import { useState, useRef, useMemo, useContext } from 'preact/hooks';
import { Context } from '../../components/Context';

export function AppPage() {
  const [quantity, setQuantity] = useState(0);
  const quantityRef = useRef(null);

  const { test1, test2 } = useContext(Context);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
  };

  // Use memoization for a potentially expensive calculation
  const formattedQuantity = useMemo(() => {
    // Simulate an expensive operation:
    const formatted = quantity.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    return formatted;
  }, [quantity]);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <div id="quantity" ref={quantityRef}>{formattedQuantity}</div>
      <button onClick={increment}>+</button>

      <div>
        <h2>Context Test</h2>
        <p>{test1}</p>
        <p>{test2}</p>
      </div>
    </div>
  );
}
