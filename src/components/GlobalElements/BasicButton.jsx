import { motion } from "framer-motion";

function BasicButton({ children, className = "", ...props }) {
    return (
        <motion.button
            type="button"
            animate={{ scale: 1, rotate: 0 }}
            
            whileHover={{
                scale: 1.2,
                rotate: [0, 1, -1, 0],
                color: "rgb(255, 106, 0)",
                transition: {
                    scale: { duration: 0.1 },
                }
            }}
            transition={{ duration: 0.1 }}
            className={`basic-button ${className}`}
            {...props}
        >
            {children}
        </motion.button>

    )
}

export default BasicButton;