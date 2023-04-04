import React, { useEffect } from 'react'
import './Leftnav.scss';

interface openClose {
  Open: boolean;
}


const Leftnav = (props: openClose) => {
  //const [Name, setName] = useState("Edit Profile");

  const { Open } = props;
  useEffect(() => {
    // setName(user.userInfo.Fname + ' ' + user.userInfo.Lname);
    // console.log(Name);


  }, [])


  function signoutfunc(e: any) {


  }
  return (<ul className={Open ? 'Open' : 'Closed'} >
    <li>Edit Profile</li>
    <li>Settings</li>
    <li><div className='signoutb' onClick={signoutfunc}>Sign Out</div></li>
    <li>Contact us</li>
    <li>About</li>
    <li>Rate the app</li>
  </ul>
  )

}

export default Leftnav;