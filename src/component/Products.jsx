import React from 'react'
import ProductCard from './ProductCard';
import { FaExclamationTriangle } from 'react-icons/fa';

const Products = () => {

    const isLoading = false;
    const errorMessage = "There happening somthing wrong !!!"; // empty means no error

    const product = [
        {
            productId: 1,
            productName: "IphoneXs max",
            image: "https://placehold.co/600x400",
            description: "This is description",
            quantity: 0,
            price: 1450.0,
            discount: 10.0,
            specialPrice: 1305.0
        },
        {
            productId: 2,
            productName: "Macbook Air Ms",
            image: "https://placehold.co/600x400",
            description: "This is description 1",
            quantity: 2,
            price: 1450.0,
            discount: 10.0,
            specialPrice: 1305.0
        }
    ];

    return (
        <div className='lg:px-4 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto'>

            {isLoading ? (
                <p className="text-center">It is loading...</p>

            ) : errorMessage ? (
                <div className='flex justify-center items-center h-[200px]'>
                    <FaExclamationTriangle className='text-slate-800 text-3xl' />
                    <span className='text-slate-800 text-lg font-medium'>{errorMessage}</span>
                </div>

            ) : (
                <div className='min-h-[700px]'>
                    <div className='pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6'>
                        {product && product.map((item , i)=> <ProductCard key={i} {...item} />
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

export default Products
