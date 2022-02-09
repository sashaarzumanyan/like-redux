import React from 'react';
import Likes from "./likes"
import Title from "./title"


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://assets.cntraveller.in/photos/60b9f47baa65b6af02d24f33/16:9/w_1024%2Cc_limit/indiasurfinglead.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
