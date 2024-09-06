import React from 'react'
import banner from '../Comp/image/banner_mens.png'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className='container'>
<div className='banner'>
    <img src={banner} alt=''/>
</div>

</div>
  )
}

export default Home