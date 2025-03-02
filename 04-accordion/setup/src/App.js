import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const questions = data;
  return (
    <main>
      <div className="container">
        <h3>Questions and answer about Login
        </h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={questions.id} {...question}/>
          })}
        </section>
      </div>
   </main>
  );
}

export default App;
