"use client"

import { useState, useRef } from "react"
import { Mail, Star, Calendar } from 'lucide-react';


const timeline = [
  {
    year: 2019,
    title: "High School Examination",
    description: "Passed 10th examination with 82% from BSEB",
    details:
      "",
  },
  {
    year: 2021,
    title: "Intermediate Examination (12th)",
    description: "Pass the 12th examinaton with A grade from BSEB board",
    details:
      "I opted PCM (physics, chemistry and mathematics in 12th and score 93% in (P+C+M),and prepared for jee main exam and score 90 percentile",
  },
  {
    year: 2022,
    title: "Enter in College Life",
    description: "Take Admission in SMVDU (CSE)",
    details:
      "In 2022 on the scored marks of Jee-Mains take admission in Shri Mata Vaishno Devi University(Smvdu), in Computer Science and Engineering for pursuing B.Tech",
  },
  {
    year: 2023,
    title: "Started Learning DSA and Developement",
    description: "Started learning DSA and Devlopmetn, i  started solving dsa problem in c++ and For developement i choose MERN  Stack",
    details:
      "",
  },
  {
    year: 2024,
    title: "Solved More than 300+ DSA Problems - C++",
    description: "Improved my problem solving skill, continue the solving DSA problem",
    details: ""
  },
  {
    year: 2024,
    title: "QR BASED Entry Exit Sytem - First Time implementation of my Development Learning (MERN Stack)",
    description: "Made a web based systme where i automate the mmannual entries of student to online and datbase/excel oriented",
    details:
      "",
  },
  {
    year: 2024,
    title: "SHOP-EASE - Java, Swing, SQL",
    description: "I did this project in 5th semester, this app developed for desktop use(window), basically we provide the management of grocery items and keep track of items, supplier, customers",
    details:
      "",
  },
  {
    year: 2024,
    title: "SmvDeX - MERN, Redis, Docker",
    description: "I did this project in 6th semester,this is web based applied build of MERN Stack, where university student can mark attendace, get notification reagrding class, get notes from teacher, give quizes, and upload pyq and use it",
    details:
      "",
  },
  {
    year: 2025,
    title: "Appwrite - from tutorial of HITESH CHAOUDHARY SIR",
    description: "",
    details:
      "",
  },
  {
    year: 2025,
    title: "DROP-BOX - from tutorial of HITESH CHAOUDHARY SIR",
    description: "",
    details:
      "",
  },
]


export default function Timeline() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          {timeline.map((item, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-2">{item.details}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10">
                <Star size={16} className="text-white" />
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}