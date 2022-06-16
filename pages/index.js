import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <div className='container'>
<div className='boox'>
  <div className='para'>
<h1>facebook</h1>
<p> Facebook helps you connect and share with the people in your life.</p>
</div>
<div className='box'>
  <form className='form'>
    <input type="emial"placeholder="Email address or phone number"/>
    <input type="password"placeholder="Password"/>
    <div>
      <button className='btn1'>Log In</button>
      
    </div>
    <div>
    <p className='par1'>Forgotten password ?</p>
    </div>
    <div className='border'>

    </div>
    <div>
      <a className='btn2' href="/signup">
        Create New Account
      </a>
    </div>
  </form>
</div>
   </div>
</div>

   </>
  )
}
