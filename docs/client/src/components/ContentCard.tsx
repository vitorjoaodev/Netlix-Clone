import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Content } from '@shared/schema';

interface ContentCardProps {
  content: Content;
  onClick: () => void;
}

const ContentCard = ({ content, onClick }: ContentCardProps) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Only trigger click if not clicking on a button
    if (!(e.target as HTMLElement).closest('button')) {
      onClick();
    }
  };

  return (
    <div 
      className="flex-none w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%] group relative cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:z-10"
      onClick={handleCardClick}
    >
      <img 
        src={content.imageUrl} 
        alt={content.title} 
        className="rounded-md w-full object-cover aspect-video"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="p-2">
          <div className="flex justify-between items-center mb-2">
            <div className="flex space-x-2">
              <button 
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-300 transition"
                onClick={(e) => e.stopPropagation()}
              >
                <Play className="h-4 w-4" />
              </button>
              <button 
                className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center border-2 border-gray-400 hover:border-white transition"
                onClick={(e) => e.stopPropagation()}
              >
                <Plus className="h-4 w-4" />
              </button>
              <button 
                className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center border-2 border-gray-400 hover:border-white transition"
                onClick={(e) => e.stopPropagation()}
              >
                <ThumbsUp className="h-4 w-4" />
              </button>
            </div>
            <button 
              className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center border-2 border-gray-400 hover:border-white transition"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="text-xs">
            <span className="text-green-500 font-medium">{content.match}% Match</span>
            <div className="flex items-center mt-1">
              <span className="border border-gray-400 px-1 mr-2">{content.rating}</span>
              {content.contentType === 'tv' && (
                <span>{content.seasons} Seasons</span>
              )}
              {content.contentType === 'movie' && (
                <span>{content.duration}</span>
              )}
            </div>
            <div className="mt-1">
              {content.genre.slice(0, 3).map((genre, index) => (
                <span key={index} className={index < 2 ? "mr-2" : ""}>
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
