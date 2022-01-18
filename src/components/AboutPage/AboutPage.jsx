import { Paper } from '@material-ui/core';
import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutPage">
      <Paper className="aboutPaper">
      <div className="aboutPaper">
        <h3>Technologies used</h3>
        <ul>
          <li>
            Node
          </li>
          <li>
            PostgreSQL
          </li>
          <li>
            React
          </li>
          <li>
            Redux
          </li>
          <li>
            Sagas
          </li>
          <li>
            MaterialUI
          </li>
        </ul>
        <h3>Biggest Challenge</h3>
        <p>
          Styling
        </p>
      </div>
      </Paper>
    </div>
  );
}

export default AboutPage;
