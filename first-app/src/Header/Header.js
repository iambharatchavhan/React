import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StyleHTMLAttributes } from 'react'
// import "./Header/style.css"

const Header = () =>{
    return(
   

        <header>
        <div className="logo"></div>
        <div className="nav">
          <ul>
            <li id="show-nails">
              <a href="">Volume I</a>
              <div className="thumbnail-peekaboo">
                <img className="thumb" title="Hello everyoone" src="https://lh6.googleusercontent.com/-UH8Tl-EG78c/UUoRYmvOWoI/AAAAAAAAADg/EIT1YomfqBo/s1231/1.jpeg.jpg"/>
                <img className="thumb" src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg"/>
                <img className="thumb" src="https://lh5.googleusercontent.com/-ImESS5vXwTQ/UUoRZtDDdwI/AAAAAAAAAD0/mBlvPxXMuDU/s1231/3.jpeg.jpg"/>
                <img className="thumb" src="https://lh3.googleusercontent.com/-a4HykmTjnLw/UUoRZ9AOzNI/AAAAAAAAAD8/bsVqg8naI2o/s1231/4.jpeg.jpg"/>
                <img className="thumb" src="https://lh5.googleusercontent.com/-lmIWz4ADxc0/UUoRaFjdNXI/AAAAAAAAAEI/widPZMMiBVM/s1231/5.jpeg.jpg"/>
                <img className="thumb" src="https://lh3.googleusercontent.com/-ZbMYEV9F1Bc/UUoRajU3qmI/AAAAAAAAAEE/Y8nB8gecGgU/s1000/6.jpeg.jpg"/>
                <img className="thumb" src="https://lh6.googleusercontent.com/-88kTocv470A/UUoRbG0sNgI/AAAAAAAAAEU/XNupHrK1pvE/s1231/7.jpeg.jpg"/>
                <img className="thumb" src="https://lh3.googleusercontent.com/-O_0Ce7JxwJo/UUoRbZ6g4HI/AAAAAAAAAEc/O0mmZ0t0U88/s1231/8.jpeg.jpg"/>
                <img className="thumb" src="https://lh6.googleusercontent.com/-w7N6XM1WsqY/UUoRbRFPCeI/AAAAAAAAAEg/u3KB5ykIk9g/s1231/9.jpeg.jpg"/>
                <img className="thumb" src="https://lh6.googleusercontent.com/-UH8Tl-EG78c/UUoRYmvOWoI/AAAAAAAAADg/EIT1YomfqBo/s1231/1.jpeg.jpg"/>
                <img className="thumb" src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg"/>
                <img className="thumb" src="https://lh5.googleusercontent.com/-ImESS5vXwTQ/UUoRZtDDdwI/AAAAAAAAAD0/mBlvPxXMuDU/s1231/3.jpeg.jpg"/>
                <img className="thumb" src="https://lh3.googleusercontent.com/-a4HykmTjnLw/UUoRZ9AOzNI/AAAAAAAAAD8/bsVqg8naI2o/s1231/4.jpeg.jpg"/>
                <img className="thumb" src="https://lh5.googleusercontent.com/-lmIWz4ADxc0/UUoRaFjdNXI/AAAAAAAAAEI/widPZMMiBVM/s1231/5.jpeg.jpg"/>
              </div>
            </li>
            <li><a href="">Volume II</a></li>
            <li><a href="">About</a></li>
          </ul>
        </div>
      </header>
     
    
    )
      
    
}

export default Header;