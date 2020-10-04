import React from 'react';
import './App.scss';
import noimg from './img/svg/logo.svg'
import img0 from './img/svg/1.svg'
import img1 from './img/svg/2.svg'
import img2 from './img/svg/3.svg'
import img3 from './img/svg/4.svg'
import img4 from './img/svg/5.svg'
const imgs = [
  {
    url: img0,
    num: 0
  },
  {
    url: img1,
    num: 1

  },
  {
    url: img2,
    num: 2

  },
  {
    url: img3,
    num: 3

  },
  {
    url: img4,
    num: 4

  },
]
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      show: 0
    }
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1>アルバム</h1>
          <img
            src={imgs[this.state.show].url}
            alt=""
            onError={(e) => e.target.src = noimg}
          />
          <div className="div">
            {imgs.map((img) =>
            {
              return (
                <img
                  key={img.num}
                  className={`img`}
                  src={img.url}
                  alt=""
                  onError={(e) => e.target.src = noimg}
                  onClick={() => { this.setState({ show: img.num }); }}
                />
              )
            })}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
