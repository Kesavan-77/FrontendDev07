import React from 'react'

export default function pricingComponent() {
  return (
    <div className='price-Component'>
      <div className='price-Container p1'>
        <h2>Basic</h2>
        <h1> $ 19.99</h1>
        <hr/>
        <p>500 GB Storage</p>
        <hr />
        <p>2 Users Allowed</p>
        <hr />
        <p>Send up to 3 GB</p>
        <hr />
        <button>LEARN MORE</button>
      </div>
      <div className='price-Container p2'>
        <h2>Professional</h2>
        <h1>$ 24.99</h1>
        <hr />
        <p>1 TB Storage</p>
        <hr />
        <p>5 Users Allowed</p>
        <hr />
        <p>Send up to 10 GB</p>
        <hr />
        <button>LEARN MORE</button>
      </div>
      <div className='price-Container p3'>
        <h2>Master</h2>
        <h1>$ 39.99</h1>
        <hr />
        <p>2 TB Storage</p>
        <hr />
        <p>10 Users Allowed</p>
        <hr />
        <p>Send up to 20 GB</p>
        <hr />
        <button>LEARN MORE</button>
      </div>

      
    </div>
  )
}
