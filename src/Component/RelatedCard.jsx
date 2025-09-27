import { useState, useEffect, useRef } from 'react';


function RelatedCard({ products = [], mainProductId }) {
    const [mainProduct, setMainProduct] = useState(products.find(p => p._id === mainProductId) || products[0]);
    const [mainImage, setMainImage] = useState(mainProduct && mainProduct.image[0]);

    useEffect(() => {
        const found = products.find(p => p._id === mainProductId) || products[0];
        setMainProduct(found);
        setMainImage(found && found.image[0]);
    }, [products, mainProductId]);

        const mainSectionRef = useRef(null);
        const handleRelatedClick = (item) => {
                setMainProduct(item);
                setMainImage(item.image[0]);
                setTimeout(() => {
                    if (mainSectionRef.current) {
                        mainSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 50);
        };

    if (!mainProduct) return null;
    return (
    <div className='border-t-2 ml-10 pt-10 transition-opacity duration-500 ease-in opacity-100' style={{ background: 'none' }}>
            <div ref={mainSectionRef} className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {Array.isArray(mainProduct.image) && mainProduct.image.map((imgUrl, index) => (
                            <img onClick={() => setMainImage(imgUrl)} key={index} src={imgUrl} alt="" className='h-25 w-30 object-cover cursor-pointer'/>
                        ))}
                    </div>
                    <div className='w-full'>
                        <img className='h-115' src={mainImage} alt={mainProduct.name} />
                    </div>
                </div>
                <div className='flex-1 font-bold'>
                    <h1 className='font-extrabold text-3xl'>{mainProduct.name}</h1>
                    <p className='text-2xl mt-5'>$ {mainProduct.price}</p>
                    <p className='w-120 mt-10'>{mainProduct.description}</p>
                    <p className='underline mt-15'>Size Guide</p>
                    <hr />
                    <p className='py-5'>
                        SIZE: {mainProduct.size}
                    </p>
                    <hr />
                    <p className='py-5'>
                        {
                            mainProduct.availableQty === 0
                                ? <span className="text-red-500">Out of stock</span>
                                : <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-xl transition-colors duration-200">Add to Cart</button>
                        }
                    </p>
                    <hr />
                </div>
            </div>
            <div className='mt-10 mb-5'>
                <hr />
                <h1 className='font-extrabold text-3xl text-center py-5'>Related Products</h1>
                <hr />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                {
                    products
                        .filter(item => item._id !== (mainProduct && mainProduct._id))
                        .map((item, index) => (
                            <div key={index} className='pt-10'>
                                <div className='flex gap-10 overflow-x-auto pb-5'>
                                    <div className='min-w-[200px] p-3 rounded-lg cursor-pointer' onClick={() => handleRelatedClick(item)}>
                                        <img src={item.image[0]} alt={item.name} className='h-90 w-80 object-cover'/>
                                        <h1 className='font-bold text-lg mt-3'>{item.name}</h1>
                                        <p className='text-md mt-1'>$ {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default RelatedCard