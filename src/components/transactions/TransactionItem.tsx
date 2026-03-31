import { motion } from "framer-motion";
import Icon from "../ui/Icon";

export default function TransactionItem({
  name,
  icon,
  value,
}: {
  name: string;
  icon: string;
  value: string;
}) {
  const isPositive = value.includes("+");

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex justify-between items-center p-4 bg-[#181c22] rounded-xl border border-[#474553]/10"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#262a31]">
          <Icon name={icon} />
        </div>
        <span>{name}</span>
      </div>

      <span className={isPositive ? "text-[#00daf3]" : "text-white"}>
        {value}
      </span>
    </motion.div>
  );
}