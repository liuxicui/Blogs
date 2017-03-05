import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home'>
        <div className='home-cover'>
          <div>
            <div style={{width:'100%'}}>
              <h1>我的博客</h1>
              <p>前端工程师</p>
              <button><a href='https://github.com/liuxicui'>点击</a></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
