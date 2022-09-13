import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = (props) => {
  return (
      <div className='frame22'>
        <span id = "cloud-circle1"
        />
        <span className='text'>
          <span>
            <span> <a href = "https://www.linkedin.com/in/meghadnayar/"> Linkedin </a></span>
            <br></br>
            <span></span>
            <br></br>
            <span><a href="https://github.com/nayarmegha"> GitHub </a></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className='intro2'>
          <span className='intro'>
            <span>
              I’m a student programmer and designer based in Chicago.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Check out some of my
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className='text18'><a href = "https://github.com/nayarmegha">projects here</a></span>
          <span className='text19'>.</span>
          <span className='text20'>
            {' '}
            If you have any questions or would like to contact me,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className='text21'> <a href = "mailto: meghadnay08@gmail.com" > hit me up here. </a></span>
        </span>
        <span id = "cloud-circle"
        />
        <span className='projects'>
          <span> <a href="https://github.com/nayarmegha"> Projects </a></span> <span> &nbsp;&nbsp;&nbsp;&nbsp; </span> <span> <a href = "mailto: meghadnay08@gmail.com" > Contact </a></span>
        </span>
        <span className='hello'>
          <span>
            <span>Hello,</span>
            <br></br>
            <span>I’m Megha.</span>
          </span>
        </span>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
