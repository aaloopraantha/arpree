'use client'
import {useEffect,useRef} from 'react'
import {markup,start} from './update11'
export default function Home(){
 const started=useRef(false)
 useEffect(()=>{if(started.current)return;started.current=true;start()},[])
 return <div id="arpree-app" suppressHydrationWarning dangerouslySetInnerHTML={{__html:markup}}/>
}
