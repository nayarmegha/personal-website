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
            <br></br>
            <span><a href="https://github.com/nayarmegha"> GitHub </a></span> 
          </span>
        </span>
        <span className='about'>
            I’m a student programmer and designer based in Chicago. <br></br>
            Check out some of my&nbsp;
          <span className='aboutlinks'><a href = "https://github.com/nayarmegha">projects here</a></span>
          <span className='about2'>
            .&nbsp;If you have any questions or would like to contact me,
          </span>
          <span className='aboutlinks'> <a href = "mailto: meghadnay08@gmail.com" > hit me up here. </a></span>
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
