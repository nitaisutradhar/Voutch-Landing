import { motion } from "framer-motion";
import { FaSearch, FaUserFriends, FaShieldAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={48} className="mx-auto text-violet-500" />,
    title: "Find or List Tickets",
    desc: "Effortlessly discover tickets for campus events or post your extras in seconds. No more hassle.",
  },
  {
    icon: <FaUserFriends size={48} className="mx-auto text-violet-500" />,
    title: "Connect with Peers",
    desc: "See who’s buying or selling right on your campus. Voutch is built on a network of students you can trust.",
  },
  {
    icon: <FaShieldAlt size={48} className="mx-auto text-violet-500" />,
    title: "Pay or Get Paid Securely",
    desc: "Transact safely and instantly through the platform. Get your ticket or your cash, guaranteed.",
  },
];

const HowItWorks: React.FC = () => (
  <section className="py-24 px-2">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-lg sm:text-4xl md:text-5xl font-extrabold text-center mb-14 leading-tight text-white">
        Your Ticket, Your Way.<br />In 3 Simple Steps.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="bg-[#17162B] hover:-translate-y-2 transition-transform duration-200 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center text-center border border-[#322964]/50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {step.icon}
            <h3 className="mt-7 mb-4 text-base sm:text-2xl font-extrabold text-white">{step.title}</h3>
            <p className="text-gray-300 text-[10px] sm:text-base font-medium">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
