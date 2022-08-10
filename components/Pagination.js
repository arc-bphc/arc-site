import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)
  const pages = []

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            rel="previous"
            className="cursor-auto p-2 disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}

        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/projects/` : `/projects/page/${currentPage - 1}`}>
            <button rel="previous" className="p-2">
              Previous
            </button>
          </Link>
        )}

        {pages.map((pagenum) => {
          if (pagenum == currentPage) {
            return (
              <span key={pagenum}>
                <Link href={`/projects/page/${pagenum}`}>
                  <button className="rounded-full border-2 border-solid p-2">{pagenum}</button>
                </Link>
              </span>
            )
          } else {
            return (
              <span key={pagenum}>
                <Link href={`/projects/page/${pagenum}`}>
                  <button className="p-2">{pagenum}</button>
                </Link>
              </span>
            )
          }
        })}

        {!nextPage && (
          <button rel="next" className="cursor-auto p-2 disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}

        {nextPage && (
          <Link href={`/projects/page/${currentPage + 1}`}>
            <button rel="next" className="p-2">
              Next
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
