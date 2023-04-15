import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleproductFind } from '../redux/Product/productSlice'
import { PostCartAsync, getCartAsync } from '../redux/cart/Cartslice'
import ProductCard from '../Components/ProductGridCard/ProductCard'
import TransitionEfect from '../Components/TransitionEffectes/TransitionEfect'

const SingleProduct = () => {
    const {id} = useParams()
    const dispatch=useDispatch()
    const {products,singleProduct}=useSelector((store)=>store.products)
    const {_id,categorySlug,filterSlug,minRentAmount,name,productImages,slug} =JSON.parse(sessionStorage.getItem("singProduct"));
     const HandleCart=()=>{
        let cred={
            product_id:_id,
            name,
            minRentAmount,
            filterSlug,
            categorySlug,
            productImages, 
            quentity:1
        }
 
     
    
        dispatch(PostCartAsync(cred))
        setTimeout(()=>{dispatch(getCartAsync())},1000)
        
    }
  

  let related=products.products.slice(0, 3);

    let length=singleProduct.length
   if(length==0){
    dispatch(singleproductFind(id))
    }
  return (
 <div>
<TransitionEfect/>
<div className="min-w-screen min-h-screen bg-yellow-300 flex items-center  lg:p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl md:p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                {productImages[0]+productImages[1]==="ht"? <img className="w-full relative z-10" src={productImages} alt="product image" />:<img  className="w-full relative z-10" src={`https:${productImages}-250x250.jpg`} alt="product image" />}
                   
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                    <p className="text-sm">{slug}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">₹</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{minRentAmount}</span>
                        <span className="font-bold text-xl leading-none align-baseline">/Month</span>
                        
                    </div>
                    <div className="inline-block align-bottom">
                        <button onClick={HandleCart} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
       {/* related Product    */}
       <div className=' flex flex-wrap m-4 gap-4'>
        {related.map((item,id)=><ProductCard key={id} product={item} />)}

       </div>




</div>
  )
}

export default SingleProduct