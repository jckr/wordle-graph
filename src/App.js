import React from 'react';
import './style.css';
import data from './data';
import Tree from './tree.js';

import { solutions, validWords } from './data/words';
import Lexicon from './lib/lexicon';

const lexicon = new Lexicon(solutions, validWords);
lexicon.init();

export default function App() {
  return <Tree data={data} />;
}
