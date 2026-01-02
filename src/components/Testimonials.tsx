import { motion } from "framer-motion";
import testimonialProcore from "@/assets/testimonial-procore.jpg";
import testimonialFis from "@/assets/testimonial-fis.jpg";
import testimonialSavills from "@/assets/testimonial-savills.jpg";
import testimonialPalmetto from "@/assets/testimonial-palmetto.jpg";
const testimonials = [{
  company: "Procore",
  text: "Procore streamlines customer onboarding workflows with Guardian Tech Pros",
  image: testimonialProcore
}, {
  company: "FIS",
  text: "FIS integrated Guardian Tech Pros to redefine the digital banking experience",
  image: testimonialFis
}, {
  company: "Savills",
  text: "Savills uses Guardian Tech Pros to streamline commercial property deals",
  image: testimonialSavills
}, {
  company: "Palmetto",
  text: "Palmetto simplifies solar customer onboarding with Guardian Tech Pros, from inquiry to installation",
  image: testimonialPalmetto
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};
const Testimonials = () => {
  return null;
};
export default Testimonials;