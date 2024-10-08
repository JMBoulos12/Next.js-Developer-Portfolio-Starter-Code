import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark shadow-2xl p-12 bg-light'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" 
                    className='ml-4 rounded-lg bg-dark text-light d-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>JMB | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" 
                    className='mb-16'
                    
                    />
                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            <FeaturedProject 
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            Project-1
                        </div>
                        <div className='col-span-6'>
                            Project-2
                        </div>

                        <div className='col-span-12'>
                            Featured Projects
                        </div>

                        <div className='col-span-6'>
                            Project-3
                        </div>
                        <div className='col-span-6'>
                            Project-4
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
