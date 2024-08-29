import React from 'react'
import { ItemsTable } from './Tables/ItemsTable'

function ShoppingCart() {
  return (
    <div className='w-[714px] h-[560px] bg-white p-10 '>
        <div className='flex justify-between'>
            <h3>Shopping Cart</h3>
            <p>Select All</p>
        </div>
        <div className="max-w-[700px] overflow-hidden ">
            <ItemsTable/>
        </div>

    </div>
  )
}

export default ShoppingCart