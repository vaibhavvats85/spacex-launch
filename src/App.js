import './App.scss';
import Filters from './components/filters/filters';
import Programs from './components/programs/programs';
import * as constants from './constants';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header title={constants.APP_TITLE} />
      </div>
      <div className="main">
        <Filters />
        <Programs />
      </div>
      <div className="signature">
        <Signature name={constants.DEVELOPER_NAME} />
      </div>
    </div>
  );
}

const Header = ({ title }) => (
  <span>{title}</span>
);


const Signature = ({ name }) =>
  (<>
    <strong>{constants.DEVELOPED_BY}: </strong>
    <span>{name}</span>
  </>
  );

export default App;
