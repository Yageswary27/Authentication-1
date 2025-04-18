import React from 'react';
import UserProfile from '../components/usersettings/UserProfiles';
import BillingDetails from '../components/usersettings/BillingDetails';
import BillingHistory from '../components/BillingHistorys/BillingHistorys';

const Usersetting: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 min-h-screen bg-gray-100">
      <div>
      <UserProfile />
      </div>
      <div>
      <BillingHistory />
      </div>
        <div>
        <BillingDetails />
        </div>
    </div>
  );
};

export default Usersetting;
