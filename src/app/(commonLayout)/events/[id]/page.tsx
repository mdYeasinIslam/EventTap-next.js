"use client";

import Carousel from "@/components/EventPage/EventDetails/Carousel";

interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/findEvent-img3.png",
    alt: "Group of runners in colorful athletic wear running on a road",
    title: "Join the Running Revolution",
    description: "Experience the thrill of running with our vibrant community",
  },
  {
    id: 2,
    image: "/findEvent-img1.png",
    alt: "Runners participating in a marathon event",
    title: "Push Your Limits",
    description: "Challenge yourself and achieve new personal records",
  },
  {
    id: 3,
    image: "/findEvent-img2.png",
    alt: "Trail runners in scenic mountain landscape",
    title: "Explore New Trails",
    description: "Discover beautiful running routes and scenic adventures",
  },
];

export default function ImageCarousel() {
  return (
    <div className="max-w-[1440px] mx-auto space-y-10 mb-10">
        {/* send image a props */}
      <Carousel slides={slides}></Carousel>
    </div>
  );
}
