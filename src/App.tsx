/**
 * @copyright 2026 mmaddalena
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Components
 */
import { Hero } from '@/components/Hero';
// import { Stats } from '@/components/Stats';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      {/* <Stats /> */}
      <Projects />
      <About />
      <Services />
      <Resume />
      <Contact />
    </main>
  );
};
