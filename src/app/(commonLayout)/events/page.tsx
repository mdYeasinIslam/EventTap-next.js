"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { EventType } from "@/types/EventType"
import CommonHeader from "@/components/shared/heading/CommonHeader"
import Events from "@/components/landingPage/FeatureSection/Events"

// Sample event data

const events: EventType[] = [
  {
    id: 1,
    title: "City Marathon 2025",
    description: "Enjoy live performances from top local bands",
    date: "Jun 17 - 20",
    location: "New York City",
    image: "/featureImg.png",
  },
  {
    id: 2,
    title: "Creative Workshop",
    description: "Enjoy live performances from top local bands",
    date: "May 20 - 25",
    location: "San Francisco",
    image: "/featureImg.png",
  },
  {
    id: 3,
    title: "Outdoor Yoga",
    description: "Enjoy live performances from top local bands",
    date: "Jul 01 - 05",
    location: "Miami",
    image: "/featureImg.png",
  },
  {
    id: 4,
    title: "Summer Festival",
    description: "Enjoy live performances from top local bands",
    date: "Aug 10 - 15",
    location: "Los Angeles",
    image: "/featureImg.png",
  },
  {
    id: 5,
    title: "Tech Conference",
    description: "Enjoy live performances from top local bands",
    date: "Sep 05 - 10",
    location: "Seattle",
    image: "/featureImg.png",
  },
  {
    id: 6,
    title: "Food Festival",
    description: "Enjoy live performances from top local bands",
    date: "Oct 12 - 18",
    location: "Chicago",
    image: "/featureImg.png",
  },
]

export default function page() {

    return (
      <section className="bg-[#f8f5f2] py-16 px-5 xl:px-0">
            
            <div className="w-full  container mx-auto  ">
                
           <CommonHeader title="Featured Events"/>

            <div className="relative overflow-hidden">
                <div
                className="grid grid-cols-4 gap-5" >
              {events.map((event) => <Events
                key={event?.id}
                event={event}
                section='events'
              />)
                  }
                </div>
            </div>
            </div>
      </section>
  )
}
