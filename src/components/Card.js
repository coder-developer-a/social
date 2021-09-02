import { useState } from "react"

const Card = ({ imageSource, itemTitle, likes }) => {
    const [likeNumber, setCount] = useState(parseInt(likes));
    const [checker, setChecker] = useState(true);
    const likeClick = (e) => {
        e.target.classList.toggle('liked')
        setChecker(!checker)
        if(checker) {
            setCount(likeNumber + 1) 
        }else {
            setCount(likeNumber - 1) 
        }
    }
    return (
        <div className='card item mt-2 mb-3'>
            <img src={ imageSource } alt="..." className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title text-center'>{itemTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Photo by: <span className='fst-italic'>Photographer Name</span></h6>
                <hr />
                <div className='card-bottom d-flex align-items-center justify-content-between'>
                    <div><i className="bi bi-heart-fill like-icon" title='Like' onClick={likeClick}></i><span className='mx-1 align-center like-number'>{likeNumber}</span></div>
                    <div><i className="bi bi-box-arrow-up-right share-icon" title='Share'></i></div>
                    <div className='text-end donate' title='Donate'><i className="bi bi-currency-dollar"></i></div>
                </div>    
            </div>
        </div>
    )
}

export default Card
