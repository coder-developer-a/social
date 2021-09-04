import { Link } from "react-router-dom"

const Signin = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='col-8 col-sm-6 sign-in rounded'>
                <div className='text-center fs-2'>
                    <Link to='/' className='sign-in-brand'><i class="bi bi-camera"></i> Social</Link>
                </div>
                <div className='mx-2 mt-2'>
                    <label htmlFor="emailInput" className='form-label'>Email</label>
                    <input type="text" className='form-control box-shadow' placeholder='Enter Email' />
                </div>
                <div className='mx-2 mt-2'>
                    <label htmlFor="password-input" className='form-label'>Password</label>
                    <input type="password" className='form-control box-shadow' placeholder='Enter password' />
                </div>
                <div className='ms-3 mt-4 mb-4'>
                    <button className='btn log-in'>Log in</button>
                </div>
                <hr />
                <div className='ms-2 mb-2'>
                    Don't have an account? <span className='ms-1 sign-up'>Sign up!</span>
                </div>
            </div>
        </div>
    )
}

export default Signin
