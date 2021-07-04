import React, {useRef, useState, useEffect} from 'react'
import styles from './Menu.module.scss';
import CusButton from '../../atom/CusButton/CusButton';
// import { Navigate } from '../../../Contexts';
import OutsideClickHandler from 'react-outside-click-handler';
import {
    BrowserRouter as Router,
    useHistory,
    useLocation,
    Link
  } from "react-router-dom";
import SingleSection from '../../atom/SingleSection/SingleSection';
function Menu(props) {
    let history = useHistory();
    var [openCategory, setOpenCategory]= useState(false);
    // const categoryRef= useRef();

    return (
        <div className={styles.mainComponent} >
            <div onClick={()=> history.push("/")} style={{cursor: 'pointer'}}>
                <img src={'/image/svg/knife.svg'} alt="" className={styles.img}/>
                <div className={styles.projectName}>
                    <p className={styles.text1}>Mealy</p>
                    <p className={styles.text2}>Food delivery</p>
                </div>
            </div>
            
            <div  className={styles.boxMenu}>
            <OutsideClickHandler onOutsideClick={() => setOpenCategory(false)} >
          
            <div className={styles.boxCategory}>
                <div      className={styles.category} 
                        onClick={() => setOpenCategory(!openCategory)} 
                        // onMouseLeave={() =>setOpenCategory(false)}
                        
                        >
                    <img src={openCategory?'image/svg/x.svg':'/image/svg/category.svg'} alt=""/>
                    <p className={styles.text3}>Categorys</p>
                </div>
                {
                    
                    <div  className={styles.openCategory} style={openCategory?{height: 100}: {height: 0, boxShadow: 'none'}}>
                        <SingleSection name="Home" img="/image/svg/home.svg" action={() => history.push("/")}/>
                        
                        <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                            <SingleSection name="Login" img="/image/svg/login.svg"/>
                        </Link>
                        <Link to="/history" style={{color: 'black', textDecoration: 'none'}}>
                            <SingleSection name="History" img="/image/svg/logout.svg"/>
                        </Link>
                        
                    </div>
                }
            </div>
            </OutsideClickHandler>

                
            </div>
            <div className={styles.boxMenu2}>
                <img src={'/image/svg/contact.svg'} alt=""/>
                <p className={styles.text3}>Contact Us</p>
            </div>
            <div className={styles.boxIcon}>
                <img src={'/image/svg/facebook.svg'} alt=""/>
                <img src={'/image/svg/youtube.svg'} alt=""/>
                <img src={'/image/svg/twitter.svg'} alt=""/>
                <img src={'/image/svg/instagram.svg'} alt=""/>
                <img src={'/image/svg/in.svg'} alt=""/>
            </div>
            <Link to="/payment" className={styles.icecream}>
                <img src={'/image/svg/icecream.svg'} alt="" />
            </Link>
            <div className={styles.button}>
                <CusButton data={'Account'} handleClick={() => history.push("/login")}/>
            </div>
            

        </div>
    )
}

export default Menu
