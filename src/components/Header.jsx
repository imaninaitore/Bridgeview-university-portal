import React from 'react'
import backgroundImage from "@/assets/bridgeview.jpg"

function Header() {
  return (
    <header  style={{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>

<div className='absolute bottom-8 left-8'>
    <button className=" group flex items-center gap-2 px-8 py-3 rounded-xl bg-white/15 backdrop-blur-lg border border-white/30 text-white font-medium shadow-lg hover:bg-white/25 transition-all duration-300">
        Explore Programmes
     <span className="group-hover:translate-x-1 transition-transform duration-300">
    →
  </span>
</button> 
</div>
    </header>
  )
}

export default Header