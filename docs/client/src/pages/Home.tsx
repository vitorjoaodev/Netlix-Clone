import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentRow from '@/components/ContentRow';
import TopTenRow from '@/components/TopTenRow';
import Footer from '@/components/Footer';
import DetailModal from '@/components/DetailModal';
import LoginModal from '@/components/LoginModal';
import { useToast } from '@/hooks/use-toast';
import { Content } from '@shared/schema';
import { ExtendedCategory } from '../lib/data';

const Home = () => {
  const [selectedContentId, setSelectedContentId] = useState<number | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { toast } = useToast();

  const { data: categories, isLoading: isCategoriesLoading } = useQuery<ExtendedCategory[]>({
    queryKey: ['/api/categories'],
  });

  const { data: featuredContent, isLoading: isFeaturedLoading } = useQuery<Content>({
    queryKey: ['/api/contents/featured'],
  });

  const handleContentClick = (content: Content) => {
    setSelectedContentId(content.id);
    setIsDetailModalOpen(true);
  };

  const handleLoginSuccess = () => {
    toast({
      title: 'Login successful',
      description: 'Welcome back to Netflix!',
    });
  };

  if (isCategoriesLoading || isFeaturedLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#141414]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E50914]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      
      <main>
        {featuredContent && (
          <HeroSection 
            featuredContent={featuredContent} 
            onInfoClick={handleContentClick} 
          />
        )}

        {categories && Array.isArray(categories) && categories.map((category) => {
          // Se for a categoria Top 10, use o componente especial
          if (category.isTop10) {
            return (
              <TopTenRow
                key={category.id}
                title={category.name}
                contents={category.contents}
                onContentClick={handleContentClick}
              />
            );
          }
          
          // Caso contrário, use o componente padrão de linha de conteúdo
          return (
            <ContentRow 
              key={category.id}
              title={category.name}
              contents={category.contents}
              onContentClick={handleContentClick}
            />
          );
        })}
      </main>

      <Footer />

      <DetailModal 
        isOpen={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        contentId={selectedContentId}
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Home;
