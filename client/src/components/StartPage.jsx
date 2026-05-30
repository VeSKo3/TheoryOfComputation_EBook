import { chapters } from '../data/bookData'

export default function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <div className="start-card">
        <span className="start-eyebrow">Interactive Textbook</span>

        <h1 className="start-title">
          Theory of<br />
          <em>Computation</em>
        </h1>

        <div className="start-divider">
          <div />
          <div/>
          <div />
        </div>
          <div className="start-divider-icon">❧</div>

        <div className="start-toc-preview">
          <span className="start-toc-label">Contents Preview</span>
          <div className="start-toc-content">
            {chapters.map((chapter) => (
              <div key={chapter.label} className="start-toc-group">
                <div className="start-toc-chapter">{chapter.label}</div>
                {chapter.pages.map((page) => (
                  <div key={page.id} className="start-toc-content-card">
                    <span>{page.id}.</span> {page.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button className="start-btn" onClick={onStart}>
          <span>Start Learning TOC</span>
        </button>
      </div>
    </div>
  )
}
