import siteMetadata from '@/data/siteMetadata'
import blogPostsData from '@/data/siteData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/blogData'
import { getAllFilesFrontMatter } from '@/lib/mdx'

//For future update
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('projects')
  const initialDisplayPosts = posts.slice(0, 3)
  // console.log(initialDisplayPosts)

  return { props: { initialDisplayPosts } }
}

export default function Site({ initialDisplayPosts }) {
  return (
    <>
      <PageSEO
        title={`Resources - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Blog Posts
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {blogPostsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={`${d.href}`}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
