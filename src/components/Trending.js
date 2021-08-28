import Card from "./Card"
import Trending1 from './Stuff/2.jpg'
import Trending2 from './Stuff/3.jpg'
import Trending3 from './Stuff/7.jpg'



const Trending = () => {
    return (
        <>
            <div className='row'>
                <a href="#" className='trending-text text-center text-sm-start col-1'><h4>Trending</h4></a>
                <hr />
            </div>
            <div className='row d-flex justify-content-around align-items-center'>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Trending1} itemTitle='Gray Build' likes='10'/></div>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Trending2} itemTitle='Circle Bride' likes='14'/></div>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Trending3} itemTitle='Orange and Black' likes='8'/></div>
            </div>
        </>
    )
}

export default Trending
