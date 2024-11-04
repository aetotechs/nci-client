import React from 'react';
import { Separator } from '@/components/common/ui/separator';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

function Progress() {
  const location = useLocation();

  const steps = [
    { paths: ['/cart'], label: 'Cart' },
    { paths: ['/shipping-address'], label: 'Address' },
    { paths: ['/shop-payment'], label: 'Payment' }
  ];

  const getStepIndex = () => {
    return steps.findIndex((step) => step.paths.includes(location.pathname));
  };

  const currentStepIndex = getStepIndex();

  return (
    <div className="flex items-center md:gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <div>
            <Link
              to={step.paths[0]}
              className={clsx('text-sm  ', {
                'text-primary underline font-semibold ': index <= currentStepIndex,
                'text-inactive': index > currentStepIndex
              })}
            >
              {step.label}
            </Link>
          </div>
          {index < steps.length - 1 && (
            <Separator
              className={clsx('w-[70px] h-[2px] mx-2  md:w-44', {
                'bg-primary': index < currentStepIndex
              })}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Progress;
