import React from 'react'
import { motion, useScroll } from "motion/react"
const Motion = () => {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <div className="min-h-screen"></div>
            <motion.div className='w-full h-3 fixed top-0 left-0 bg-black right-0 origin-left' style={{ scaleX: scrollYProgress }} />
            <div className='flex min-h-screen justify-center items-center'>
                <motion.ul className='bg-[#ff0088] rounded-lg w-20 h-20' transition={{ duration: 2 }} whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
                    whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1, rotate: 360, }} />
            </div>
            <div className="min-h-screen"></div>
        </>
    )
}

export default Motion