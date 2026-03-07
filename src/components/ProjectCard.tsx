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
import { fadeUp } from '@/lib/animations';

/**
 * Types
 */
import type { ProjectType } from '@/types';

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
}: ProjectType) => {
  return (
    <motion.a
      href={projectLink}
      target='_blank'
      rel='noopener noreferrer'
      variants={fadeUp}
      className='relative block1|'
    >
      <motion.div
        variants={fadeUp}
        className='relative'
      >
        <figure className='overflow-hidden rounded-md'>
          <img
            src={imgSrc}
            alt={title}
            className='rounded-md transition duration-500 hover:scale-115 w-full'
          />
        </figure>

        <div className='absolute bottom-0 p-2 flex gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer'
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.a>
  );
};
