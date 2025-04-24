import React from "react";
import { CreditCard, CheckCircle } from "lucide-react";

interface BillingInfo {
  current_plan: string;
  billing_cycle: string;
  next_billing_date: string;
  payment_method: {
    type: string;
    last4: string;
    expiry: string;
  };
  usage: {
    scans_this_month: number;
    websites_monitored: number;
  };
}

const billingInfo: BillingInfo = {
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

const BillingDetailsCard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-6 py-8 bg-white rounded-2xl shadow-xl border border-blue-200">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-3">
        <CreditCard className="w-6 h-6 text-blue-600" />
        Billing Details
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Plan Details */}
        <div className="flex-1 bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-4 text-blue-700 font-medium">
            <CreditCard className="w-5 h-5" />
            Plan Details
          </div>
          <div className="text-blue-900 font-semibold capitalize mb-2">
            Plan: {billingInfo.current_plan}
          </div>
          <div className="text-blue-900 font-semibold capitalize mb-2">
            Billing Cycle: {billingInfo.billing_cycle}
          </div>
          <div className="text-blue-900 font-semibold">
            Next Billing Date: {billingInfo.next_billing_date}
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex-1 bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-4 text-blue-700 font-medium">
            <CreditCard className="w-5 h-5" />
            Payment Method
          </div>
          <div className="text-blue-900 font-semibold mb-2">
            💳 {billingInfo.payment_method.type} ending in{" "}
            <strong>{billingInfo.payment_method.last4}</strong>
          </div>
          <div className="text-sm text-blue-700">
            Expiry: {billingInfo.payment_method.expiry}
          </div>
        </div>

        {/* Usage Summary */}
        <div className="flex-1 bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-4 text-blue-700 font-medium">
            <CheckCircle className="w-5 h-5" />
            Usage Summary
          </div>
          <div className="text-blue-900 font-semibold mb-2">
            Scans This Month: {billingInfo.usage.scans_this_month}
          </div>
          <div className="text-blue-900 font-semibold">
            Websites Monitored: {billingInfo.usage.websites_monitored}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetailsCard;
