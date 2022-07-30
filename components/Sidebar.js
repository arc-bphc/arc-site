function Sidebar({ postsInSameFolder }) {
  return (
    <aside className="sticky table-cell w-60" aria-label="Sidebar">
      <div className="overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
        <ul className="space-y-1">
          {postsInSameFolder.map((post) => {
            return (
              <>
                <li key={post.orderInSidebar}>
                  <a
                    href={`/resources/${post.slug}`}
                    className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span className="ml-3">{post.title}</span>
                  </a>
                </li>
                {post.orderInSidebar % 2 == 0 && <hr />}
              </>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
