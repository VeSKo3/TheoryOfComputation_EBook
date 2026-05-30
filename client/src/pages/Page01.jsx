export default function Page01() {
  return (
    <article className="toc-page">
      <p className="toc-page-eyebrow">Page 1 - Chapter 1</p>
      <h1 className="toc-page-title">Introduction to Languages and Grammar</h1>
      <p className="toc-page-subtitle">
        Theory of Computation starts by defining languages as mathematical objects and grammars as systems that generate them.
      </p>
      <div className="toc-page-rule" />

      <div className="toc-page-body">
        <p>
          In TOC, a language is a set of strings built from an alphabet. An alphabet is a finite, non-empty set of symbols, such as {'{0, 1}'} for binary strings.
        </p>

        <h3>Core Terms</h3>
        <p>
          A string is a finite sequence of symbols from an alphabet. The empty string is written as epsilon and has length zero. The set of all possible strings over an alphabet is denoted by star closure.
        </p>

        <div className="toc-callout">
          <p>
            If Sigma is an alphabet, then Sigma* means all finite strings over Sigma, including the empty string.
          </p>
        </div>

        <h3>What Is a Grammar?</h3>
        <p>
          A grammar is a rule system that generates valid strings of a language. It typically includes terminals, non-terminals, production rules, and a start symbol.
        </p>

        <table className="toc-definition-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T</td>
              <td>Terminals (actual symbols in strings)</td>
            </tr>
            <tr>
              <td>N</td>
              <td>Non-terminals (variables used in derivation)</td>
            </tr>
            <tr>
              <td>P</td>
              <td>Production rules</td>
            </tr>
            <tr>
              <td>S</td>
              <td>Start symbol</td>
            </tr>
          </tbody>
        </table>

        <h3>Why This Matters</h3>
        <p>
          Languages and grammars form the base of automata theory, compiler design, parsing, and complexity analysis. Every later topic in TOC depends on this foundation.
        </p>
      </div>
    </article>
  )
}
