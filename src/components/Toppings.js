import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
};

const buttonVariants = {
  // visible: { transition: { delay: 2 }, x: [0, -20, 20, -20, 20, 0] },
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1], //keyframes https://www.youtube.com/watch?v=lY2TZXEgYUw&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=9&ab_channel=TheNetNinja
    scale: 1.1,
    textShadow: '0px 0px 8px rgba(255,255,255)',
    boxShadow: '0px 0px 8px rgba(255,255,255)',
    transition: {
      duration: 0.3, //controls the duration of each keyframe 1->1.1
      yoyo: 10, //or use Infinity to have it go forever
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className='toppings container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
              //originX makes it so it doesnt move out of place when it grows
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button
          // whileHover={{
          //   scale: 1.1,
          //   textShadow: '0px 0px 8px rgba(255,255,255)',
          //   boxShadow: '0px 0px 8px rgba(255,255,255)',
          // }}
          variants={buttonVariants}
          whileHover='hover'
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
