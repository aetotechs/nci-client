import { ArrowLeft } from 'lucide-react';
import { Badge } from './ui/badge';
import Search from './Search';

function CreateOrder() {
  return (
    <div>
      <div>
        <span>
          <ArrowLeft />
        </span>
        <h3>Create Order for John Doe</h3>
      </div>
      <div className="flex">
        <div>
          <div className="bg-white border border-primary rounded-[8px]">
            <div>
              <div className="flex items-center">
                <h3>CartItems</h3>
                <Badge>1</Badge>
              </div>
              <div>
                <span>OrderTotal</span>
                <span>$25</span>
              </div>
            </div>
            <div>
              <Search/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
