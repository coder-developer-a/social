import Card from "./Card"
import Highway1 from './Stuff/12.jpg'
import Highway2 from './Stuff/13.jpg'
import Highway3 from './Stuff/14.jpg'

const Sports = () => {
    return (
        <>
            <div className='row'>
                <a href="#" className='category text-center text-sm-start col-1'><h4>Sports</h4></a>
                <hr />
            </div>
            <div className='row d-flex justify-content-around align-items-center'>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Highway1} itemTitle='Classic Field' likes='5'/></div>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Highway2} itemTitle='Cold Net' likes='7'/></div>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Highway3} itemTitle='Would You Play?' likes='4'/></div>
            </div>
        </>
    )
}

export default Sports
