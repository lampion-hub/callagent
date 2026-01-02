import { motion } from "framer-motion";
import { MapPin, Cog, RefreshCw } from "lucide-react";
const features = [{
  icon: MapPin,
  title: "Book More Appointments Automatically",
  description: "AI agents qualify callers, check availability, schedule appointments, and send confirmations—turning conversations into conversions."
}, {
  icon: Cog,
  title: "Blend AI and human judgment.",
  description: "Cut call-center and staffing costs while improving response times and customer satisfaction through intelligent automation."
}, {
  icon: RefreshCw,
  title: "Adapt in real time.",
  description: "Reduce manual call handling by letting AI manage routine inquiries, order status, FAQs, and follow-ups, so your team can focus on higher-value work."
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};
const Features = () => {
  return <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4">
            From manual coordination{" "}
            <span className="text-muted-foreground">to intelligent design</span>
          </h2>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <span className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium">Our AI Call Agent</span>
          
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {features.map((feature, index) => <motion.div key={index} variants={itemVariants} className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default Features;