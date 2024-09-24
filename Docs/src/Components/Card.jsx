import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgSoftwareDownload } from "react-icons/cg";
import { FaFileAlt } from "react-icons/fa";
import { motion } from 'framer-motion'

function Card({ data, boxRef }) {
    return (
        <motion.div drag whileDrag={{ scale: 1.05 }} dragConstraints={boxRef} dragTransition={{ bounceStiffness: 900, bounceDamping: 10 }} className='Card relative w-56 h-72 bg-zinc-900/10    mt-5  rounded-[3.2rem] py-10 px-6 overflow-hidden shadow-lg'>
            <FaFileAlt />
            <p className=' leading-none tracking-tight text-sm mt-4'>{data.desc}</p>
            <footer className='w-full h-20 px-5  absolute bottom-0 left-0  '>

                <div className='w-full flex  items-center justify-between p-1'>
                    <span className='text-[.8rem] font-semibold '>{data.footerInfo.downloadInfo}</span>
                    {data.footerInfo.isdownloadInfo ? <CgSoftwareDownload /> : <AiOutlineCloseCircle />
                    }
                </div>
                {data.footerInfo.footerTag.Tag &&
                    <div style={{ background: data.footerInfo.footerTag.TagInfoColor }} className='w-full  p-4 text-[0.9rem] tracking-tighter leading-none font-medium flex items-center justify-center bg-cyan-400/35 absolute bottom-0 left-0 '>
                        {data.footerInfo.footerTag.TagInfo}
                    </div>

                }
            </footer>
        </motion.div>
    )
}

export default Card