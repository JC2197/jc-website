import { motion } from "framer-motion";

function BasicButton({ children, className = "", ...props }) {
    return (
        <motion.button
            type="button"
            animate={{ scale: 1, rotate: 0 }}
            
            whileHover={{
                scale: 1.4,
                rotate: [0, 4, -4, 0],
                color: "rgb(255, 106, 0)",
                transition: {
                    scale: { duration: 0.1 },
                    color: { duration: 0.1 },
                    rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }
            }}
            transition={{ duration: 0.3 }}
            className={`basic-button ${className}`}
            {...props}
        >
            {children}
        </motion.button>

    )
}

export default BasicButton;