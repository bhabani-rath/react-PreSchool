import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Mail, Phone, MessageCircle } from "lucide-react";

const TeacherCard = ({ member }) => {
  const whatsappUrl = member.whatsapp
    ? `https://wa.me/${member.whatsapp}?text=${encodeURIComponent(
        `Hi ${member.name}, I'd like to connect regarding my child at Little Bloomers.`
      )}`
    : null;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden
                 rounded-2xl mobile-large:rounded-3xl
                 bg-surface
                 shadow-md ring-1 ring-black/5
                 hover:shadow-xl transition-shadow duration-300"
    >
      {/* ── Photo with colored frame ── */}
      <div className="relative">
        {/* Colored arc behind photo */}
        <div className="absolute inset-x-0 top-0 h-20
                        bg-gradient-to-r from-primary/80 to-secondary/80
                        rounded-b-[40%]" />

        {/* Photo */}
        <div className="relative pt-5 px-5 mobile-large:pt-6 mobile-large:px-6
                        tablet:pt-7 tablet:px-7">
          <div className="relative aspect-square overflow-hidden
                          rounded-2xl mobile-large:rounded-3xl
                          ring-4 ring-white shadow-lg">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover
                           group-hover:scale-105
                           transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="w-full h-full bg-gradient-to-br from-primary/15 to-secondary/15
                         items-center justify-center"
              style={{ display: member.image ? "none" : "flex" }}
            >
              <span className="text-5xl mobile-large:text-6xl">👩‍🏫</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info section ── */}
      <div className="px-5 mobile-large:px-6 tablet:px-7
                      pt-4 mobile-large:pt-5
                      pb-5 mobile-large:pb-6 tablet:pb-7
                      text-center">
        {/* Name */}
        <h3 className="font-heading text-sm
                       mobile-large:text-base tablet:text-lg
                       font-bold text-text-primary
                       leading-snug">
          {member.name}
        </h3>

        {/* Role pill */}
        <span className="inline-block mt-1.5 mobile-large:mt-2
                         bg-primary/10 text-primary
                         text-[10px] mobile-large:text-[11px] tablet:text-xs
                         font-semibold
                         px-3 py-1 mobile-large:px-4 mobile-large:py-1.5
                         rounded-full">
          {member.role}
        </span>

        {/* Divider */}
        <div className="mx-auto w-10 h-[2px] bg-primary/20 rounded-full
                        mt-3 mobile-large:mt-4 mb-3 mobile-large:mb-4" />

        {/* Details */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5
                                      text-primary/50 flex-shrink-0" />
            <p className="text-[10px] mobile-large:text-[11px] tablet:text-xs
                          text-text-secondary">
              {member.qualification}
            </p>
          </div>

          {member.experience && (
            <div className="flex items-center justify-center gap-1.5">
              <Briefcase className="h-3 w-3 text-primary/50 flex-shrink-0" />
              <p className="text-[10px] mobile-large:text-[11px]
                            text-text-secondary">
                {member.experience}
              </p>
            </div>
          )}
        </div>

        {/* Bio — expands on hover */}
        {member.bio && (
          <div className="max-h-0 group-hover:max-h-28
                          overflow-hidden
                          transition-all duration-500 ease-out">
            <p className="text-[10px] mobile-large:text-[11px] tablet:text-xs
                          text-text-secondary leading-relaxed
                          mt-3 pt-3
                          border-t border-primary/10
                          line-clamp-3">
              {member.bio}
            </p>
          </div>
        )}

        {/* ── Contact Buttons ── */}
        {(member.email || member.phone || member.whatsapp) && (
          <div className="mt-3 mobile-large:mt-4 pt-3 mobile-large:pt-4
                          border-t border-black/5">
            <div className="flex items-center justify-center gap-2 mobile-large:gap-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  onClick={(e) => e.stopPropagation()}
                  title={member.email}
                  className="flex items-center justify-center
                             h-8 w-8 mobile-large:h-9 mobile-large:w-9
                             rounded-full
                             bg-primary/10 text-primary
                             hover:bg-primary hover:text-white
                             transition-colors duration-200"
                >
                  <Mail className="h-3.5 w-3.5 mobile-large:h-4 mobile-large:w-4" />
                </a>
              )}

              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  title={member.phone}
                  className="flex items-center justify-center
                             h-8 w-8 mobile-large:h-9 mobile-large:w-9
                             rounded-full
                             bg-blue-500/10 text-blue-500
                             hover:bg-blue-500 hover:text-white
                             transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5 mobile-large:h-4 mobile-large:w-4" />
                </a>
              )}

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Message ${member.name} on WhatsApp`}
                  className="flex items-center justify-center
                             h-8 w-8 mobile-large:h-9 mobile-large:w-9
                             rounded-full
                             bg-green-500/10 text-green-600
                             hover:bg-green-500 hover:text-white
                             transition-colors duration-200"
                >
                  <MessageCircle className="h-3.5 w-3.5 mobile-large:h-4 mobile-large:w-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeacherCard;