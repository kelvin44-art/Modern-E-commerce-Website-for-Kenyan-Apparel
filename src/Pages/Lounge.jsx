import chico from '../assets/Chico.jpg'
import IsHovered from '../Component/IsHovered'
import Practice from './RightArrow'
import { useContext } from 'react';
import { ProductContext } from '../Component/Context';
import Left from './Left';

function Lounge() {
  const { product } = useContext(ProductContext);

  const points = [
    { name: "Tangy and Sweet, Cherry Tart", topPos: 77, rightPos: 28 },
    { name: "Nairobi Stripes Edition", topPos: 40, rightPos: 39 },
    { name: "Nairobi Urban Stripe Denim Suit", topPos: 45, rightPos: 55 },
    { name: "Nairobi Urban Stripe Denim Camo", topPos: 50, rightPos: 59 },
    { name: "The Reculture NAD shirt", topPos: 63, rightPos: 33},
    { name: "Off-White fluffy pillow", topPos: 30, rightPos: 10 },
    { name: "Neat Eye-wear", topPos: 48, rightPos: 9 },
    {name: "Checked Heels - Black", topPos: 82, rightPos: 29},
  ];
  const bedroomProducts = product.filter(p => p.room === 'Lounge');
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
      <Left navigatee="/room/closet" right={75} content={"Explore the closet"} />
      <Practice navigatee="/" content={"Go Front"} top={85} right={5}/>
      <img src={chico} alt="" className='h-screen w-screen s'/>
    </div>
  );
}

export default Lounge