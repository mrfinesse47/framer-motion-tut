import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const Home = () => {
  return (
    <motion.div
      className='home container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.55 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button
          // whileHover={{
          //   scale: 1.1,
          //   textShadow: '0px 0px 8px rgba(255,255,255)',
          //   boxShadow: '0px 0px 8px rgba(255,255,255)',
          // }}
          variants={buttonVariants}
          whileHover='hover'
          animate='visible'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
