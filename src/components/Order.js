import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  // explains property when
  // mass moves slower
  // damping means more or less oscillation
};

const childVariant = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const Order = ({ pizza, setShowModal }) => {
  // const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [setShowModal]);
  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden' //propigates to children
      animate='visible' //propigates to children
    >
      {/* <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
      shows how to animate out think as they disappear from dom
      //https://www.youtube.com/watch?v=sClYgoPOpaI&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=11&ab_channel=TheNetNinja */}

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
