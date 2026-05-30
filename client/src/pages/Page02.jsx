export default function Page02() {
  return (
    <article className="toc-page">
      <p className="toc-page-eyebrow">Page 2 - Chapter 1</p>
      <h1 className="toc-page-title">Automata: Core Ideas</h1>
      <p className="toc-page-subtitle">
        Automata are abstract machines that process strings and decide whether those strings belong to a language.
      </p>
      <div className="toc-page-rule" />

      <div className="toc-page-body">
        <p>
          An automaton moves through states while reading input symbols. The transition behavior and accepting states determine whether an input string is accepted or rejected.
        </p>

        <h3>Why Automata Are Important</h3>
        <p>
          Automata provide a hardware-independent way to reason about computation. They help us classify problems by what kind of memory or computational power is required.
        </p>

        <div className="toc-callout">
          <p>
            Regular expressions and finite automata are equivalent in expressive power.
          </p>
        </div>

        <table className="toc-definition-table">
          <thead>
            <tr>
              <th>Machine</th>
              <th>Memory Model</th>
              <th>Language Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Finite Automaton</td>
              <td>State only</td>
              <td>Regular</td>
            </tr>
            <tr>
              <td>Pushdown Automaton</td>
              <td>Stack</td>
              <td>Context-free</td>
            </tr>
            <tr>
              <td>Turing Machine</td>
              <td>Unbounded tape</td>
              <td>Recursively enumerable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
