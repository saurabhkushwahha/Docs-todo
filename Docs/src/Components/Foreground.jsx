import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import Card from './Card';
function Foreground() {
    const ref=useRef(null)
    
        const data=[{
    desc: "Hello, Here I'm taking data array with all elements as objects, and we implement the map function on it to display it.",
    footerInfo: {
      downloadInfo: "199.0mb",
      isdownloadInfo: true,
      footerTag: {
        Tag: false,
        TagInfo: "Download",
        TagInfoColor: "lime",
      },
    },
  },
  {
    desc: "This is the description of this card and is displayed here.",
    footerInfo: {
      downloadInfo: "10.0mb",
      isdownloadInfo: false,
      footerTag: {
        Tag: true,
        TagInfo: "Download",
        TagInfoColor: "lime",
      },
    },
  },
  {
    desc: "Here is another object in the data array, showcasing how easy it is to expand and customize this structure.",
    footerInfo: {
      downloadInfo: "500.0mb",
      isdownloadInfo: true,
      footerTag: {
        Tag: true,
        TagInfo: "Large File",
        TagInfoColor: "orange",
      },
    },
  },
  {
    desc: "This card has a different description, and its footer shows different information.",
    footerInfo: {
      downloadInfo: "25.0mb",
      isdownloadInfo: false,
      footerTag: {
        Tag: false,
        TagInfo: "Information",
        TagInfoColor: "blue",
      },
    },
  },
  {
    desc: "This is the final card in our array, with unique information for the footer section.",
    footerInfo: {
      downloadInfo: "75.0mb",
      isdownloadInfo: true,
      footerTag: {
        Tag: true,
        TagInfo: "Critical Update",
        TagInfoColor: "#E0FFFF",
      },
    },
  },
            {
            desc: "Hello, Here I'm taking data array with all element as object and we implement the map function on it to display it"  ,
            footerInfo:{
                downloadInfo:"199.0mb",
                    isdownloadInfo: true,
                footerTag:{
                    Tag:false,
                    TagInfo: "Download",
                    TagInfoColor:"#EEE8AA"
                },
            },  
            },


            {
            desc: "This is  description of this card and displayed here ."  ,
            footerInfo:{
                downloadInfo:"10.0mb",
                    isdownloadInfo: false,
                footerTag:{
                    Tag:true,
                    TagInfo: "Download",
                    TagInfoColor:"lime"
                },
            },  
            }
        ]
        return (
        <motion.div ref={ref} className='fixed w-full h-full  z-10 p-3 flex gap-10 flex-wrap'>
           {data.map( (item,index)=> {
            return (
                <Card data={item}  boxRef={ref}/>
           )
           })}
   </motion.div>
             
  )
  
}

export default Foreground