import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { fadeInUp } from "@/utils/animations";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialsCarousel = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="What Parents Say About Us ⭐"
          subtitle="Hear from our happy parents about their experience"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1440: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-12 mobile-large:pb-14 tablet:pb-16"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full rounded-2xl mobile-large:rounded-3xl
                                bg-surface
                                p-5 mobile-large:p-6 tablet:p-7 desktop:p-8
                                shadow-md ring-1 ring-black/5">
                  {/* Quote Icon */}
                  <Quote className="h-6 w-6
                                    mobile-large:h-7 mobile-large:w-7
                                    tablet:h-8 tablet:w-8
                                    text-primary/30 mb-3 mobile-large:mb-4" />

                  {/* Text */}
                  <p className="text-sm mobile-large:text-base
                                tablet:text-lg
                                leading-relaxed text-text-secondary
                                italic">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="mt-3 mobile-large:mt-4
                                  flex items-center gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5
                                   mobile-large:h-4 mobile-large:w-4
                                   fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="mt-4 mobile-large:mt-5
                                  flex items-center gap-3">
                    <div className="h-10 w-10
                                    mobile-large:h-12 mobile-large:w-12
                                    rounded-full bg-primary/10
                                    flex items-center justify-center
                                    text-lg mobile-large:text-xl
                                    overflow-hidden">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                      ) : null}
                      <span style={{ display: testimonial.image ? "none" : "block" }}>
                        👩
                      </span>
                    </div>
                    <div>
                      <p className="text-sm mobile-large:text-base
                                    font-semibold text-text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-xs mobile-large:text-sm
                                    text-text-secondary">
                        {testimonial.relation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;