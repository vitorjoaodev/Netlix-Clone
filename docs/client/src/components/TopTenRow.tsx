import { useRef } from 'react';
import { Content } from '@shared/schema';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TopItemCard from './TopItemCard';

interface TopTenRowProps {
  title: string;
  contents: Content[];
  onContentClick: (content: Content) => void;
}

const TopTenRow = ({ title, contents, onContentClick }: TopTenRowProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Certifique-se de ter conteúdo suficiente
  const displayContents = contents.slice(0, Math.min(10, contents.length));

  return (
    <section className="py-8 relative group">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          {title}
        </h2>
        
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 rounded-full h-10 w-10 -ml-5"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide pb-8 gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayContents.map((content, index) => (
              <div key={content.id} className="flex-none w-[250px] md:w-[280px]">
                <TopItemCard 
                  content={content} 
                  position={index}
                  onClick={() => onContentClick(content)} 
                />
              </div>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 rounded-full h-10 w-10 -mr-5"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopTenRow;