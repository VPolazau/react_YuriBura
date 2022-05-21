import React from 'react'

const LoginPage = ({ onLogin }) => {
    return (
        <div className='jimbotron'>
            <p>Login to see secret page!</p>
            <button className='btn btn-primary' onClick={onLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
