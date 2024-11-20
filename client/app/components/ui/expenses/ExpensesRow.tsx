import { motion } from "framer-motion";
import { format } from "date-fns";
import { Expenses } from "@/app/lib/definitions";

interface ExpensesRowProps {
  transaction: Expenses;
  index: number;
}

export function ExpensesRow({ transaction, index }: ExpensesRowProps) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      className="bg-white hover:bg-gray-50 transition-colors"
    >
      <td className="py-3 px-6 text-sm">
        {format(new Date(transaction.date), "M/d/yyyy")}
      </td>
      <td className="py-3 px-6 text-sm text-gray-900">
        ${transaction.amount.toFixed(2)}
      </td>
      <td className="py-3 px-6 text-sm text-gray-600">
        {transaction.description}
      </td>
    </motion.tr>
  );
}
