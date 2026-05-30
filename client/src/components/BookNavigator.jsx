import { useState, useEffect, useRef } from 'react'
import { chapters, allPages } from '../data/bookData'

const LOAD_DELAY_MS = 380
const TOTAL = allPages.length

function CollapseIcon({ collapsed }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      {collapsed ? (
        <path d="M6 4l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M12 4l-6 5 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

export default function BookNavigator() {
  const [collapsed, setCollapsed] = useState(false)
  const [activePage, setActivePage] = useState(allPages[0])
  const [loading, setLoading] = useState(false)
  const [displayedPage, setDisplayedPage] = useState(allPages[0])
  const timerRef = useRef(null)

  const globalIndex = allPages.findIndex((p) => p.id === displayedPage.id) + 1

  function navigateTo(page) {
    if (page.id === activePage.id) return

    clearTimeout(timerRef.current)
    setActivePage(page)
    setLoading(true)

    if (window.matchMedia('(max-width: 540px)').matches) {
      setCollapsed(true)
    }

    timerRef.current = setTimeout(() => {
      setDisplayedPage(page)
      setLoading(false)
    }, LOAD_DELAY_MS)
  }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 540px)')
    const handler = (e) => setCollapsed(e.matches)
    handler(mq)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const PageComponent = displayedPage.Component

  return (
    <div className="book-navigator">
      <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
        <div className="sidebar-toggle">
          <button
            className="toggle-btn"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <CollapseIcon collapsed={collapsed} />
          </button>
        </div>

        <div className="sidebar-header">
          <span className="sidebar-book-label">Textbook</span>
          <span className="sidebar-book-title">Theory of Computation</span>
        </div>

        <nav className="sidebar-nav" aria-label="Book chapters">
          {chapters.map((chapter) => (
            <div key={chapter.label} className="nav-chapter-group">
              <span className="nav-chapter-label">{chapter.label}</span>
              {chapter.pages.map((page) => {
                const globalIdx = allPages.findIndex((p) => p.id === page.id) + 1
                const isActive = activePage.id === page.id

                return (
                  <button
                    key={page.id}
                    className={`nav-item${isActive ? ' active' : ''}`}
                    onClick={() => navigateTo(page)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="nav-item-index">{globalIdx}</span>
                    <span className="nav-item-text">{page.title}</span>
                  </button>
                )
              })}
            </div>
          ))}
        </nav>

        <footer className="sidebar-footer">
          <div className="page-tracker">
            <span className="page-tracker-nums">
              {globalIndex}
              <span style={{ opacity: 0.4 }}>/{TOTAL}</span>
            </span>
            <div className="page-tracker-bar">
              <div className="page-tracker-fill" style={{ width: `${(globalIndex / TOTAL) * 100}%` }} />
            </div>
          </div>
        </footer>
      </aside>

      <main className="content-area">
        {loading ? (
          <div className="page-loading">
            <div className="loading-inner">
              <div className="loading-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="loading-text">Loading page...</span>
            </div>
          </div>
        ) : (
          <div className="page-wrapper" key={displayedPage.id}>
            <PageComponent />
          </div>
        )}
      </main>
    </div>
  )
}
