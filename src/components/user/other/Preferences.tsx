import { Switch } from '@/components/common/ui/switch';

function Preferences() {
  return (
    <div className="flex flex-col gap-3 md:max-w-[30vw]">
      <div className="flex items-center justify-between">
        <div className="md:w-[20vw]">
          <h5 className="font-semibold text-sm">Order Notifications</h5>
          <p className="font-normal text-[13px] text-textmuted">
            Receive email alerts when a new order is placed
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="order" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="md:w-[20vw]">
          <h5 className="font-semibold text-sm">Stock Alerts</h5>
          <p className="font-normal text-[13px]  text-textmuted">
            Receive notifications for stock-related events, such as low inventory
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="stock" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="md:w-[20vw]">
          <h5 className="font-semibold text-sm">Transaction Alerts</h5>
          <p className="font-normal text-[13px]  text-textmuted">
            Receive notifications when payments are processed
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="transactions" />
        </div>
      </div>
    </div>
  );
}

export default Preferences;
