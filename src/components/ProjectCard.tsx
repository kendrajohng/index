
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  date?: string;
  image?: string;
}

export function ProjectCard({ title, description, icon, link, date, image }: ProjectCardProps) {
  return (
    <Card className="p-6 md:p-8 bg-white border border-gray-200 hover:border-gray-300 transition-all cursor-pointer group">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Content Section */}
        <div className="flex-1 space-y-4 md:space-y-6 w-full">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold uppercase">
              {icon}
            </span>
          </div>

          {/* Title and Date */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black">
              {title}
            </h3>
            {date && (
              <p className="text-sm text-gray-500 mt-2">
                {date}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {description}
          </p>

          {/* Visit Button */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-all group-hover:gap-3"
            >
              Visit site
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* App Image - Below on mobile, Right on desktop */}
        {image && (
          <div className="w-full md:w-80 md:flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </Card>
  );
}
