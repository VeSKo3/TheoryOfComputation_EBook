export default function Page03() {
  return (
    <article className="toc-page">
      <p className="toc-page-eyebrow">Page 3 - Chapter 1</p>
      <h1 className="toc-page-title">Automata Design Workflow</h1>
      <p className="toc-page-subtitle">
        Designing a DFA is a structured process: identify what must be remembered, encode it as states, and verify behavior on examples.
      </p>
      <div className="toc-page-rule" />

      <div className="toc-page-body">
        <h3>Step-by-Step Method</h3>
        <table className="toc-definition-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Write sample accepted and rejected strings.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Decide what information the machine must remember.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Create states for each distinct memory condition.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Define transitions for every state-symbol pair.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mark start and accepting states, then test strings.</td>
            </tr>
          </tbody>
        </table>

        <h3>Example Target Language</h3>
        <p>
          Build a DFA over {'{0, 1}'} that accepts strings ending with 01.
        </p>

        <div className="toc-callout">
          <p>
            You can model this with three states: start, seen-0, and seen-01 (accepting).
          </p>
        </div>

        <p>
          Once a DFA works, minimization can reduce equivalent states and produce the smallest possible DFA for the same language.
        </p>
      </div>
    </article>
  )
}
