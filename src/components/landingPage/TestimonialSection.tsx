import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
         {
           name: "Sarah Marie",
           role: "Outdoor Enthusiast",
           text:
       "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
           rating: 5,
           image: "/testimonial-img.jpg",
         },
         {
           name: "Jason Loped",
           role: "Event Organizer",
           text:
       "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
           rating: 5,
          image: "/testimonial-img.jpg",
         },
         {
           name: "Priya Kusal",
           role: "Adventure Seeker",
           text:
       "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
           rating: 5,
           image: "/testimonial-img.jpg",
         },
       ];
export default function TestimonialSection() {

  return (
    <section className="bg-[#F3EEE7] md:h-[750px] flex items-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2a0901] mb-16   font-[font-open-sans]">Testimonials</h2>
       
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="relative w-full bg-[url(/cardBg.png)] py-14 px-10 ">
                      <div className="text-[#a855f7] text-5xl absolute top-6 right-8">
                          <Image
                              src={'/testimonial-coma.png'}
                              alt="coma"
                              width={500}
                              height={500}
                              className="w-10 h-10 object-cover"
                          />
                    </div>
                    <h3 className="text-xl font-bold text-[#2a0901]">{t.name}</h3>
                    <p className="text-gray-600 mb-4">{t.role}</p>
                    <p className="text-gray-800 mb-6">"{t.text}"</p>
                    <div className="text-[#ff5757] text-right">
                    {"★★★★★".slice(0, t.rating)}
                    </div>
                    <div className="absolute left-0 ">
                        <Image 
                            src={t.image}
                            alt={t.name}
                            width={500}
                            height={500}
                            className="w-20 h-20 rounded-full "
                            />
                    </div>
                </div>
                    ))}
            </div>
          
        

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-10 gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
            <span className="sr-only">Previous</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-[#ff5757] bg-[#ff5757] flex items-center justify-center hover:bg-[#ff4040] transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}
