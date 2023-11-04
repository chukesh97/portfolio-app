import './Layout.css'
import Nav from '../components/Navbar/Navbar';
import Lead from '../components/Lead/Lead';
// import {router as Router, Route} from 'react-router-dom';


export default function Layout() {
  return (
    <div className="layout">
      <Nav/>
      <Lead/>
      </div>
  )
};