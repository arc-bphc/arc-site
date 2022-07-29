import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import logo from '../assets/ARC_logo_white.png'
import { useCallback } from 'react'

import Particles from 'react-tsparticles'
import particlesConfig from '../particlesConfig.json'
import { loadFull } from 'tsparticles'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('projects')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const customInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine)
  })

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex h-full w-full justify-center bg-no-repeat">
        <div className="particles">
          <Particles height="100vh" width="100vw" options={particlesConfig} init={customInit} />
        </div>
        <div className="header m-0 flex w-1/2 flex-col items-center justify-center text-center">
          <div style={{ width: '50%', height: 'auto', position: 'relative' }}>
            <Image
              src={logo}
              className="logo-scaling shrink"
              alt="Transparent Logo"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h1 className="pt-8">
            <span className="site-title font-montserratSans text-6xl">
              Automation &amp; Robotics Club
            </span>
          </h1>
          <h1 className="p-6">
            <span className="site-description font-montserratSans text-4xl">
              Electronics | Design | Programming
            </span>
          </h1>
          <div className="header-icons mb-2 flex">
            <Link
              aria-label="Send email"
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=arc@hyderabad.bits-pilani.ac.in"
              target="_blank"
              rel="noreferrer"
              className="group rounded-full p-2"
            >
              <div className="rounded-full border-2 border-white p-2 transition-colors duration-700 ease-in-out hover:bg-white group-hover:border-black">
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
              className="group rounded-full p-2"
            >
              <div className="rounded-full border-2 border-white p-2 transition-colors duration-700 ease-in-out hover:bg-white group-hover:border-black">
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
              className="group rounded-full p-2"
            >
              <div className="rounded-full border-2 border-white p-2 transition-colors duration-700 ease-in-out hover:bg-white group-hover:border-black">
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
          <div className="header-links">
            <Link className="link p-2 text-xl" href="#about" data-scroll="">
              About Us
            </Link>
            <Link className="link p-2 text-xl" href="#team" data-scroll="">
              Our Team
            </Link>
            <Link className="link p-2 text-xl" href="#sponsors" data-scroll="">
              Sponsors
            </Link>
            <Link className="link p-2 text-xl" href="#contact" data-scroll="">
              Contact Us
            </Link>
            <Link className="header-vertical-line p-2 text-xl" data-scroll="">
              |
            </Link>
            <Link className="link p-2 text-xl" href="/resources/">
              Resources
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          canvas {
            display: block;
            vertical-align: bottom;
          }

          .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-color: var(--main-color);
          }
        `}
      </style>
    </>
  )
}
