import React from 'react';
import './App.scss';
import GithubCorner from 'react-github-corner';

import Padlock from './components/Padlock';

function App() {
  return (
    <div className="App">
      <GithubCorner href="https://github.com/histefanhere/react-padlock" octoColor='teal' />
      <Padlock />
      <footer>Made with ❤️ by <a href="https://github.com/histefanhere" target="_blank" rel="noopener noreferrer">Histefanhere</a> for a <a href="https://github.com/NZMSA/2021-introduction-to-general-software-development" target="_blank" rel="noopener noreferrer">NZMSA Workshop Competition</a></footer>
    </div>
  );
}

export default App;
