import React, { useContext } from 'react'
import Food from '../../atom/Food/Food';
import FoodIcon from '../../atom/FoodIcon/FoodIcon';
import Recent from '../../atom/Recent/Recent';
import styles from './MainScreen.module.scss';
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider'
function MainScreen(props) {

    const history = useHistory();
    // console.log(useAuth().currentUser);
    return (
        <motion.div 
            initial= {{ opacity: 0.4, y: -100}}
            animate= {{ opacity: 1, y: 0}}
            className={styles.mainComponent}>
            <div className={styles.leftComponent}>
                <p className={styles.header}>Mealy Food</p>
                <p className={styles.afterHeader}>A Better Way to Organize Your Recipe</p>
                {/* <p>dsd</p> */}
                <div className={styles.button} onClick={() => history.push("/order")}>
                    <p className={styles.textbutton} >Order Now</p>
                    <img src={'/image/svg/arrowdown.svg'} alt="" className={styles.arrow}/>
                </div>
                {/* <CusButton/> */}
                <div className={styles.recent}>
                    <p className={styles.text1}>Recently Pre Orders</p>
                    <div className={styles.box}>
            
                        <Recent name={"Mealy Food 1"} rate={"4/5"}/>
                        {/* <div className={styles.secondchild}> */}
                            <Recent name={"Mealy Food 2"} rate={"4.5/5"}/>  
                        {/* </div> */}

                    </div>
                </div>
            </div>
        <img src="/image/svg/bigIcon.svg" alt="" className={styles.bigIcon}/>
        </motion.div>
    )
}

export default MainScreen
