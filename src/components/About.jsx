import React from "react";
import campus from "@/assets/campus.jpg";

function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold">
            About Bridgeview University
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Excellence in Education,
            <span className="block text-amber-500">
              Leadership for Tomorrow
            </span>
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6 mb-8"></div>

          <p className="text-lg text-slate-600 leading-8">
            Empowering students through academic excellence, innovation,
            and a commitment to developing future leaders who will make a
            positive impact across the world.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
              src={campus}
              alt="Bridgeview University Campus"
              className="w-full h-[550px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <h3 className="text-3xl font-bold text-[#0B1F3A] mb-6">
              Inspiring Excellence Since Day One
            </h3>

            <p className="text-slate-600 leading-8 mb-6">
              At Bridgeview University, we believe education is more than
              earning a degree—it is about unlocking potential, inspiring
              innovation, and preparing students to lead with confidence in
              an ever-changing world.
            </p>

            <p className="text-slate-600 leading-8 mb-6">
              Through exceptional teaching, modern learning facilities,
              world-class research, and strong industry partnerships, our
              students gain the knowledge, practical experience, and
              leadership skills needed to excel in their careers and make
              meaningful contributions to society.
            </p>

            <div className="border-l-4 border-amber-500 pl-6 mb-10">
              <p className="text-xl italic text-slate-700 leading-8">
                "Bridge the gap between where you are today and where you
                aspire to be. Discover programs designed to equip you with
                the knowledge, skills, and confidence to shape tomorrow."
              </p>
            </div>

            <button className="bg-[#0B1F3A] hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition">
              Learn More
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;