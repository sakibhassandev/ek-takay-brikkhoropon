"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { expenses } from "@/app/dummyData";
import { ExpensesRow } from "@/app/components/ui/expenses/ExpensesRow";

export const ExpensesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTransactions = showAll ? expenses : expenses.slice(0, 15);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="mb-8 text-center text-4xl text-black font-medium">
        ব্যয়ের খাত
      </h1>

      <div className="bg-white rounded-lg overflow-hidden max-sm:overflow-x-scroll border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-[#EDF5FF]">
              <th className="py-3 px-6 text-left font-medium">তারিখ</th>
              <th className="py-3 px-6 text-left font-medium">পরিমাণ</th>
              <th className="py-3 px-6 text-left font-medium">বিবরণ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <AnimatePresence>
              {displayedTransactions.map((transaction, index) => (
                <ExpensesRow
                  key={transaction.id}
                  transaction={transaction}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {expenses.length > 15 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full p-4 flex bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 items-center justify-center gap-1 text-blue-700 transition-colors"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
