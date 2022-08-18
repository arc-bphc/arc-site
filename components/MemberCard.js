import Image from './Image'
import SocialIcon from './social-icons'

const MemberCard = ({ title, description, imgSrc, facebook, github, linkedin }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '350px', height: '500px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <Image
          alt={title}
          src={'https://drive.google.com/uc?id=' + imgSrc.split('id=')[1]}
          className="object-contain object-center md:h-36 lg:h-48"
          width={500}
          height={400}
          unoptimized={true}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-center text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <p className="prose mb-3 max-w-none text-center text-xl text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-center">
          {github && (
            <span className="p-3">
              <SocialIcon kind={'github'} href={github} />
            </span>
          )}
          {facebook && (
            <span className="p-3">
              <SocialIcon kind={'facebook'} href={facebook} />
            </span>
          )}
          {linkedin && (
            <span className="p-3">
              <SocialIcon kind={'linkedin'} href={linkedin} />
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default MemberCard
