const Header = () => {
    return (
        <div class='header d-flex justify-content-between align-items-center row set-position py-2'>
            <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start mb-2'>
                <a className='brand text-nowrap' href='#'><i class="bi bi-camera me-1"></i>Social</a>
                <div class="dropdown pt-2">
                    <button class="btn category-top dropdown-toggle d-none d-sm-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul class="dropdown-menu category-dropdown" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item dropdown-item" href="#">Trending</a></li>
                        <li><a class="dropdown-item dropdown-item" href="#">Highway</a></li>
                        <li><a class="dropdown-item dropdown-item" href="#">Sports</a></li>
                    </ul>
                </div>
            </div>
            <button class="navbar-toggler col-12 d-sm-none d-flex justify-content-center align-items-start category-top pb-0" type="button" data-bs-toggle="collapse" data-bs-target="#categoryCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <p className='d-inline '>Category </p>     
                <i class="bi bi-caret-down-fill d-inline-flex mt-1 ms-2"></i>
            </button>
            <div class="collapse navbar-collapse" id="categoryCollapse">
                <ul class="navbar-nav">
                    <li>
                        <a class="dropdown-item text-center" aria-current="page" href="#">Trending</a>
                    </li>
                    <li>
                        <a class="dropdown-item text-center" aria-current="page" href="#">Highway</a>
                    </li>
                    <li>
                        <a class="dropdown-item text-center mb-3" aria-current="page" href="#">Sports</a>
                    </li>
                </ul>
            </div>
            <div className='col-12 col-sm-6'>
                <form className='d-flex align-items-center justify-content-center justify-content-sm-end'>
                    <input type='text' className='search-inp' placeholder='Search ...' aria-label='Dollar amount (with dot and two decimal places)' />
                    <a href='#' className='btn search-btn ms-2' type='button' id='button'><i class='bi bi-search'></i></a>
                </form>
            </div>
        </div>
    )
}

export default Header
