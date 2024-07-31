import React, { Component } from 'react';
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import './TextScramble.scss';

class Scramble extends Component {
  static displayName = 'Scramble';
  static defaultProps = {};

  render() {
    const a_scrambleTexts = [
      "ctual",
      "dversary",
      "mplify",
      "dvanced",
      "ugmented",
      "ndroid",
      "narchy"
    ]

    const i_scrambleTexts = [
      "ntelligence",
      "nclusion",
      "nfiltration",
      "nformation",
      "nception",
      "nitiative",
      "ntrusion"
    ]

    return (
        <div class="container">
          <div className="centered-top">
            <div class="wording">
                <span class="a-heading a-bracket">[</span><span class="a-heading">A</span><span class="a-heading a-bracket">]</span>
                <span class="text">        
                  <TextScramble
                    texts={a_scrambleTexts}
                    letterSpeed={5}
                    nextLetterSpeed={150}
                    pauseTime={4000}
                  />
                </span>
            </div>
            <div class="wording">
                <span class="i-heading i-bracket">[</span><span class="i-heading">I</span><span class="i-heading i-bracket">]</span>
                <span class="text-second">        
                  <TextScramble
                    texts={i_scrambleTexts}
                    letterSpeed={5}
                    nextLetterSpeed={120}
                    pauseTime={4000}
                  />
                </span>
            </div>
          </div>
        </div>
    );
  }
}



export default Scramble;