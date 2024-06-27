import React from "react";

function Cards({item}) {
  console.log(item)
  return (
    <div className="mt-4">         

      <div className="div px-6">
        <div className="card w-96  bg-base-100 shadow-xl">
          <figure>
            <img
             src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline mt-2">${item.price}</div>
              <div className="badge badge-outline hover:text-white bg-pink-500  py-5 ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
