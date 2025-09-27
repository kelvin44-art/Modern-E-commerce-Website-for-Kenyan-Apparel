import bedroom from '../assets/Bedroom.png'
import IsHovered from '../Component/IsHovered'
import Practice from './RightArrow'
import { useContext } from 'react';
import { ProductContext } from '../Component/Context';

function Bedroom() {
  const { product } = useContext(ProductContext);
 
  const points = [
    { name: "Neat Gram Vamp Tee", topPos: 47, rightPos: 56 },
    { name: "Neat Gram Astroworld Tee", topPos: 49, rightPos: 40 },
    { name: "Pluto Hendrix", topPos: 60, rightPos: 53 },
    { name: "Ash Gray Jacketsuit N12", topPos: 60, rightPos: 80 },
    { name: "Floral Lave Garter Lingerie Set ", topPos: 40, rightPos: 50 },
    { name: "Off-White fluffy pillow", topPos: 30, rightPos: 10 },
    { name: "Neat Eye-wear", topPos: 48, rightPos: 9 },
    {name: "Checked Heels - Black", topPos: 82, rightPos: 29},
  ];
  const bedroomProducts = product.filter(p => p.room === 'Bedroom');
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
      <img src={bedroom} alt="" className='h-screen w-screen s'/>
    </div>
  );
}

export default Bedroom