import React from 'react'

function Cards({item}) {
// console.log(item)

  return (

    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-150 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p> {item.title}</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>


  )
}

export default Cards
