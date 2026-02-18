import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import Tabs from "@/components/ui/Tabs";
import FadeIn from "@/components/animations/FadeIn";

const facilities = [
  {
    id: "classrooms",
    icon: "🏫",
    label: "Classrooms",
    title: "Smart Classrooms",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    description: "Air-conditioned, well-lit classrooms equipped with smart boards, child-sized furniture, and colorful learning walls. Each room designed to stimulate young minds.",
    features: ["Smart Boards", "AC Rooms", "Child-Safe Furniture", "Learning Corners"],
  },
  {
    id: "playground",
    icon: "🎪",
    label: "Playground",
    title: "Safe Play Area",
    image: "https://images.unsplash.com/photo-1596997000103-e597b3ca50df?w=800&h=600&fit=crop",
    description: "Spacious outdoor playground with soft rubber flooring, age-appropriate equipment, sand pit, and shaded areas for safe and active play.",
    features: ["Rubber Flooring", "Swings & Slides", "Sand Pit", "Shaded Area"],
  },
  {
    id: "library",
    icon: "📚",
    label: "Library",
    title: "Reading Corner",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    description: "A magical library filled with colorful picture books, story books, and educational materials to nurture the love of reading.",
    features: ["1000+ Books", "Reading Nooks", "Story Corner", "Digital Library"],
  },
  {
    id: "activity",
    icon: "🎨",
    label: "Activity Room",
    title: "Creative Arts Room",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    description: "Dedicated space for art, craft, dance, music, and drama activities. Equipped with all materials needed for creative expression.",
    features: ["Art Supplies", "Music Instruments", "Dance Mirror", "Stage Area"],
  },
  {
    id: "smartroom",
    icon: "💻",
    label: "Smart Room",
    title: "Computer Lab",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
    description: "Modern computer lab with kid-friendly computers and educational software for basic digital literacy and coding games.",
    features: ["Kid-Friendly PCs", "Educational Software", "Internet Safety", "Coding Games"],
  },
  {
    id: "medical",
    icon: "🏥",
    label: "Medical Room",
    title: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    description: "Fully equipped medical room with trained nurse on duty. First-aid facilities and regular health check-ups for all students.",
    features: ["Trained Nurse", "First Aid", "Health Check-ups", "Emergency Kit"],
  },
];

const InfrastructureTabs = () => {
  const [activeTab, setActiveTab] = useState("classrooms");
  const activeItem = facilities.find((f) => f.id === activeTab);

  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Our Infrastructure"
          subtitle="World-class facilities designed for little learners"
        />

        <Tabs
          tabs={facilities.map((f) => ({
            id: f.id,
            label: f.label,
            icon: f.icon,
          }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6 mobile-large:mt-8 tablet:mt-10"
          >
            <div className="grid grid-cols-1 tablet:grid-cols-2
                            gap-6 mobile-large:gap-8 tablet:gap-10
                            items-center">
              {/* Image */}
              <div className="aspect-[4/3] rounded-2xl mobile-large:rounded-3xl
                              overflow-hidden shadow-lg">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br", "from-primary/10", "to-secondary/10",
                      "flex", "items-center", "justify-center"
                    );
                    const emoji = document.createElement("span");
                    emoji.textContent = activeItem.icon;
                    emoji.className = "text-6xl mobile-large:text-7xl tablet:text-8xl";
                    e.target.parentElement.appendChild(emoji);
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-xl
                               mobile-large:text-2xl tablet:text-3xl
                               font-bold text-text-primary">
                  {activeItem.title}
                </h3>
                <p className="mt-3 mobile-large:mt-4
                              text-sm mobile-large:text-base tablet:text-lg
                              text-text-secondary leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="mt-4 mobile-large:mt-5 tablet:mt-6
                                grid grid-cols-2 gap-2 mobile-large:gap-3">
                  {activeItem.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2
                                 rounded-xl bg-primary/5
                                 px-3 py-2 mobile-large:px-4 mobile-large:py-2.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-xs mobile-large:text-sm
                                       font-medium text-text-primary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InfrastructureTabs;