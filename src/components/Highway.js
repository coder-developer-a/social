import Card from './Card'
import Highway1 from './Stuff/9.jpg'
import Highway2 from './Stuff/10.jpg'
import Highway3 from './Stuff/11.jpg'



const Highway = () => {
    return (
        <>
            <div className='row'>
                <a href="#" className='category text-center text-sm-start col-1'><h4>Highway</h4></a>
                <hr />
            </div>
            <div className='row d-flex justify-content-around align-items-center'>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Highway1} itemTitle='Foggy Road' likes='5'/></div>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Highway2} itemTitle='A Little Outside' likes='7'/></div>
                <div className='col-12 col-sm-6 col-lg-4'><Card imageSource={Highway3} itemTitle='Look At The Width!' likes='4'/></div>
            </div>
        </>
    )
}

export default Highway
