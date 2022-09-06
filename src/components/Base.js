import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
};

const nextVariants = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className='next'
          variants={nextVariants}
          // initial='hidden'
          // animate='visible'
          // these 2 lines are inherited from parent variants
        >
          <Link to='/toppings'>
            <motion.button
              // whileHover={{
              //   scale: 1.1,
              //   textShadow: '0px 0px 8px rgba(255,255,255)',
              //   boxShadow: '0px 0px 8px rgba(255,255,255)',
              // }}
              variants={buttonVariants}
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
