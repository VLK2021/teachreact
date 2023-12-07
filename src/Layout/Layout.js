import React from 'react';
import { motion } from "framer-motion"

import './LayoutStyle.css';



const Layout = () => {
    const items = ['Text1', 'Text2', 'Text3'];

    const divVariants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 2,
            }
        }),
        hidden: {opacity: 0}
    }


    return (
        <div className={'layout flex-direction'}>
            <div className={'w'}>{
                items.map((item, i) =>
                    <motion.div
                        key={item}
                        variants={divVariants}
                        initial={'hidden'}
                        animate={'visible'}
                        custom={i}
                    >
                        {item}
                    </motion.div>)
            }</div>

            <motion.div
                className={'square'}
                animate={{rotate: 360}}
                transition={{
                    delay: 3,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "reverse",
                    type: "tween",
                    ease: "easeInOut"
                }}
            >

            </motion.div>

            <motion.p
                className={'textExample'}
                initial={{
                    x: -1500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration:2,
                    delay: 0.5,
                }}

            >
                I am only learn now
            </motion.p>

            <div>
                <motion.a
                    href="https://reactjs.org"
                    target={"_blank"}
                    whileHover={{
                        scale: 1.3,
                        color: 'red'
                    }}
                >
                    learn React
                </motion.a>
            </div>
        </div>
    );
};

export {Layout};