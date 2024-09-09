import "./Img.css"

const Img = ({ src }) => {

    return (
      <div className='item'>
        <img className='item-image' src={src} alt="" />
      </div>
     
    )
  }
  
  export default Img