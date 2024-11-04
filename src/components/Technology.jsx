import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5, DiCss3, DiJavascript1, DiPhp, DiJava, DiNodejsSmall, DiMysql, DiMongodb } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-extrabold"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Icon animations */}
        {[
          { Icon: DiHtml5, color: "text-orange-500", title: "HTML" },
          { Icon: DiCss3, color: "text-blue-500", title: "CSS" },
          { Icon: DiJavascript1, color: "text-yellow-400", title: "JavaScript" },
          { Icon: RiReactjsLine, color: "text-cyan-300", title: "React" },
          { Icon: SiNextdotjs, color: "text-cyan-200", title: "Next.js" },
          { Icon: DiPhp, color: "text-indigo-500", title: "PHP" },
          { Icon: DiJava, color: "text-red-500", title: "Java" },
          { Icon: DiNodejsSmall, color: "text-green-400", title: "Node.js" },
          { Icon: DiMysql, color: "text-blue-600", title: "MySQL" },
          { Icon: DiMongodb, color: "text-green-500", title: "MongoDB" }
        ].map(({ Icon, color, title }, index) => (
          <motion.div
            key={title}
            className={`relative flex items-center justify-center rounded-full p-4 border-4 ${color} border-opacity-20 shadow-lg transition-all duration-300 transform`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)"
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={{ borderColor: `${color.replace("text-", "")}` }}
          >
            <Icon className={`text-5xl ${color}`} title={title} />
            <motion.div
              className="absolute inset-0 rounded-full border border-opacity-30 opacity-0"
              whileHover={{ opacity: 1, scale: 1.1 }}
              style={{
                borderColor: `${color.replace("text-", "")}`,
                animation: "pulseBorder 2s infinite"
              }}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulseBorder {
          0%, 100% { border-width: 2px; opacity: 0.6; }
          50% { border-width: 6px; opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default Technology;
