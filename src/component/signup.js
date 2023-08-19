import React from 'react'

function Signup() {
  return (
    <div className='footer'>
      <form>
        <div className='form-float'>
        <input className='form-control' id='username' type='text' placeholder='enter username' required></input>
            <label htmlFor='username'>Username</label>
        </div>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='enter E-mail' required></input>
            <label htmlFor='username'>E-mail</label>
        </div>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='enter password' required></input>
            <label htmlFor='username'>Password <img className='lock' src={IMG}/></label>
        </div>
        <div className='form-floating'>
            <input className='form-control' id='username' type='text' placeholder='confirm password' required></input>
            <label htmlFor='username'>Confirm Password <img className='lock' src={IMG}/></label>
            </div>
      </form>
    </div>
  )
}

export default Signup
