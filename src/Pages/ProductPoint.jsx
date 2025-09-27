import React, { useContext } from 'react'
import IsHovered from '../Component/IsHovered'
import { ProductContext } from '../Component/Context'

function ProductPoint() {
    
  const { product } = useContext(ProductContext);

  const positions = [
    { rightPos: 14, topPos: 18, nameRightPos: 7, nameTopPos: 20 },
    { rightPos: 25, topPos: 20, nameRightPos: 17, nameTopPos: 23 },
    { rightPos: 30, topPos: 20, nameRightPos: 23, nameTopPos: 22 },
    { rightPos: 22, topPos: 56, nameRightPos: 18, nameTopPos: 59 },
    { rightPos: 8, topPos: 92, nameRightPos: 1, nameTopPos: 85 },
    { rightPos: 40, topPos: 79, nameRightPos: 35, nameTopPos: 81 },
    { rightPos: 35, topPos: 80, nameRightPos: 30, nameTopPos: 81 },
  ];

  const airDrakeProducts = product.filter(p => p.room === 'Air Drake');
  return (
    <div>
      {airDrakeProducts.slice(0, positions.length).map((prod, idx) => (
        <IsHovered
          key={prod._id}
          content={prod}
          rightPos={positions[idx].rightPos}
          topPos={positions[idx].topPos}
          nameRightPos={positions[idx].nameRightPos}
          nameTopPos={positions[idx].nameTopPos}
        />
      ))}
    </div>
  );
}

export default ProductPoint