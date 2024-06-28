import React from "react";

function ListRendering() {
  const fruits = ["apple ", "orange", "mango", "watermelon", "pineapple"];
  return (
    // <div>
    //   {
    //     fruits.map((fruit, index) => {
    //     return <li key={index}>{fruit}</li>;
    //   })}
    // </div>



    // Filter
    // function App() {
    //   const cars = [
    //     { id: 1, brand: 'BMW' },
    //     { id: 2, brand: 'Audi' },
    //     { id: 3, brand: 'Maruti' },
    //   ];
    //   return (
    //     <div>
    //         {
    //             cars.filter((car)=> car.id==3).map((car)=>(  <h1>{car.brand}</h1>))
    //         }
    //     </div>
    //   );
    // } 

    <div>
      {
       fruits.map((fruit)=> (
        <h1>{fruit}</h1>
       ))
      }
    </div>
  );
}

export default ListRendering;
