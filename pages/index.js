import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import logo from '../assets/ARC_logo_white.png'
import nvidia_img from '../assets/nvidia.png'
import { useCallback, useState } from 'react'
import Card from '@/components/Card'

import Particles from 'react-tsparticles'
import particlesConfigDark from '../particlesConfig_DARK.json'
import particlesConfigLight from '../particlesConfig_LIGHT.json'
import { loadFull } from 'tsparticles'
import { useTheme } from 'next-themes'
import ContactForm from '@/components/ContactForm'
import membersData from './../data/membersData'

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
  const { theme, _, __ } = useTheme()

  let particleConfig = particlesConfigDark
  if (theme === 'light') {
    particleConfig = particlesConfigLight
  }

  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const onNameChange = (e) => {
    setFormName(e.target.value)
  }

  const onEmailChange = (e) => {
    setFormEmail(e.target.value)
  }

  const onMessageChange = (e) => {
    setFormMessage(e.target.value)
  }

  const submitForm = () => {}

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div
          className="pointer-events-auto flex w-full justify-center bg-cover bg-no-repeat"
          style={{ minHeight: 100 + 'vh' }}
        >
          <div className="particles">
            <Particles className="h-full w-full" options={particleConfig} init={customInit} />
          </div>
          <div className="header pointer-events-none m-0 flex w-1/2 flex-col items-center justify-center text-center">
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
              <span className="site-title font-montserratSans text-4xl text-black dark:text-white md:text-6xl">
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
                <Link className="link pointer-events-auto p-2 text-xl" href="/blog" data-scroll="">
                  Blog
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
          className="m-0 flex w-4/5 flex-col items-center justify-center text-center"
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
          className="m-0 flex w-4/5 flex-col items-center justify-center text-center"
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
          className="m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 50 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium"> Our Sponsors</span>
          <div className="flex w-full items-center justify-center text-center">
            <Card key={'Nvidia Jetson'} title={'Nvidia Jetson'} imgSrc={nvidia_img} />{' '}
          </div>
        </div>

        <div
          id="contact"
          className="m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">Contact Us</span>
          <span className="w-full p-4 font-montserratSans text-xl">
            <ContactForm />
          </span>
        </div>
      </div>

      <style jsx>
        {`
          .particles {
            position: absolute;
            height: 100%;
            z-index: -1;
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
