import { useReducer } from 'react';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';

type State = {
  count: number;
};

type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: Math.max(0, state.count - 1) };
    default:
      return state;
  }
};

type CounterProps = {
  className?: string;
};

function Counter({ className }: CounterProps) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div
      className={clsx(
        'flex rounded-xl bg-[#f2f2f2] px-1 items-center justify-around  border border-[#dbdcdf]',

        className
      )}
    >
      <div onClick={() => dispatch({ type: 'decrement' })} className="cursor-pointer">
        -
      </div>
      <Separator orientation="vertical" className="h-4" />
      <div className="text-[15px] ">{state.count}</div>
      <Separator orientation="vertical" className="h-4" />
      <div onClick={() => dispatch({ type: 'increment' })} className="cursor-pointer">
        +
      </div>
    </div>
  );
}

export default Counter;
