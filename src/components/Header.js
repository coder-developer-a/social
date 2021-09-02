import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className='header d-flex justify-content-between align-items-center row set-position py-2'>
            <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start mb-2'>
                <Link to='/' className='brand'><i className="bi bi-camera me-1"></i>Social</Link>
                <div className="dropdown d-none d-sm-block">
                    <button className="btn category-top pb-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul className="dropdown-menu category-dropdown" aria-labelledby="dropdownMenuButton1">
                        <li><Link to='/category-trending' className='dropdown-item text-center mt-1'>Trending</Link></li>
                        <li><Link to='/category-highway' className='dropdown-item text-center'>Highway</Link></li>
                        <li><Link to='/category-sports' className='dropdown-item text-center'>Sports</Link></li>
                    </ul>
                </div>
                <Link to="/photographers" className='btn category-top pb-0 d-none d-sm-block'>Photographers</Link>
            </div>
            <div className='d-sm-none col-12'>
                <div className='row d-flex justify-content-center'>
                    <button className="navbar-toggler d-flex justify-content-center align-items-center category-top fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#categoryCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className='d-inline fs-5'>Category</div>
                        <div><i className="bi bi-caret-down-fill d-inline-flex"></i></div> 
                    </button>
                    <div className="collapse navbar-collapse" id="categoryCollapse">
                        <ul className="navbar-nav">
                            <li>
                                <Link to='/category-trending' className='dropdown-item text-center mt-1'>Trending</Link>
                            </li>
                            <li>
                                <Link to='/category-highway' className='dropdown-item dropdown-item text-center'>Highway</Link>
                            </li>
                            <li>
                                <Link to='/category-sports' className='dropdown-item dropdown-item text-center'>Sports</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <Link to='/Photographers' className='btn category-top fs-5 pb-0'><span className='category-top fs-5'>Photographers</span></Link>
                </div>
                <div className='row d-flex justify-content-center'>
                    <Link to='/signin' className='btn category-top fs-5'><span className='category-top fs-5'>Sign in</span></Link>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <form className='d-flex align-items-center justify-content-center justify-content-sm-end'>
                    <div>
                        <Link to='/signin'><button className='btn category-top d-none d-sm-inline-block'>Sign in</button></Link>
                        <input type='text' className='search-inp' placeholder='Search ...' aria-label='Dollar amount (with dot and two decimal places)' />
                        <span className='ms-2 search-span'><i className='bi bi-search category-top'></i></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header