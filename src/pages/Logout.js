import React, { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';
import { useCookies } from 'react-cookie';
const Logout = () => {
    const [cookies, setCookie] = useCookies(['jwt']);
    function setJwt() {
        setCookie('jwt', null);
        return new Promise((res, rej)=>{
            res();
        })
    }
    useEffect(()=>{
        setJwt()
        .then(()=>{
            window.location.replace("http://localhost:3000/home");
        })
    },[])
  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'Logging out...'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Logout
