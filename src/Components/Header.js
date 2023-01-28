import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate()
  const data = useSelector((state)=> state) 
  const count=data.length

  const handleCart =()=>{
    navigate('/cart')
  }

  return (
    <div className='header'>
        <h1>My Cart</h1>
        <div className='cart'>
            <div className='count'>
                <h3>{count}</h3>
            </div>
        <ShoppingCartIcon style={{fontSize:"40px", cursor:"pointer"}} onClick={handleCart}/>
        </div>        
    </div>
  )
}

export default Header