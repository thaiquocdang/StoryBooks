import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>
        <i className='fas fa-book-reader'> </i> Blogs
      </h3>
      <div className='section'>
        <p className='lead'>Create public and private stories of your life</p>
      </div>
      <div className='divider'></div>
      <div className='section'>
        <a href='/auth/google' className='btn red darken-1'>
          <i className='fab fa-google left'></i> Log In With Google
        </a>
      </div>
    </div>
  )
}

export default Login
