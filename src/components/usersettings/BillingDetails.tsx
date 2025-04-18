import React from 'react';
import { CreditCard, Calendar, CheckCircle } from 'lucide-react';

const BillingDetails: React.FC = () => {
  const billingInfo = {
    current_plan: "pro",
    billing_cycle: "monthly",
    next_billing_date: "2024-03-20",
    payment_method: {
      type: "Visa",
      last4: "4242",
      expiry: "12/25",
    },
    usage: {
      scans_this_month: 50,
      websites_monitored: 5,
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-2xl shadow-lg border border-gray-200 mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
        <CreditCard className="w-4 h-4 text-blue-600" />
        Billing Details
      </h2>

      {/* Plan and Billing Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg shadow-sm p-4 border">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Current Plan</h3>
          <div className="text-blue-600 font-semibold text-base capitalize">{billingInfo.current_plan}</div>
        </div>
        <div className="bg-gray-50 rounded-lg shadow-sm p-4 border">
          <h3 className="text-gray-500 text-sm font-medium mb-1">Billing Cycle</h3>
          <div className="text-gray-700 font-medium capitalize">{billingInfo.billing_cycle}</div>
        </div>
        <div className="bg-gray-50 rounded-lg shadow-sm p-4 border sm:col-span-2">
          <h3 className="text-gray-500 text-sm font-medium mb-1 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            Next Billing Date
          </h3>
          <div className="text-gray-700 font-medium">{billingInfo.next_billing_date}</div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-gray-50 rounded-lg shadow-sm border p-4 mb-6">
        <h3 className="text-gray-500 text-sm font-medium mb-2 flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-gray-400" />
          Payment Method
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="text-gray-800">
            💳 {billingInfo.payment_method.type} ending in <strong>{billingInfo.payment_method.last4}</strong>
          </div>
          <div className="text-sm text-gray-600">Expiry: {billingInfo.payment_method.expiry}</div>
        </div>
      </div>

      {/* Usage Section */}
      <div className="bg-gray-50 rounded-lg shadow-sm border p-4 space-y-3">
        <h3 className="text-gray-500 text-sm font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-gray-400" />
          Usage
        </h3>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Scans This Month:</span>
          <span className="text-indigo-700 font-semibold">{billingInfo.usage.scans_this_month}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Websites Monitored:</span>
          <span className="text-indigo-700 font-semibold">{billingInfo.usage.websites_monitored}</span>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
