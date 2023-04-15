import React from 'react'
import ThreedMode from '../Components/Herosection Demo/ThreedMode'
import VideoCompont from '../Components/Video/Video'
import Benifits from '../Components/benifitsReturns/Benifits'
import {useNavigate} from "react-router-dom"
import TransitionEfect from '../Components/TransitionEffectes/TransitionEfect'


const Home = () => {

    const navigate=useNavigate()


  return (
    <>
     < TransitionEfect />
         {/* Home Page banner Section  */}


    <div className='pt-16 relative'>
        <div className='w-full h-96 bg-gray-100 bg-blur-sm'>
       <ThreedMode/>      
      </div>
      <div className="absolute bottom-20 md:left-16 z-4 text-4xl md:text-5xl font-extrabold">
         <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-amber-400'>Live the Lifestyleyou have imagined</h1>
      </div>
    </div>



      {/* categery pages navigation bar */}


    <div className='flex md:flex-row sm:flex-col flex-col justify-center gap-5 pt-20 m-auto  items-center'>

        <div className='cursor-pointer' onClick={()=>navigate("/Aplinces")} >
            <VideoCompont Video="https://res.cloudinary.com/dqgeth8jx/video/upload/v1680709317/BudgetApp/Applinces_w6mtum.mp4" title="APPLINCES" />
        </div>
        <div className='cursor-pointer'  onClick={()=>navigate("/furnitur")} >
            <VideoCompont  Video="https://res.cloudinary.com/dqgeth8jx/video/upload/v1680709317/BudgetApp/Packeage_r1bqrd.mp4" title="PACKEAGE"/>
        </div>
        <div className='cursor-pointer'  onClick={()=>navigate("/Packeges")} >
            <VideoCompont  Video="https://res.cloudinary.com/dqgeth8jx/video/upload/v1680709317/BudgetApp/Furniture_sxxehk.mp4" title="FURNITURE"/>
        </div>

    </div>

                     {/* Benefits of Renting  dummy data page */}
    <div className='mt-20'>
        <div>
            <h1 className=' font-medium'>Benefits of Renting</h1>
            <p className=' font-light'>Why is renting Furniture fruitful?</p>
        </div>
        <div className='grid grid-cols-2  md:grid-cols-3'>
                    <div className='  h-44  md:h-auto  overflow-hidden cursor-pointer'>
                        <Benifits icon={"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680718983/BudgetApp/durable_w3gibg.png"}
                        head={"Engineered Durability"}
                        cont={"Produced with sturdy fabrics and materials, our furniture withstands all complexities."}
                        />
                    </div>

                    <div  className='  h-44  md:h-auto  overflow-hidden cursor-pointer'>
                        <Benifits icon={"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680719739/BudgetApp/award_nyugji.png"}
                        head={"Quality Products"}
                        cont={"Get the best quality furniture at Square Yards to make your home a heaven."}/>
                    </div>

                    <div  className='  h-44  md:h-auto  overflow-hidden cursor-pointer'>
                        <Benifits  icon={"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680719739/BudgetApp/etiquette_rdb3un.png"}
                        head={"Zero Commitments"}
                        cont={"No obligations to make the next payment. If you don’t need a rental item, return it. Simple!"}/>
                    </div>

                    <div  className='  h-44  md:h-auto  overflow-hidden cursor-pointer'>
                        <Benifits  icon={"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680719739/BudgetApp/customer-service_byx56a.png"}
                        head={"Excellent customer support"}
                        cont={"In any case, if you face any problems after renting the furniture, feel free to contact us any time to get our undivided attention to support you."}/> 
                    </div>
                    

                    <div  className='  h-44  md:h-auto  overflow-hidden cursor-pointer'>
                        <Benifits  icon={"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680719738/BudgetApp/gold-price_skvp6i.png"}
                        head={"High Flexibility"}
                        cont={"Get a huge variety of options to choose from. No attachments, you decide how long you need them."} />
                    </div>

                    <div  className='  h-44  md:h-auto  overflow-hidden cursor-pointer'>
                        <Benifits  icon={"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680719739/BudgetApp/flexibility_jtfwzf.png"}
                        head={"Valued Prices"}
                        cont={"Relish the comfort of owning plush furniture at your preferred time while abiding by your budget."} />
                    </div>             
    </div>

     
    </div>
    </>
  )
}

export default Home