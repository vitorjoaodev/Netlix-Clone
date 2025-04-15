import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';
import { Content } from '@shared/schema';

interface HeroSectionProps {
  featuredContent: Content;
  onInfoClick: (content: Content) => void;
}

const HeroSection = ({ featuredContent, onInfoClick }: HeroSectionProps) => {
  const truncateDescription = useMemo(() => {
    if (!featuredContent.description) return '';
    return featuredContent.description.length > 200 
      ? featuredContent.description.substring(0, 200) + '...' 
      : featuredContent.description;
  }, [featuredContent.description]);

  return (
    <section className="relative pt-20 md:pt-0 h-[60vh] md:h-[80vh] flex items-end">
      <div className="absolute inset-0 z-0">
        <img 
          src={featuredContent.imageUrl} 
          alt={featuredContent.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 pb-10 md:pb-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{featuredContent.title}</h1>
          <div className="flex items-center mb-6">
            <span className="text-green-500 font-medium mr-2">{featuredContent.match}% Match</span>
            <span className="text-sm text-gray-400 mr-2">{featuredContent.releaseYear}</span>
            <span className="border border-gray-400 text-xs px-1 mr-2">{featuredContent.rating}</span>
            {featuredContent.contentType === 'tv' && (
              <span className="text-sm text-gray-400">{featuredContent.seasons} Seasons</span>
            )}
            {featuredContent.contentType === 'movie' && (
              <span className="text-sm text-gray-400">{featuredContent.duration}</span>
            )}
          </div>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            {truncateDescription}
          </p>
          <div className="flex space-x-3">
            <Button className="bg-white text-black font-medium hover:bg-opacity-80 transition">
              <Play className="mr-1 h-5 w-5" /> Play
            </Button>
            <Button 
              variant="secondary" 
              className="bg-gray-600 bg-opacity-70 text-white font-medium hover:bg-opacity-50 transition"
              onClick={() => onInfoClick(featuredContent)}
            >
              <Info className="mr-1 h-5 w-5" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
