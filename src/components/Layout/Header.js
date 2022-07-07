import React, { Fragment } from "react";

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/spencer-davis-5UeN8VrCxvs-unsplash.jpg'

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table full of Meals" />
            </div>
        </Fragment>
    )
}

export default Header