"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
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
    details:""  
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

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-3xl font-bold text-foreground sm:text-4xl ">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground border-b-2">How i started and Now where i am</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-800"
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />

      {/* for circular dot in time line */}
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>


{/* this out card section */}
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-gradient-to-br from-blue-500/50 via-sky-400/40 to-cyan-300
 rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground text-white">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-black/80">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
