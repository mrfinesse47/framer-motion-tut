import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  //https://www.youtube.com/watch?v=lCe0F_0sbeE&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=8&ab_channel=TheNetNinja
  //explains when
  //mass moves slower
  // damping means more or kess oscillation
};

const childVariant = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden' //propigates to children
      animate='visible' //propigates to children
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <motion.div variants={childVariant} key={topping}>
            {topping}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
