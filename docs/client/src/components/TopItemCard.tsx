import { Content } from '@shared/schema';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface TopItemCardProps {
  content: Content;
  onClick: () => void;
  position: number;
}

const TopItemCard = ({ content, onClick, position }: TopItemCardProps) => {
  const positionStr = (position + 1).toString();
  
  const handleCardClick = (e: React.MouseEvent) => {
    // Only trigger click if not clicking on a button
    if (!(e.target as HTMLElement).closest('button')) {
      onClick();
    }
  };

  return (
    <div className="group relative cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:z-10 h-[160px]">
      {/* Top 10 number with stroke effect */}
      <div className="absolute left-[-10%] top-0 bottom-0 z-10 flex items-center">
        <span className="font-bold italic text-7xl md:text-8xl text-[#141414]" 
              style={{ WebkitTextStroke: '2px white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {positionStr}
        </span>
      </div>
      
      {/* Content card */}
      <div 
        className="ml-[15%] h-full bg-[#2F2F2F] rounded-md overflow-hidden relative"
        onClick={handleCardClick}
      >
        <img 
          src={content.imageUrl} 
          alt={content.title} 
          className="h-full w-full object-cover rounded-md"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="p-2 w-full">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold text-sm truncate">{content.title}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-green-500 text-xs font-medium">{content.match}% relevante</span>
                
                <div className="flex space-x-1">
                  <button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-300 transition">
                    <Play className="h-3 w-3" />
                  </button>
                  <button className="w-6 h-6 rounded-full bg-transparent border border-gray-400 text-white flex items-center justify-center hover:border-white transition">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button className="w-6 h-6 rounded-full bg-transparent border border-gray-400 text-white flex items-center justify-center hover:border-white transition">
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-gray-300 space-x-2">
                <span className="border border-gray-400 px-1 text-[10px]">{content.rating}</span>
                {content.contentType === 'tv' && <span>{content.seasons} Temporadas</span>}
                {content.contentType === 'movie' && <span>{content.duration}</span>}
              </div>
              
              <div className="flex items-center space-x-1 text-xs">
                {content.genre.slice(0, 2).map((genre, idx) => (
                  <span key={idx} className="text-gray-300">
                    {idx > 0 && <span className="mx-1">•</span>}
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopItemCard;