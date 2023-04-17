import React from "react";

export default function Tracking({mont,year,date}) {
  const [showModal, setShowModal] = React.useState(false);

      let event=new Date()

    let dateNow=event.getUTCDate()
    let monthNow=event.getUTCMonth()
    let yearNow=event.getUTCFullYear()

    let maxday=2

    let percentage=Number(((dateNow-date)/maxday )*100)
    percentage==0 ? 10: percentage
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Tracking
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 w-auto outline-none focus:outline-none gap-8"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-center">
                  <h3 className="text-lg font-semibold">
                      Status of Product
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  

                {year<=yearNow&&mont<=monthNow&&dateNow-date<2  ?
                        <div div className=" flex flex-col gap-7 ">
                        <div div className=" flex  gap-10">
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Pending</span>
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">expexted Delivery :{ date+2+"-"+mont+"-"+year }</span>
 
                        </div>
                        <div className='h-1 w-full mt-5 bg-gray-300'>
            <div
                style={{ width: `${percentage}%`}}
                className={`h-full ${
                    percentage < 70 ? 'bg-green-600' : 'bg-green-600'}`}>
            </div>
        </div>

                    </div> : <div div className=" flex flex-col mt-5 ">
                    <div div className=" flex  gap-10">
                
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Sucess</span>
                   <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Delivered On :{ date+2+"-"+mont+"-"+year }</span>
                
                </div>

                  <div className='h-1 w-full  mt-5 bg-gray-300'>
                              <div
                                  style={{ width: `${percentage}%`}}
                                  className={`h-full ${
                                      percentage < 70 ? 'bg-green-600' : 'bg-green-600'}`}>
                              </div>
                          </div>

                

        </div>}





                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


// import { useRef } from 'react'

// function Tracking({mont,year,date}) {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const cancelRef = useRef()
    
//     let event=new Date()

//     let dateNow=event.getUTCDate()
//     let monthNow=event.getUTCMonth()
//     let yearNow=event.getUTCFullYear()

//     let maxday=2

//     let percentage=Number(((dateNow-date)/maxday )*100)

    
  
//     return (
//       <>
//         <Button colorScheme='blue' onClick={onOpen}>
//           Track
//         </Button>
  
//         <AlertDialog
//           isOpen={isOpen}
//           leastDestructiveRef={cancelRef}
//           onClose={onClose}
//         >
//           <AlertDialogOverlay>
//             <AlertDialogContent>
//               <AlertDialogHeader fontSize='lg' fontWeight='bold'>
//                 Delete Customer
//               </AlertDialogHeader>
  
//               <AlertDialogBody>

//              {year<=yearNow&&mont<=monthNow&&dateNow-date<2? <VStack>
//                 <Flex gap={10}>
//                 <Badge color={"red"}>Pending</Badge>
//                 <Badge color={"red"}>expexted Delivery :{ date+2+"-"+mont+"-"+year }</Badge></Flex>

//                 <Progress value={percentage==0 ? 10: percentage} size='xs' w={"full"} colorScheme='pink' />
//              </VStack>:<VStack>
//                 <Flex gap={10}>
//                 <Badge color={"green"}>Sucess</Badge>
//                 <Badge color={"blue"}> Delivered On :{ date+2+"-"+mont+"-"+year }</Badge></Flex>

//                 <Progress value={percentage==0 ? 10: percentage} size='xs' w={"full"} colorScheme='pink' />
//              </VStack>}










//               </AlertDialogBody>
  
//               <AlertDialogFooter>
//                 <Button ref={cancelRef} onClick={onClose}>
//                   Cancel
//                 </Button>
//                 <Button colorScheme='red' onClick={onClose} ml={3}>
//                   Delete
//                 </Button>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialogOverlay>
//         </AlertDialog>
//       </>
//     )
//   }

//   export default Tracking