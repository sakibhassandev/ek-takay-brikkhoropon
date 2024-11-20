"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { collections } from "@/app/dummyData";
import { Collections } from "@/app/lib/definitions";

export const CollectionPage = () => {
  const [transactions] = useState<Collections[]>(collections);
  const [searchId, setSearchId] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    const idMatch =
      transaction.id.toLowerCase().includes(searchId.toLowerCase()) ||
      transaction.fullId.toLowerCase().includes(searchId.toLowerCase());
    const phoneMatch =
      transaction.phone.toLowerCase().includes(searchPhone.toLowerCase()) ||
      transaction.fullPhone.toLowerCase().includes(searchPhone.toLowerCase());
    return idMatch && phoneMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-screen-lg rounded-lg bg-white p-6 shadow-lg"
    >
      <h1 className="mb-6 text-center text-2xl font-bold">সংগ্রহ</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-6 grid gap-4 md:grid-cols-2"
      >
        <div className="relative">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="লেনদেন আইডি দ্বারা অনুসন্ধান করুন"
            className="w-full rounded-md border border-gray-300 p-2 pr-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Search by Transaction ID"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
            placeholder="ফোন নম্বর দ্বারা অনুসন্ধান করুন"
            className="w-full rounded-md border border-gray-300 p-2 pr-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Search by Phone Number"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted text-left">
              <th className="whitespace-nowrap p-3 font-medium">লেনদেন আইডি</th>
              <th className="whitespace-nowrap p-3 font-medium">
                লেনদেনের সময়
              </th>
              <th className="whitespace-nowrap p-3 font-medium">মাধ্যম</th>
              <th className="whitespace-nowrap p-3 font-medium">পরিমাণ</th>
              <th className="whitespace-nowrap p-3 font-medium">
                ফোন/একাউন্ট নম্বর
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <motion.tr
                key={transaction.fullId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 hover:bg-muted/50"
              >
                <td className="p-3">{transaction.id}</td>
                <td className="p-3">{transaction.timestamp}</td>
                <td className="p-3">{transaction.type}</td>
                <td className="p-3">{transaction.amount}</td>
                <td className="p-3">{transaction.phone}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredTransactions.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          আপনার অনুসন্ধানের মানদণ্ডের সাথে মেলে এমন কোনো লেনদেন পাওয়া যায়নি।.
        </p>
      )}
    </motion.div>
  );
};
