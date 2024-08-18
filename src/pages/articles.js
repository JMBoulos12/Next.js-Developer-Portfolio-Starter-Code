import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FeaturedArticle = ({img, title, time, summary, link}) => {

  return (
      <li>
          <Link href={link} 
          target="_blank" 
          className="w-full cursor-pointer overflow-hidden rounded-lg"
          >
              <Image src={img} alt={title} className="w-full h-auto" />
          </Link>
          <Link href={link} target="_blank">
            <h2 className="capitalize text-2xl"></h2>
          </Link>
      </li>
  );
}


const articles = () => {
  return (
    <>
        <Head>
            <title>JMB | articles Page</title>
            <meta name="description" content="any description" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16' />
                <ul className='grid grid-col-2 gap-16'>
                    <li>Featured Article-1</li>
                    <li>Featured Article-2</li>
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles