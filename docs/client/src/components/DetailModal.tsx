import { X, Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { Content, Episode } from '@shared/schema';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';

interface DetailModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  contentId: number | null;
}

const DetailModal = ({ isOpen, onOpenChange, contentId }: DetailModalProps) => {
  const { data: content, isLoading } = useQuery<Content>({
    queryKey: [contentId ? `/api/contents/${contentId}` : null],
    enabled: !!contentId && isOpen,
  });

  const { data: episodes } = useQuery<Episode[]>({
    queryKey: [contentId && content?.contentType === 'tv' ? `/api/contents/${contentId}/episodes` : null],
    enabled: !!contentId && isOpen && content?.contentType === 'tv',
  });

  if (isLoading || !content) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="bg-[#181818] border-none text-white sm:max-w-4xl">
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E50914]"></div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Mapeamento de elenco baseado no título
  let cast = "Elenco não disponível";
  if (content.title === "Stranger Things") {
    cast = "Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo";
  } else if (content.title === "Round 6") {
    cast = "Lee Jung-jae, Park Hae-soo, Wi Ha-jun, Jung Ho-yeon, O Yeong-su";
  } else if (content.title === "The Witcher") {
    cast = "Henry Cavill, Anya Chalotra, Freya Allan, Joey Batey, Eamon Farren";
  } else if (content.title === "Sintonia") {
    cast = "Jottapê, Christian Malheiros, Bruna Mascarenhas, Júlio Silvério, Danielle Olímpia";
  }

  // Traduzir "Seasons" para "Temporadas"
  const seasonText = content.seasons === 1 ? "Temporada" : "Temporadas";

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#181818] border-none text-white sm:max-w-4xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute top-4 right-4 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition z-10">
          <X className="h-5 w-5" />
        </DialogClose>
        
        <div className="relative">
          <div className="aspect-video w-full">
            <img 
              src={content.imageUrl} 
              alt={content.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30"></div>
          
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
            <div className="flex items-center space-x-3 mb-6">
              <Button className="bg-white text-black font-medium hover:bg-opacity-80 transition">
                <Play className="mr-1 h-5 w-5" /> Assistir
              </Button>
              <Button variant="outline" size="icon" className="bg-gray-800 text-white border-2 border-gray-400 hover:border-white">
                <Plus className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-gray-800 text-white border-2 border-gray-400 hover:border-white">
                <ThumbsUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap items-center mb-6 gap-2">
            <span className="text-green-500 font-medium mr-2">{content.match}% relevante</span>
            <span className="text-sm text-gray-400 mr-2">{content.releaseYear}</span>
            <Badge variant="outline" className="border-gray-400 text-xs px-1 mr-2">{content.rating}</Badge>
            {content.contentType === 'tv' && (
              <span className="text-sm text-gray-400 mr-2">{content.seasons} {seasonText}</span>
            )}
            {content.contentType === 'movie' && (
              <span className="text-sm text-gray-400 mr-2">{content.duration}</span>
            )}
            <Badge variant="outline" className="bg-transparent border-gray-400 text-gray-400">HD</Badge>
            {content.title === "Stranger Things" && (
              <Badge className="bg-[#E50914] text-white border-none">NETFLIX ORIGINAL</Badge>
            )}
          </div>
          
          <p className="text-sm md:text-base text-gray-300 mb-6">
            {content.description}
          </p>
          
          <div className="mb-6">
            <p className="text-gray-400 mb-2">
              <span className="text-white">Elenco:</span> {cast}
            </p>
            <p className="text-gray-400">
              <span className="text-white">Gêneros:</span> {content.genre.join(', ')}
            </p>
          </div>
          
          {content.contentType === 'tv' && episodes && Array.isArray(episodes) && episodes.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episódios</h3>
                <select className="bg-black text-white border border-gray-700 rounded py-1 px-2 text-sm">
                  <option>Temporada 1</option>
                  {content.seasons && content.seasons > 1 && Array.from({length: content.seasons - 1}, (_, i) => i + 2).map(season => (
                    <option key={season}>Temporada {season}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-4">
                {episodes.map((episode: Episode, index: number) => (
                  <div key={episode.id} className="flex border-b border-gray-800 pb-4 hover:bg-gray-900 p-3 rounded transition">
                    <div className="w-16 text-center mr-4">
                      <span className="text-2xl text-gray-400">{episode.episodeNumber}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium mb-1">{episode.title}</h4>
                        <span className="text-sm text-gray-400">{episode.duration}</span>
                      </div>
                      <p className="text-sm text-gray-300">{episode.description}</p>
                    </div>
                    <div className="ml-4 flex items-center">
                      <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 text-white hover:bg-gray-700">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {content.contentType === 'movie' && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Mais como este</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-video bg-gray-800 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
