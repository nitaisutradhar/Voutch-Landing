import { motion } from "framer-motion";

interface Step {
  icon: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    icon: "fa-magnifying-glass",
    title: "Find or List Tickets",
    desc: "Effortlessly discover tickets for campus events or post your extras in seconds. No more hassle.",
  },
  {
    icon: "fa-user-group",
    title: "Connect with Peers",
    desc: "See who’s buying or selling right on your campus. Voutch is built on a network of students you can trust.",
  },
  {
    icon: "fa-shield-halved",
    title: "Pay or Get Paid Securely",
    desc: "Transact safely and instantly through the platform. Get your ticket or your cash, guaranteed.",
  },
];

const HowItWorks: React.FC = () => (
  <section className="py-24" id="how-it-works">
    <div className="container max-w-[1100px] px-4 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Ticket, Your Way.<br />In 3 Simple Steps.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="bg-[#17162B] rounded-xl text-center p-10 border border-white/5 hover:-translate-y-2 shadow transition"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">
              <i className={`fa-solid ${step.icon}`} />
            </div>
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
