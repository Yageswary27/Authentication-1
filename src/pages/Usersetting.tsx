import React from 'react';
import UserProfile from '../components/usersettings/UserProfiles';
import BillingDetails from '../components/usersettings/BillingDetails';
import BillingHistory from '../components/BillingHistorys/BillingHistorys';

const Usersetting: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Profile */}
        <div className="col-span-1">
          <UserProfile />
        </div>

        {/* Billing History */}
        <div className="col-span-2">
          <BillingHistory />
        </div>

        {/* Billing Details */}
        <div className="col-span-3">
          <BillingDetails />
        </div>
      </div>
    </div>
  );
};

export default Usersetting;
