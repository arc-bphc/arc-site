import { useState, useEffect } from 'react'
import Link from 'next/link'

function Sidebar({ postsInSameFolder }) {
  const [show, setShow] = useState(false)
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  useEffect(() => {
    const handleWindowScroll = () => {
      setShow(true)
    }
    handleWindowScroll()
    // window.addEventListener('scroll', handleWindowScroll)
    // return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed left-8 bottom-8 z-10 flex-col gap-3 rounded-lg bg-gray-100 p-2 transition-all hover:bg-gray-300 dark:bg-gray-900 md:hidden ${
          show ? 'flex' : 'hidden'
        }`}
      >
        <button
          type="button"
          className="ml-1 mr-1 w-8 rounded py-1"
          aria-label="Toggle Menu"
          onClick={onToggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-gray-900 dark:text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`fixed top-0 right-0 z-10 h-full w-full transform overflow-y-auto bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
            navShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-5 mt-11 h-8 w-8 rounded"
              aria-label="Toggle Menu"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <nav className="fixed mt-8 h-full">
            {postsInSameFolder.map((post) => (
              <div key={post.title} className="px-12 py-4">
                <Link
                  href={`/resources/${post.slug}`}
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  onClick={onToggleNav}
                >
                  {post.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Web SideBar */}
      <div className="h-30 h-sm:hidden hidden w-full lg:table-cell lg:w-60">
        <aside className="md:sticky md:top-10" aria-label="Sidebar">
          <div className="overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
            <ul>
              {postsInSameFolder.map((post) => {
                return (
                  <div key={post.orderInSidebar}>
                    <li>
                      <a
                        href={`/resources/${post.slug}`}
                        className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ml-3">{post.title}</span>
                      </a>
                    </li>
                    {post.orderInSidebar % 2 == 0 && <hr />}
                  </div>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Sidebar
