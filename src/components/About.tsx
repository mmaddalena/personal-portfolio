/**
 * @copyright 2026 mmaddalena
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming complexity into effortless design'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I am a passionate software developer with a knack for transforming
        complex problems into elegant solutions. With a strong foundation in
        both front-end and back-end technologies, I thrive on creating seamless
        user experiences and efficient code. My journey in software development
        has been driven by a desire to innovate and continuously learn, allowing
        me to stay at the forefront of industry trends and best practices.
        Whether it's building responsive web applications or optimizing
        performance, I am dedicated to delivering high-quality results that
        exceed expectations.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        When I'm not coding, you can find me exploring the latest tech trends,
        contributing to open-source projects, or indulging in my love for
        photography. I believe that creativity and technical expertise go hand
        in hand, and I strive to bring a unique perspective to every project I
        undertake.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};
