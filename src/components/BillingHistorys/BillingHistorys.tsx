import React from "react";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "paid" | "refunded" | "pending";
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01T10:00:00Z",
    description: "Subscription renewal",
    amount: 99.99,
    status: "paid",
  },
  {
    id: "2",
    date: "2023-09-15T14:30:00Z",
    description: "Service refund",
    amount: -49.99,
    status: "refunded",
  },
  {
    id: "3",
    date: "2023-08-20T09:15:00Z",
    description: "Pending payment",
    amount: 199.99,
    status: "pending",
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-green-100 text-green-700";
    case "refunded":
      return "bg-red-100 text-red-700";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BillingHistoryTable: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-white rounded-3xl shadow-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Billing History
      </h2>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-right">Amount</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 font-medium text-gray-800">{tx.id}</td>
                <td className="px-6 py-4 text-gray-700">
                  {formatDate(tx.date)}
                </td>
                <td className="px-6 py-4 text-gray-600">{tx.description}</td>
                <td
                  className={`px-6 py-4 text-right font-semibold ${
                    tx.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${getStatusStyle(
                      tx.status
                    )}`}
                  >
                    {tx.status === "pending"
                      ? "Pending Payment"
                      : tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingHistoryTable;
