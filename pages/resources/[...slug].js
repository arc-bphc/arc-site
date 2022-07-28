import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import Sidebar from '@/components/Sidebar'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('resources')
  const paths = posts.map((p) => ({
    params: {
      slug: formatSlug(p).split('/'),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('resources')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('resources', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  //Code for the sidebar :)
  let postsInSameFolder = []
  if(params.slug.length > 1){
    //This means there's a nested system
    const folderName = params.slug[0];
    postsInSameFolder = allPosts.filter(post => post.slug.split("/")[0] == folderName)
    postsInSameFolder.sort((post1, post2) => post1.orderInSidebar - post2.orderInSidebar)
  }

  return { props: { post, authorDetails, prev, next, postsInSameFolder } }
}

export default function Resources({ post, authorDetails, prev, next, postsInSameFolder }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      <Sidebar postsInSameFolder={postsInSameFolder}/>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
