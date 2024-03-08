import React, { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';
import { useCookies } from 'react-cookie';
const Account = () => {
    const [cookies] = useCookies(['jwt']);
    useEffect(()=>{
        if(cookies.hasOwnProperty('jwt') && cookies['jwt'] != null){

        } else {
            window.location.replace("http://localhost:3000/home");
        }
    },[]);

  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'My Account'}/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Account
