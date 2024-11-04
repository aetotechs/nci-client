import { useReducer, useEffect } from 'react';
import { Separator } from '@/components/common/ui/separator';
import clsx from 'clsx';

type State = {
  count: number;
};

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'set'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: Math.max(0, state.count - 1) };
    case 'set':
      return { count: action.payload };
    default:
      return state;
  }
};

type CounterProps = {
  quantity: number;
  className?: string;
  onValueChange: (newValue: number) => void;
};

function Counter({ quantity, className, onValueChange }: CounterProps) {
  const [state, dispatch] = useReducer(reducer, { count: quantity | 1 });

  useEffect(() => {
    onValueChange(state.count);
  }, [state.count]);

  return (
    <div
      className={clsx(
        'flex rounded-xl bg-[#f2f2f2] px-1 items-center justify-around border border-[#dbdcdf]',
        className
      )}
    >
      <div
        onClick={() => dispatch({ type: 'decrement' })}
        className="cursor-pointer text-xl md:text-lg px-1"
      >
        -
      </div>
      <Separator orientation="vertical" className="h-4" />
      <div className="text-[15px] px-1">{state.count}</div>
      <Separator orientation="vertical" className="h-4" />
      <div
        onClick={() => dispatch({ type: 'increment' })}
        className="cursor-pointer text-xl md:text-lg px-1"
      >
        +
      </div>
    </div>
  );
}

export default Counter;
