import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Account.css';

import { useCookies } from 'react-cookie';
const Account = () => {
    const [cookies, setCookie] = useCookies(['xsrf','user']);
    const [userDate, setUserData] = useState({
        firstname: "Guest"
    })
    const [guestData, setGuestData] = useState(null);

    const [list, setList] = useState([]);
    const [bought, setBought] = useState([]);
    const [rent, setRent] = useState([]);
    useEffect(()=>{
        if(cookies.hasOwnProperty('xsrf') && cookies['xsrf'] != null && cookies.hasOwnProperty('user') && cookies['user'] != null){
             
            try{ 
                // fetch(`http://localhost:5000/singleUser/${cookies['user'].id}`) // local

                fetch(`https://videostoreapi.torontohotelcalifornia.net/singleUser/${cookies['user'].id}`)  // prod

                // DEPLOYED OLD
                // fetch(`https://long-plum-clam-robe.cyclic.app/users?id=${cookies['id']}`)
    
                // LOCAL
                // fetch(`http://localhost:8000/users?id=${cookies['id']}`)
                .then((res) => {

                    if(res.status == 200){
                        return res.json();
                    } else {
                        return null;
                    }
        
                })
                .then((data) => {

                    setGuestData(data);
                    // setUserData(data[0]);
    
                    // fetch(`https://long-plum-clam-robe.cyclic.app/usersList?id=${cookies['id']}`)
                    // // fetch(`http://localhost:8000/usersList?id=${cookies['id']}`)
                    // .then((res) => {
                    //   return res.json();
                    // })
                    // .then((data) => {
                    //     setList(data);
                    // });
                    setList([]);
    
                    // fetch(`https://long-plum-clam-robe.cyclic.app/usersRent?id=${cookies['id']}`)
                    // // fetch(`http://localhost:8000/usersRent?id=${cookies['id']}`)
                    // .then((res) => {
                    //   return res.json();
                    // })
                    // .then((data) => {
                    //     setBought(data);
                    // });
                    setBought([]);

                    // fetch(`https://long-plum-clam-robe.cyclic.app/usersBought?id=${cookies['id']}`)
                    // // fetch(`http://localhost:8000/usersBought?id=${cookies['id']}`)
                    // .then((res) => {
                    //   return res.json();
                    // })
                    // .then((data) => {
                    //     setRent(data);
                    // });
                    setRent([]);
    
                });

            }catch(err){
                console.log(err)
            }
        } else {
            window.location.replace("/home");
        }
    },[]);

  return (
    <div className="mainContainer">
        <div>
          <NavigationBar/>
          <Header title={'My Account'}/>
        </div>
        <div className='universal_container' style={{height: "90vh"}}>
            <h2>Welcome {guestData?.firstname??"Guest"} {guestData?.lastname??""}</h2>
            <div>
                <h3>Acc info</h3>
                <div>
                    <p>first name: {guestData?.firstname??"Guest"}</p>
                    <p>last name: {guestData?.lastname??""}</p>
                    <p>email: {guestData?.email??""}</p>
                </div>
            </div>     
            {/* <div>
                <h3>My List</h3>
                <div>
                    {list && list.length > 0 ? <>
                    </>: <>
                        <p>No items in list</p>
                    </>}
                </div>
            </div>
            <div>
                <h3>My Purchases</h3>
                <div>
                    {bought && bought.length > 0 ? <>
                    </>: <>
                        <p>No items in list</p>
                    </>}
                </div>
            </div>
            <div>
                <h3>My Rentals</h3>
                <div>
                    {rent && rent.length > 0 ? <>
                    </>: <>
                        <p>No items in list</p>
                    </>}
                </div>
            </div> */}
        </div>
        <Footer/>  
    </div>
  )
}

export default Account
