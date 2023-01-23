import { motion } from "framer-motion";

const Card = ({ url, title }) => {
  return (
    <motion.a
      href={url}
      whileHover={{ backgroundColor: "rgb(171 64 96)", y: -3 }}
      transition={{ duration: 0.15 }}
      className="card bg-card"
    >
      <p className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</p>
    </motion.a>
  );
};

export default Card;
