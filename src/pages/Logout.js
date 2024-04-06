import React, { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';
import { useCookies } from 'react-cookie';
const Logout = () => {
  const [cookies, setCookie] = useCookies(['xsrf','user']);

    function setXSRF() {
        setCookie('xsrf', null);
        return new Promise((res, rej)=>{
            res();
        })
    }

    function setUser() {
      setCookie('user', null);
      return new Promise((res, rej)=>{
          res();
      })
    }

    useEffect(()=>{
        setXSRF()
        setUser()
        .then(()=>{
            window.location.replace("/home");
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
