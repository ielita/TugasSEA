import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-muda.png'

const navbar = () => {

        const [sticky, setSticky] = useState(false);

        useEffect(()=>{
            window.addEventListener('scroll', ()=>{
                window.scrollY > 50 ? setSticky(true) : setSticky(false)
            })
        },[])
    return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="Logo SEA Salon" className='logo' />
        <ul>
            <li>Home</li>
            <li>Products</li>  
            <li>Reviews</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
    )
}

export default navbar