import { motion } from "framer-motion";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialCarlos from "@/assets/testimonial-carlos.jpg";
import testimonialJennifer from "@/assets/testimonial-jennifer.jpg";
import testimonialMichelle from "@/assets/testimonial-michelle.jpg";

const testimonials = [
  {
    name: "David Morrison",
    role: "Operations Director",
    company: "Morrison Dental Group",
    industry: "Healthcare",
    quote: "Guardian Tech's AI call agent has been a game-changer for our practice. We've reduced missed appointments by 40% and freed up our front desk staff to focus on patient care instead of phone calls.",
    image: testimonialDavid,
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Apex Property Management",
    industry: "Real Estate",
    quote: "We used to lose leads after hours. Now our AI agent captures every inquiry 24/7. We've seen a 60% increase in qualified leads and saved over $50,000 annually in staffing costs.",
    image: testimonialSarah,
  },
  {
    name: "Carlos Rivera",
    role: "Owner",
    company: "Rivera Auto Services",
    industry: "Automotive",
    quote: "The call agent handles appointment scheduling and service inquiries seamlessly. Our customers love the instant response, and we've cut our call handling time by 70%.",
    image: testimonialCarlos,
  },
  {
    name: "Jennifer Chen",
    role: "Managing Partner",
    company: "Chen & Associates Law Firm",
    industry: "Legal",
    quote: "As a law firm, every call matters. Guardian Tech's solution ensures we never miss a potential client. It's saved us countless hours and helped us grow our practice by 35%.",
    image: testimonialJennifer,
  },
  {
    name: "Michelle Thompson",
    role: "General Manager",
    company: "Comfort First HVAC",
    industry: "Home Services",
    quote: "During peak season, we were drowning in calls. The AI agent now handles overflow effortlessly, booking appointments and answering FAQs. Our team productivity has doubled.",
    image: testimonialMichelle,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const ProductFeatures = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4">
            Trusted by businesses across industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Guardian Tech is helping companies save time, money, and resources with AI-powered call agents.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-background rounded-2xl p-6 hover:shadow-xl transition-shadow ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                {testimonial.industry}
              </span>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeatures;
