import { useReducer, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';

type State = {
  count: number;
};

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set'; payload: number };

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
  className?: string;
  onValueChange: (newValue: number) => void; 
};

function Counter({ className, onValueChange }: CounterProps) {
  const [state, dispatch] = useReducer(reducer, { count: 1 }); 

  useEffect(() => {
    onValueChange(state.count);
  }, [state.count, onValueChange]);

  return (
    <div
      className={clsx(
        'flex rounded-xl bg-[#f2f2f2] px-1 items-center justify-around border border-[#dbdcdf]',
        className
      )}
    >
      <div
        onClick={() => dispatch({ type: 'decrement' })}
        className="cursor-pointer text-xl md:text-lg"
      >
        -
      </div>
      <Separator orientation="vertical" className="h-4" />
      <div className="text-[15px]">{state.count}</div>
      <Separator orientation="vertical" className="h-4" />
      <div
        onClick={() => dispatch({ type: 'increment' })}
        className="cursor-pointer text-xl md:text-lg"
      >
        +
      </div>
    </div>
  );
}

export default Counter;
