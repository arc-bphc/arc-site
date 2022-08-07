import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import logo from '../assets/ARC_logo_white.png'
import nvidia_img from '../assets/nvidia.png'
import { useCallback } from 'react'
import Card from '@/components/Card'

import Particles from 'react-tsparticles'
import particlesConfigDark from '../particlesConfig_DARK.json'
import particlesConfigLight from '../particlesConfig_LIGHT.json'
import { loadFull } from 'tsparticles'
import { useTheme } from 'next-themes'

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
              <span className="site-title font-montserratSans text-6xl text-black dark:text-white">
                Automation &amp; Robotics Club
              </span>
            </h1>
            <h1 className="p-6">
              <span className="site-description font-montserratSans text-4xl text-black dark:text-white">
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
            <div className="about">
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
              <Link className="header-vertical-line pointer-events-auto p-2 text-xl" data-scroll="">
                |
              </Link>
              <Link className="link pointer-events-auto p-2 text-xl" href="#about">
                About
              </Link>
              <Link className="link pointer-events-auto p-2 text-xl" href="#contact" data-scroll="">
                Contact Us
              </Link>
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
            {/* How the old site handled things lmao:
            
            <script type="text/javascript">
            // posts = members
            // post = member
            // title = name
            // url = git
                var emails = ["sabdulazeem01@gmail.com","abijith3678@gmail.com","adi.chopra108@gmail.com","f20160372@hyderabad.bits-pilani.ac.in","f20200104@hyderabad.bits-pilani.ac.in","apeinsteinz@gmail.com","arunabhsingh25@gmail.com","f20170443@hyderabad.bits-pilani.ac.in","f20180861@hyderabad.bits-pilani.ac.in","","f20171011@hyderabad.bits-pilani.ac.in","jaydigvijay@gmail.com","divyekalra1@gmail.com","gauriptewari@gmail.com","f20171450@hyderabad.bits-pilani.ac.in","f20190429@hyderabad.bits-pilani.ac.in","f20160338@hyderabad.bits-pilani.ac.in","f20180744@hyderabad.bits-pilani.ac.in","","krsnadas919@gmail.com","f20170238@hyderabad.bits-pilani.ac.in","f20171616@hyderabad.bits-pilani.ac.in","nambi.pavan08@gmail.com","f20180131@hyderabad.bits-pilani.ac.in","f20171230@hyderabad.bits-pilani.ac.in","f20170378@hyderabad.bits-pilani.ac.in","f20171635@hyderabad.bits-pilani.ac.in","priyeshbitsh@gmail.com","dvkrajivofficial@gmail.com","reubengeorge101@gmail.com","","rithika100700@gmail.com","Rohanpanda.99@gmail.com","f20170029@hyderabad.bits-pilani.ac.in","f20170293@hyderabad.bits-pilani.ac.in","sahil.jain03.99@gmail.com","ssysaksham@gmail.com","","shubhamsingla369@gmail.com","","f20180671@hyderabad.bits-pilani.ac.in","f20171044@hyderabad.bits-pilani.ac.in","suraj.s2306@gmail.com","tanayranjan1234567890@gmail.com","sanjeev.ksr2@gmail.com","f20171398@hyderabad.bits-pilani.ac.in","f20180456@hyderabad.bits-pilani.ac.in","f20200247@hyderabad.bits-pilani.ac.in","f20200330@hyderabad.bits-pilani.ac.in","f20191074@hyderabad.bits-pilani.ac.in","f20170644@hyderabad.bits-pilani.ac.in"];

                var names = ["Abdul Azeem","Abijith Y.L","Aditya Chopra","Akhil Raj Baranwal","Ankesh Pandey","Arjun Prasad","Arunabh Singh","Avnish Tiwari","Debadarshee Das Mohapatra","Devansh Dharfani","Dhanush Karupakula","Digvijay Singh","Divye Kalra","Gauri Tewari","Gautam Sibansh Mishra","Guru Narayana","Harsh Jhawar","Jai Krishna","Jatin Badam","Krishna Das","Maneesh Sistla","Mrunalini Ramnath","Pavan Kalyan N","Phanindra","Plava Kattamuri","Prabhmeet Singh","Prathmesh Mahalle","Priyesh Mishra","Rajiv DVK","Reuben George","Rishabh Singh","Rithika Chavan","Rohan Panda","Rohit Dwivedula","Rudresh Pratap Singh","Sahil Jain","Saksham Yadav","Shikhar Srivastava","Shubham Singla","Sistla Soumya","Sriram Kodey","Sumanth Keshav","Suraj S","Tanay Ranjan","Thathapudi Sanjeev Paul Joel","Ujjwal Raizada","Utkarsh Jain","Vibhum Raj Tripathi","Visweswar Sirish Parupudi","Yash Jain","Yug Ajmera"];

                var photos = ["assets/img/members/Abdul Azeem.jpg","assets/img/members/Abijith Y.L.jpg","assets/img/members/Aditya Chopra.jpg","assets/img/members/Akhil Raj Baranwal.jpg","assets/img/members/Ankesh Pandey.jpg","assets/img/members/Arjun Prasad.jpg","assets/img/members/Arunabh Singh.jpg","assets/img/members/Avnish Tiwari.png","assets/img/members/Debadarshee Das Mohapatra.jpg","assets/img/members/Devansh Dharfani.jpg","assets/img/members/Dhanush Karupakula.png","assets/img/members/Digvijay Singh.jpg","assets/img/members/Divye Kalra.jpeg","assets/img/members/Gauri Tewari.jpg","assets/img/members/Gautam Sibansh Mishra.png","assets/img/members/Guru Narayana.png","assets/img/members/Harsh Jhawar.jpg","assets/img/members/Jai Krishna.jpg","assets/img/members/Jatin Badam.png","assets/img/members/Krishna Das.jpg","assets/img/members/Maneesh Sistla.jpg","assets/img/members/Mrunalini Ramnath.png","assets/img/members/Pavan Kalyan N.jpg","assets/img/members/Phanindra.jpg","assets/img/members/Plava Kattamuri.png","assets/img/members/Prabhmeet Singh.JPG","assets/img/members/Prathmesh Mahalle.jpg","assets/img/members/Priyesh Mishra.jpg","assets/img/members/Rajiv DVK.jpg","assets/img/members/Reuben George.png","assets/img/members/Rishabh Singh.png","assets/img/members/Rithika Chavan.jpg","assets/img/members/Rohan Panda.png","assets/img/members/Rohit Dwivedula.png","assets/img/members/Rudresh Pratap Singh.jpg","assets/img/members/Sahil Jain.jpg","assets/img/members/Saksham Yadav.jpg","assets/img/members/Shikhar Srivastava.png","assets/img/members/Shubham Singla.jpg","assets/img/members/Sistla Soumya.jpg","assets/img/members/Sriram Kodey.png","assets/img/members/Sumanth Keshav.png","assets/img/members/Suraj S.jpg","assets/img/members/Tanay Ranjan.jpg","assets/img/members/Thathapudi Sanjeev Paul Joel.jpg","assets/img/members/Ujjwal Raizada.jpg","assets/img/members/Utkarsh Jain.png","assets/img/members/Vibhum Raj Tripathi.jpg","assets/img/members/Visweswar Sirish Parupudi.jpg","assets/img/members/Yash Jain.jpg","assets/img/members/Yug Ajmera.png"];

                var quotes = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

                var facebooks = ["https://www.facebook.com/tekkonXXabdulXXazeem","https://www.facebook.com/abijith.yl/","https://www.facebook.com/adico11","https://www.facebook.com/akhil.r.baranwal","https://www.facebook.com/ankeshpandey.pandey.545","https://www.facebook.com/profile.php?id=100037727361589","https://www.facebook.com/arunabh.singh.1447/","https://www.facebook.com/avnish.tiwari.796","https://www.facebook.com/dev.ddm.9","","https://www.facebook.com/dhanushkarupakula.k","https://www.facebook.com/digvijay.singh.31508076","https://www.facebook.com/divye.kalra.5/","https://www.facebook.com/gauri.tewari.71/","https://www.facebook.com/sibansh06","https://www.facebook.com/guru.narayana.549","https://www.facebook.com/harsh.jhawar.56","","https://www.facebook.com/jathin.badam","https://www.facebook.com/profile.php?id=100009444559809","https://www.facebook.com/maneesh.sarma","https://www.facebook.com/mrunalini.ramnath","https://www.facebook.com/profile.php?id=100009435031896","https://www.facebook.com/phanindra.ramineni.1","https://www.facebook.com/plava.kattamuri","https://www.facebook.com/prabhmeet.singh.1276","https://www.facebook.com/prathmesh.mahall","https://www.facebook.com/priyesh.mishra.125760","","https://www.facebook.com/reuben.george.3192","https://www.facebook.com/rishabhsingh3003","https://www.facebook.com/rithika.chavan.71020","https://www.facebook.com/rohan.pandaaa","https://www.facebook.com/RohitDwivedula","https://www.facebook.com/rudresh.singh.948","https://www.facebook.com/people/Sahil-Jain/100020524095679/","https://www.facebook.com/profile.php?id=100056693515442","https://www.facebook.com/shikharsrivastava23","https://www.facebook.com/shubhamsingla369","","https://www.facebook.com/Sriram.Kodey","https://www.facebook.com/sumanth.k.kotha","https://www.facebook.com/suraj.s2306/","https://www.facebook.com/tanay.ranjan.33/","https://www.facebook.com/sanjeev.thathapudi/","https://www.facebook.com/ujjwal.raizada","https://www.facebook.com/utkarsh.jain.5070","https://www.facebook.com/vibhumraj.tripathi","https://www.facebook.com/sirish.visweswar.31","https://www.facebook.com/profile.php?id=100010580742371","https://www.facebook.com/yugajmera"];

                var githubs = ["https://github.com/abdulazeem-tk4vr","https://github.com/AbijithYL","https://github.com/adeecc","https://github.com/arbaranwal","https://github.com/anvaishy","https://github.com/prasadboi","https://github.com/Arunabh17","","https://github.com/orgs/arc-bphc/people/Fraction36","","","https://www.github.com/JayDigvijay","https://github.com/divyekalra1","https://github.com/gauritewari","","https://github.com/guru-narayana","","https://github.com/TextZip?tab=followers","","https://github.com/SUNKenHERO","","","https://github.com/albegade-pavan","https://github.com/orgs/arc-bphc/people/phanindra-R","","","https://github.com/orgs/arc-bphc/people/pm-engr","https://github.com/priyesh0453","https://github.com/RajivDVK","https://github.com/ReubenGeorge02","https://github.com/orgs/arc-bphc/people/rishabsingh3003","https://github.com/ritz71020","https://github.com/pandaboi","","","https://github.com/hardhat5","https://github.com/sakshamssy","","https://github.com/shubham-333","","https://github.com/SriramKodey","","https://github.com/suraj-2306","https://github.com/tanayranjan","https://github.com/webisgood","https://github.com/ujjwal-raizada","https://github.com/Utkarsh0902","","","","https://github.com/YugAjmera"];

                var randomIndexUsed = [];
                var counter = 0;
                var numberOfPosts = 4;

                document.write('<div class="user">'); // added 
                while (counter < numberOfPosts)
                {
                    var randomIndex;
                    var email;
                    var name;
                    var photo;
                    var quote;
                    var facebook;
                    var github;

                    randomIndex = Math.floor(Math.random() * names.length);

                    if (randomIndexUsed.indexOf(randomIndex) == "-1")
                    {
                        email = emails[randomIndex];
                        name = names[randomIndex];
                        photo = photos[randomIndex];
                        quote = quotes[randomIndex];
                        facebook = facebooks[randomIndex];
                        github = githubs[randomIndex];

                        if (counter < numberOfPosts )
                        {
                            document.write('<div class="card">');
                            document.write('<img class="trailer" src="'+photo+'" alt="Avatar" height=250px ">');
                            document.write('<div class="container"><h3><b>'+ name + '</b></h3><p>'+ quote + '</p></div>');
                            document.write('<div class="header-icons-small"><a aria-label="Send email" href="mailto:'+ email +'"><i class="icon-small fa fa-envelope"></i></a><a aria-label="My Github" target="_blank" href="'+ github +'"><i class="icon-small fa fa-github-alt" aria-hidden="true"></i></a><a aria-label="My Facebook" target="_blank" href="'+ facebook +'"><i class="icon-small fa fa-facebook-square" aria-hidden="true"></i></a></div>');
                            document.write('</div>');
                            // document.write('<p><a href="' + postHREF + '">' + postTitle + '</a></p>');
                        }

                        randomIndexUsed.push(randomIndex);

                        counter++;
                    }
                }
                document.write('</div>')

            </script> */}
            <Card
              key={'Lorem'}
              title={'Lorem'}
              description={
                'A gamified bootcamp to get you started in the fields of robotics, mastering topics ranging from basic electronics and programming to simulations and mechanical design'
              }
              imgSrc={'/static/images/level-up-font.png'}
              href={'/resources/levelup/introduction'}
            />{' '}
            <Card
              key={'Dolor'}
              title={'Dolor'}
              description={
                'A gamified bootcamp to get you started in the fields of robotics, mastering topics ranging from basic electronics and programming to simulations and mechanical design'
              }
              imgSrc={'/static/images/level-up-font.png'}
              href={'/resources/levelup/introduction'}
            />{' '}
            <Card
              key={'Dolor'}
              title={'Dolor'}
              description={
                'A gamified bootcamp to get you started in the fields of robotics, mastering topics ranging from basic electronics and programming to simulations and mechanical design'
              }
              imgSrc={'/static/images/level-up-font.png'}
              href={'/resources/levelup/introduction'}
            />{' '}
            <Card
              key={'Sit'}
              title={'Sit'}
              description={
                'A gamified bootcamp to get you started in the fields of robotics, mastering topics ranging from basic electronics and programming to simulations and mechanical design'
              }
              imgSrc={'/static/images/level-up-font.png'}
              href={'/resources/levelup/introduction'}
            />{' '}
          </div>
        </div>

        <div
          className="m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium"> Our Sponsors</span>
          <div className="flex w-full items-center justify-center text-center">
            <Card key={'Nvidia Jetson'} title={'Nvidia Jetson'} imgSrc={nvidia_img} />{' '}
          </div>
        </div>

        <div
          className="m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">Contact Us</span>
          <span className="p-4 font-montserratSans text-xl">
            {' '}
            The Automation and Robotics Club (ARC) is a part of the Technical Senate of BITS Pilani,
            Hyderabad Campus. If inquisitiveness and innovation are your assets, then you've found
            the right place for yourself. We take up promising challenges, workshops and projects
            which combine the aspects of electronics, mechanics and programming. The only
            prerequisite to joining us - the desire to quench curiosity and express yourself{' '}
          </span>
        </div>
      </div>

      <style jsx>
        {`
          .particles {
            position: absolute;
            width: 100vh;
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
