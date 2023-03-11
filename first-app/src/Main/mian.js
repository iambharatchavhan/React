import './mian.css'
import Data from '../data/data'
import  ReactDOM  from 'react-dom/client'
import Cards from './cards'
// console.log( Data());

const Main = () => {
    


  return (
    <div className="wrapper">
      <div className="cards-container">
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       
      </div>
    </div>
  )

}
// Data();
export { Main }
