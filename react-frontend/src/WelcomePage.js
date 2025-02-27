import {Image, Button, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const WelcomePage = () => {
  const fetchWelcomePage = () => {
    axios.get("http://localhost:8080/welcome").then(res => {
      console.log(res)
    })
  }

  useEffect(() => {
    fetchWelcomePage();
  }, [])

  return (
    <div className="App">
      <div className="decor" >
      <Image src="/image/Group6.png" alt='decor'/>
      </div>
      <div className="container">
      <Row>
        <div className='mt-5 mb-5'>
          <Image src='/image/logo_Fulbright.svg' alt='logo'/>
        </div>
      </Row>
      <Row >
        <div >
        <Link to="/restricted">
          <button className="mb-3 logSignButton">Login</button>{' '}
        </Link>
        </div>
      </Row>
      <Row >
        <div >
        <Button className="logSignButton">Sign up</Button>{' '}
        </div>
      </Row>
      </div>
    </div>
  )
}

export default WelcomePage;