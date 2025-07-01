import { ArrowBigRightDash } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'
import PageTitle from '../../../componants/PageTitle'

const BlockPage = () => {
    const navigate = useNavigate()

    const BlockWiseData = [
      {
        id:1,
        name:"Registered",
        value:"30"
      },
       {
        id:2,
        name:"Visited",
        value:"23"
      },
       {
        id:3,
        name:"Anemic",
        value:"12"
      },
       {
        id:4,
        name:"Non-Anemic",
        value:"32"
      }
    ]
  return (
    <div>
            <PageTitle title="Blocks" />

        <div className="w-full grid grid-cols-2 gap-4 mb-10 rounded-[24px] ">
            {[1,2,3,4].map((id)=>{
                return <div className="bg-white rounded-[24px] px-4 py-4">

                        <div className="flex justify-between items-center px-1">
                            <div className='font-urbanist text-center text-2xl text-red-500 font-semibold'>Block A</div>
                            <div onClick={()=>navigate('/admin/block/123')}>
                                <ArrowBigRightDash/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 h-[50vh]">
                             { BlockWiseData?.map((item)=>{
                              return <div className=" flex flex-col justify-center items-center">
                                <p className="text-xl font-urbanist font-bold text-gray-800">{item?.name}</p>
                                <p className="text-[5rem] font-urbanist text-red-500 font-bold">{item?.value}</p>
                              </div>
                             })}
                            
                        </div>

                </div>
            })}
        
      </div>
    </div>
  )
}

export default BlockPage
