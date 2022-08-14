import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import logo from '../assets/ARC_logo_white.png'
import nvidia_img from '../assets/nvidia.png'
import { useCallback, useState } from 'react'
import Card from '@/components/Card'
import Head from 'next/head'
import Particles from 'react-tsparticles'
import particlesConfigDark from '../particlesConfig_DARK.json'
import particlesConfigLight from '../particlesConfig_LIGHT.json'
import { loadFull } from 'tsparticles'
import { useTheme } from 'next-themes'
import ContactForm from '@/components/ContactForm'
import { membersData } from './../data/membersData'
import siteMetadata from '@/data/siteMetadata'
import resourcesData from '@/data/resourcesData'
import ThemeSwitch from '@/components/ThemeSwitch'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('projects')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine)
  }, [])

  const { theme, setTheme, __ } = useTheme()

  {
    ;() => setTheme('dark')
  }

  let particleConfig = particlesConfigDark
  if (theme === 'light') {
    particleConfig = particlesConfigLight
    setTheme('light')
  }

  return (
    <>
      <Head>
        <title>ARC-BPHC</title>
      </Head>
      <ScrollTopAndComment />
      <div className="flex flex-col items-center justify-center text-center">
        <div
          className="pointer-events-auto flex w-full justify-center bg-cover bg-no-repeat"
          style={{ minHeight: 100 + 'vh' }}
        >
          <div className="particles">
            <Particles className="h-full w-full" options={particleConfig} init={customInit} />
          </div>
          <div className="header pointer-events-auto z-[2] m-0 flex w-1/2 flex-col items-center justify-center text-center">
            <div style={{ width: '50%', height: 'auto', position: 'relative' }}>
              <Image
                src={logo}
                className="logo-scaling shrink invert dark:invert-0"
                alt="Transparent Logo"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h1 className="pt-8">
              <span className="site-title font-montserratSans text-4xl font-bold text-black dark:text-white md:text-6xl">
                Automation &amp; Robotics Club
              </span>
            </h1>
            <h1 className="p-6">
              <span className="site-description font-montserratSans text-2xl text-black dark:text-white md:text-4xl">
                Electronics | Design | Programming
              </span>
            </h1>

            <div className="header-icons mb-2 flex">
              <Link
                aria-label="Send email"
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=arc@hyderabad.bits-pilani.ac.in"
                target="_blank"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 512"
                    className="h-12 w-12 fill-black p-1 transition-colors duration-700 ease-in-out group-hover:fill-white dark:fill-white dark:group-hover:fill-black"
                  >
                    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="My Github"
                target="_blank"
                href="https://github.com/arc-bphc"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 512"
                    className="h-12 w-12 fill-black transition-colors duration-700 ease-in-out group-hover:fill-white dark:fill-white dark:group-hover:fill-black"
                  >
                    <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="My Facebook"
                target="_blank"
                href="https://www.facebook.com/automationandroboticsclub"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 512"
                    className="h-12 w-12 fill-black p-1 transition-colors duration-700 ease-in-out group-hover:fill-white dark:fill-white dark:group-hover:fill-black"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex-column mx-5 md:flex">
              <div className="flex">
                <Link
                  className="link pointer-events-auto p-2 text-xl"
                  href="/projects"
                  data-scroll=""
                >
                  Projects
                </Link>
                <Link
                  className="link pointer-events-auto p-2 text-xl"
                  href="/resources"
                  data-scroll=""
                >
                  Resources
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  className="header-vertical-line pointer-evengit puts-auto hidden p-2 text-xl md:block"
                  data-scroll=""
                >
                  |
                </Link>
                <Link className="link pointer-events-auto p-2 text-xl" href="#about">
                  About
                </Link>
                <Link className="link pointer-events-auto p-2 text-xl" href="/team">
                  Team
                </Link>
                <Link
                  className="link pointer-events-auto p-2 text-xl"
                  href="#contact"
                  data-scroll=""
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">About Us</span>
          <span className="p-4 font-montserratSans text-xl">
            {' '}
            The Automation and Robotics Club (ARC) is a part of the Technical Senate of BITS Pilani,
            Hyderabad Campus. If inquisitiveness and innovation are your assets, then you've found
            the right place for yourself. We take up promising challenges, workshops and projects
            which combine the aspects of electronics, mechanics and programming. The only
            prerequisite to joining us - the desire to quench curiosity and express yourself{' '}
          </span>

          <div className="flex-column md:flex">
            <Card
              key={'Level Up'}
              title={'Level Up'}
              description={`A gamified bootcamp to get you started in the fields of robotics, 
              mastering topics ranging from basic electronics and programming to 
              simulations and mechanical design`}
              imgSrc={'/static/images/level-up-font.png'}
              href={'/resources/levelup/introduction'}
            />

            <Card
              key={'Workshops'}
              title={'Workshops'}
              description={`Various intriguing workshops conducted throughout the year, which
               effortlessly combine learning with enjoyment`}
              imgSrc={'/static/images/workshop.jpg'}
              href={'/resources/workshop/2021-07-06-Day0-1'}
            />

            <Card
              key={'Projects'}
              title={'Projects'}
              description={`Several inter-disciplinary projects including a Robotic Arm, Laser Harp, UAV,
              self-playing instruments and much more`}
              imgSrc={'/static/assets/images/resources/1954436.jpg'}
              href={'/projects'}
            />
          </div>
        </div>

        <div
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">Spotlight</span>
          <span className="p-4 font-montserratSans text-xl">
            {' '}
            Meet four new members of our club everytime you refresh this page.{' '}
          </span>
          <div className="flex-column md:flex">
            {/* Check membersData.js */}
            {membersData.map((member) => {
              return (
                <Card
                  key={member.id}
                  title={member.name}
                  description={member.quote}
                  imgSrc={member.imgsrc}
                  href={member.facebook}
                />
              )
            })}
          </div>
        </div>

        <div
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 50 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium"> Our Sponsors</span>
          <div className="flex w-full items-center justify-center text-center">
            <Card key={'Nvidia Jetson'} title={'Nvidia Jetson'} imgSrc={nvidia_img} />{' '}
          </div>
        </div>

        <div
          id="contact"
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">Contact Us</span>
          <span className="w-full p-4 font-montserratSans text-xl">
            <ContactForm />
          </span>
        </div>

        <footer className="z-[2] w-full bg-white p-3 dark:bg-gray-900 sm:p-6">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link
                href="https://www.bits-pilani.ac.in/hyderabad/"
                className="flex-column items-center md:flex"
              >
                <img src="static/images/bits_logo.png" className="h-15 mx-2" alt="ARC Logo" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Automation and Robotics Club</span> */}
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-6">
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Faculty InCharges
                </span>
                <p className="mt-4 mb-1 text-gray-400">Dr Y.V.D. Rao</p>
                <p className="text-gray-400">Dr Abhishek Sarkar</p>
              </div>
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  President
                </span>
                <p className="mt-4 mb-1 text-gray-400">Bhaswanth Ayapilla</p>
                <p className="text-gray-400">+91 86600 91378</p>
              </div>
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Resources
                </span>
                <ul className="mt-4 text-gray-600 dark:text-gray-400">
                  {resourcesData.map((resource) => {
                    return (
                      <li className="mb-1" key={resource.id}>
                        <Link href={resource.href} className="hover:underline">
                          {resource.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  About us
                </span>
                <ul className="mt-4 text-gray-600 dark:text-gray-400">
                  <li className="mb-1">
                    <Link href="/team" className="hover:underline ">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2022{' '}
              <Link href="/" className="hover:underline">
                Automation and Robotics Club
              </Link>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
              <Link
                href={siteMetadata.facebook}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href={siteMetadata.instagram}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                href={siteMetadata.twitter}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                href={siteMetadata.github}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>
        {`
          .particles {
            position: absolute;
            height: 100%;
            z-index: 0;
            background-color: var(--main-color);
          }

          .header {
            -webkit-user-select: none; /* Safari */
            -ms-user-select: none; /* IE 10 and IE 11 */
            user-select: none; /* Standard syntax */
          }
        `}
      </style>
    </>
  )
}
