import closet from '../assets/closet.jpg'
import IsHovered from '../Component/IsHovered'
import Practice from './RightArrow'
import { useContext } from 'react';
import { ProductContext } from '../Component/Context';

function Closet() {
  const { product } = useContext(ProductContext);

  const points = [
    { name: "Nike Air Force one", topPos: 18, rightPos: 22 },
    { name: 'Nike x Nocta \"Black”', topPos: 55, rightPos: 28 },
    { name: "Nike Nocta Sneakers White Ghetto Aesthetic Drake", topPos: 67, rightPos: 37 },
    { name: "59FIFTY Fitted Hats", topPos: 75, rightPos: 45 },
    { name: "The Reculture NAD shirt", topPos: 63, rightPos: 33},
    { name: "Off-White fluffy pillow", topPos: 30, rightPos: 10 },
    { name: "Neat Eye-wear", topPos: 48, rightPos: 9 },
    {name: "Checked Heels - Black", topPos: 82, rightPos: 29},
  ];
  const bedroomProducts = product.filter(p => p.room === 'Closet');
  return (
    <div className='h-screen overflow-hidden flex justify-center items-center'>
      {points.map((point, idx) => {
        const prod = bedroomProducts.find(p => p.name === point.name);
        return prod ? (
          <IsHovered
            key={prod._id}
            content={prod}
            topPos={point.topPos}
            rightPos={point.rightPos}
          />
        ) : null;
      })}
      <Practice navigatee="/" content={"Go Front"} top={85} right={5}/>
      <img src={closet} alt="" className='h-screen w-screen'/>
    </div>
  );
}

export default Closet