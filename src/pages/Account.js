import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Account.css';

import { useCookies } from 'react-cookie';
const Account = () => {
    const [cookies] = useCookies(['jwt','id']);
    const [userDate, setUserData] = useState({
        firstname: "Guest"
    })

    const [list, setList] = useState([]);
    const [bought, setBought] = useState([]);
    const [rent, setRent] = useState([]);
    useEffect(()=>{
        if(cookies.hasOwnProperty('jwt') && cookies['jwt'] != null){
             
            // DEPLOYED
            fetch(`https://long-plum-clam-robe.cyclic.app/users?id=${cookies['id']}`)

            // LOCAL
            // fetch(`http://localhost:8000/users?id=${cookies['id']}`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
                setUserData(data[0]);

                fetch(`https://long-plum-clam-robe.cyclic.app/usersList?id=${cookies['id']}`)
                // fetch(`http://localhost:8000/usersList?id=${cookies['id']}`)
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                    setList(data);
                });

                fetch(`https://long-plum-clam-robe.cyclic.app/usersRent?id=${cookies['id']}`)
                // fetch(`http://localhost:8000/usersRent?id=${cookies['id']}`)
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                    setBought(data);
                });

                fetch(`https://long-plum-clam-robe.cyclic.app/usersBought?id=${cookies['id']}`)
                // fetch(`http://localhost:8000/usersBought?id=${cookies['id']}`)
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                    setRent(data);
                });




            });
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
        <div className='universal_container' style={{height: "90vh"}}>
            <h2>Welcome {userDate?.firstname??"Guest"}</h2>
            <div>
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
            </div>
        </div>
        <Footer/>  
    </div>
  )
}

export default Account
