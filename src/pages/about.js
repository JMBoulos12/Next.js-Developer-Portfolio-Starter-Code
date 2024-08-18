import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.png";
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';



const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  
const motionValue = useMotionValue(0);  
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(() => {
  if (isInView) {
    motionValue.set(value);
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
      }
  })

}, [springValue, value])



    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>JMB | About Page</title>
            <meta name="description" content="any description" />
        </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
          <div className='grid w-full grid-cols-8 gap-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium'>
                I'm Jean Marc BOULOS, a full stack and web developer with a strong passion for designing beautiful, functional, and user-focused digital experiences. With over 11 years of experience, I'm always eager to explore new and creative ways to bring my clients' ideas to life.
                </p>

                <p className='my-4 font-medium'>
                I see design as more than just making things visually appealing—it's about addressing challenges and creating seamless, enjoyable experiences for users.
                </p>

                <p className='font-medium'>
                Whether I'm developing a website, mobile app, or any digital product, I approach every project with a commitment to design excellence and a focus on user-centered thinking. I'm excited about the possibility of bringing my skills and passion to your next project.
                </p>
              </div>



          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
          bg-light p-8
          '>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'  />
              <Image src={profilePic} alt="JMB" className='w-full h-auto rounded-2xl' />
          </div>

    <div className='col-span-2 flex-col items-end justify-between'>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
              </div>
          
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={11} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
              </div>
            </div>

          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about