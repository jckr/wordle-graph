import React from 'react';
import './style.css';
import data from './data';
import Tree from './tree.js';
export default function App() {
  return <Tree data={data} />;
}
