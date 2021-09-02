const Photographers = () => {
    return (
        <>
            <div className='row d-flex justify-content-center mt-3'>
                <form className="d-flex col-6 col-sm-3">
                    <input className="form-control me-1 profile-search" type="search" placeholder="Enter username" aria-label="Search" />
                    <span className="btn btn-outline-secondary">Search</span>
                </form>
            </div>
            <div className='row d-flex justify-content-center profile-table'>
                <div className='col-10 col-sm-8'>
                    <table className='table table-borderless'>
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Likes <i className="bi bi-heart-fill profile-likes"></i></th>
                                <th>Donated<i className="bi bi-currency-dollar profile-donated"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className='profile'><i className="bi bi-person-circle"></i> Photographer A</span></td>
                                <td>154</td>
                                <td>200$</td>
                            </tr>
                            <tr>
                                <td><span className='profile'><i className="bi bi-person-circle"></i> Photographer B</span></td>
                                <td>130</td>
                                <td>160$</td>
                            </tr>
                            <tr>
                                <td><span className='profile'><i className="bi bi-person-circle"></i> Photographer C</span></td>
                                <td>110</td>
                                <td>130$</td>
                            </tr>
                            <tr>
                                <td><span className='profile'><i className="bi bi-person-circle"></i> Photographer D</span></td>
                                <td>95</td>
                                <td>115$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>   
        </>
    )
}

export default Photographers
