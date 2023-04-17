import React, { useState } from "react"

const minusIcon = '-'
const plusIcon = '+'

export default function Accordion({ title,products  }) {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <div className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white" >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row" onClick={toggleExpanded}>
        <h5 className="flex-1">
          {title}
        </h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div className={`px-6 pt-0  overflow-scroll transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
        <p className="pb-4 text-left">
           <div className="grid grid-cols-2 " >
        {products&& products.map((item)=>{
            return <div className=" flex   flex-col ">
                    {item.productImages[0]+item.productImages[1]==="ht"? <img className="w-20"    src={item.productImages}/>:<img className="w-20"   src={`https:${item.productImages}-250x250.jpg`}/>}
                    <p>{item.name}</p>
            </div>

        })}</div>
        </p>
      </div>
    </div>
  )
}



// import React from 'react'


// const SeeMore = ({products}) => {
//   return ( <Accordion allowMultiple>
//     <AccordionItem>
//       <h2>
//         <AccordionButton>
//           <Box as="span" flex='1' textAlign='left'>
//            SeeMore.....
//           </Box>
//           <AccordionIcon />
//         </AccordionButton>
//       </h2>
//       <AccordionPanel pb={4}>
//         <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={5} >
//         {products&& products.map((item)=>{
//             return <VStack>
//                     {item.productImages[0]+item.productImages[1]==="ht"? <Image   src={item.productImages}/>:<Image    src={`https:${item.productImages}-250x250.jpg`}/>}
//                     <p>{item.name}</p>
//             </VStack>

//         })}</Grid>
//       </AccordionPanel>
//     </AccordionItem>

  
//   </Accordion>)
// }

// export default SeeMore