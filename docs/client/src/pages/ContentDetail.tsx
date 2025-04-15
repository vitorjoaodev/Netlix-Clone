import { useEffect } from 'react';
import { useLocation, useRoute, useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator }   from '@/components/ui  /separator';    

const ContentDetail = () => {
  const [, params] = useRoute('/content/:id');
  const id = params?.id;
  const [, setLocation] = useLocation();

  const { data: content, isLoading, error } = useQuery({
    queryKey: [`/api/contents/${id}`],
    enabled: !!id,
  });

  const { data: episodes } = useQuery({
    queryKey: [content?.contentType === 'tv' ? `/api/contents/${id}/episodes` : null],
    enabled: !!id && content?.contentType === 'tv',
  });

  useEffect(() => {
    if (error) {
      setLocation('/');
    }
  }, [error, setLocation]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#141414]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E50914]"></div>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      
      <main className="pt-16">
        <div className="relative">
          <div className="aspect-video w-full max-h-[70vh]">
            <img 
              src={content.imageUrl} 
              alt={content.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30"></div>
          </div>
          
          <div className="container mx-auto px-4 relative -mt-40 md:-mt-60 mb-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{content.title}</h1>
              
              <div className="flex items-center mb-6">
                <span className="text-green-500 font-medium mr-2">{content.match}% Match</span>
                <span className="text-sm text-gray-400 mr-2">{content.releaseYear}</span>
                <span className="border border-gray-400 text-xs px-1 mr-2">{content.rating}</span>
                {content.contentType === 'tv' && (
                  <span className="text-sm text-gray-400">{content.seasons} Seasons</span>
                )}
                {content.contentType === 'movie' && (
                  <span className="text-sm text-gray-400">{content.duration}</span>
                )}
              </div>
              
              <div className="flex space-x-3 mb-8">
                <Button className="bg-white text-black font-medium hover:bg-opacity-80 transition">
                  <Play className="mr-1 h-5 w-5" /> Play
                </Button>
                <Button variant="outline" className="bg-gray-800 text-white border-2 border-gray-400 hover:border-white">
                  <Plus className="mr-1 h-5 w-5" /> My List
                </Button>
                <Button variant="outline" className="bg-gray-800 text-white border-2 border-gray-400 hover:border-white">
                  <ThumbsUp className="mr-1 h-5 w-5" /> Rate
                </Button>
              </div>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl">
                {content.description}
              </p>
              
              <div className="mb-8 max-w-3xl">
                <p className="text-gray-400 mb-2">
                  <span className="text-white">Cast:</span> Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo
                </p>
                <p className="text-gray-400">
                  <span className="text-white">Genres:</span> {content.genre.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {content.contentType === 'tv' && episodes && episodes.length > 0 && (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Episodes</h2>
            
            <div className="grid gap-6">
              {episodes.map((episode: any) => (
                <div key={episode.id} className="bg-[#181818] rounded-md p-4 hover:bg-[#252525] transition">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 text-center md:text-left mb-4 md:mb-0 md:mr-6">
                      <span className="text-3xl text-gray-400">{episode.episodeNumber}</span>
  </div>
  <div className="flex-1">
  <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium">{episode.title}</h3>
                        <span className="text-sm text-gray-400">{episode.duration}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">{episode.description}</p>
                      <Button variant="ghost" className="bg-gray-800 text-white hover:bg-gray-700">
                        <Play className="mr-1 h-4 w-4" /> Play
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">More Like This</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* This would be populated with similar content based on the current selection */}
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="aspect-video bg-[#252525] rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About {content.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-300 font-semibold mb-2">Creators</h3>
              <p className="text-gray-400 mb-6">The Duffer Brothers</p>
              
              <h3 className="text-gray-300 font-semibold mb-2">Cast</h3>
              <p className="text-gray-400 mb-6">Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin, Noah Schnapp</p>
              
              <h3 className="text-gray-300 font-semibold mb-2">Genres</h3>
              <p className="text-gray-400">{content.genre.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-gray-300 font-semibold mb-2">Maturity Rating</h3>
              <p className="text-gray-400 mb-2">
                <span className="border border-gray-400 text-xs px-1 mr-2">{content.rating}</span>
                Recommended for ages 14 and up
              </p>
              <p className="text-gray-400 mb-6">
                Language, violence, frightening scenes
              </p>
              
              <h3 className="text-gray-300 font-semibold mb-2">Original Language</h3>
              <p className="text-gray-400">English</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentDetail;
