function Sidebar({ postsInSameFolder }) {
  console.log(postsInSameFolder);

  return (
    <aside class="w-60 sticky table-cell" aria-label="Sidebar">
      <div class="overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
        <ul class="space-y-1">
          {postsInSameFolder.map(post => {
            return (
              <>
                <li key={post.orderInSidebar}>
                  <a
                    href={`/resources/${post.slug}`}
                    class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span class="ml-3">{post.title}</span>
                  </a>
                </li>
                <hr />
              </>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
