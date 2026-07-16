import React from 'react'
import campus from "@/assets/campus.jpg"

function About() {
  return (
    <section className="bg-white py-20">
   <div>
         <h1 className='text-7xl text-slate-800 font-bold'>Shape Your Future at Bridgeview University</h1>

            <p className='text-4xl text-black'>Bridge the gap between where you are today and where you aspire to be. 
            Discover programs designed to equip you with the knowledge, skills,
             and confidence to excel in your chosen career.</p>
    </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src={campus}
              alt="Bridgeview University Campus"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="uppercase tracking-[0.35em] text-amber-500 font-semibold text-sm">
              About Bridgeview University
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
              Excellence in Education.
              <br />
              Leadership for Tomorrow.
            </h2>

            <div className="w-20 h-1 bg-amber-500 rounded-full mt-6 mb-8"></div>

            <p className="text-slate-600 leading-8 mb-6">
              At Bridgeview University, we are committed to shaping the next
              generation of leaders through academic excellence, innovation,
              and integrity. Our programs are designed to inspire critical
              thinking, creativity, and lifelong learning in a supportive and
              inclusive environment.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              With distinguished faculty, modern learning facilities, and
              strong industry partnerships, we empower students with the
              knowledge, practical experience, and confidence needed to thrive
              in an ever-changing global society. Every journey at Bridgeview
              begins with opportunity and ends with purpose.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="text-4xl font-bold text-[#0B1F3A]">10,000+</h3>
                <p className="text-slate-500 mt-2">Students Enrolled</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0B1F3A]">120+</h3>
                <p className="text-slate-500 mt-2">Academic Programs</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0B1F3A]">95%</h3>
                <p className="text-slate-500 mt-2">Graduate Employment</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0B1F3A]">50+</h3>
                <p className="text-slate-500 mt-2">Global Partnerships</p>
              </div>
            </div>

            <button className="bg-[#0B1F3A] hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About