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
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Icon animations */}
        {[ 
          { Icon: DiHtml5, color: "text-orange-500", title: "HTML" },  // Brighter color
          { Icon: DiCss3, color: "text-blue-500", title: "CSS" },  // Brighter color
          { Icon: DiJavascript1, color: "text-yellow-400", title: "JavaScript" },  // Brighter color
          { Icon: RiReactjsLine, color: "text-cyan-300", title: "React" },  // Brighter color
          { Icon: SiNextdotjs, color: "text-cyan-200", title: "Next.js" },  // Brighter color
          { Icon: DiPhp, color: "text-indigo-500", title: "PHP" },  // Brighter color
          { Icon: DiJava, color: "text-red-500", title: "Java" },  // Brighter color
          { Icon: DiNodejsSmall, color: "text-green-400", title: "Node.js" },  // Brighter color
          { Icon: DiMysql, color: "text-blue-600", title: "MySQL" },  // Brighter color
          { Icon: DiMongodb, color: "text-green-500", title: "MongoDB" }  // Brighter color
        ].map(({ Icon, color, title }, index) => (
          <motion.div
            key={title}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Icon className={`text-5xl ${color}`} title={title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
