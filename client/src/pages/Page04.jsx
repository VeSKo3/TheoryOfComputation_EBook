import React from 'react';
import image1 from '../assets/DFA_string_ending_with_b.png';
export default function Page03() {
  return (
    <article className="toc-page">
      <p className="toc-page-eyebrow">Page 4 - Chapter 1</p>
      <h1 className="toc-page-title">Design of Automata</h1>
      <div className="toc-page-rule" />

      <div className="toc-page-body">

        <p>
          Build a DFA over {'{a, b}'} that accepts strings ending with b.
        </p>

        <div className="toc-callout">
          
        </div>

        <p>
          Once a DFA works, minimization can reduce equivalent states and produce the smallest possible DFA for the same language.
        </p>
      </div>
    </article>
  )
}
