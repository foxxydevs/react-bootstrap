import React from 'react'

const Home = () => {
 return (
  <div className='mt-5'>
   <p>
    Ini adalah isi dari home page didalamnya ada component button dan lain lain
   </p>
   <button type='button' className='btn btn-primary mb-2'>
    Click Me Slur 😁
   </button>
   <div className='card'>
    <div className='card-body'>
     <h5 className='card-title'>Card title</h5>
     <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
     <p className='card-text'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </p>
     <a href='/' className='card-link'>
      Card link
     </a>
     <a href='/' className='card-link'>
      Another link
     </a>
    </div>
   </div>
  </div>
 )
}

export default Home
