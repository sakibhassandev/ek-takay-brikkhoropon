import { motion } from "framer-motion";

const StatsBoxes = () => {
  const statsData = [
    { number: "1,446", text: "সারা বাংলাদেশ থেকে" },
    { number: "7", text: "সর্বশেষ সংগ্রহ" },
    { number: "1,700", text: "সর্বশেষ ব্যয়" },
  ];

  return (
    <div className="absolute -bottom-60 sm:-bottom-48 md:bottom-0 left-0 right-0 container mx-auto px-4 md:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-r ${
              index === 0
                ? "from-orange-500 to-orange-400"
                : index === 1
                ? "from-orange-400 to-orange-300"
                : "from-orange-300 to-yellow-400"
            } p-6 rounded-lg text-white`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
          >
            <div className="text-4xl font-bold mb-2">{stat.number}</div>
            <div className="text-sm">{stat.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBoxes;
