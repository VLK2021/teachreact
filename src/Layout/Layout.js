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
            {
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
            }
        </div>
    );
};

export {Layout};