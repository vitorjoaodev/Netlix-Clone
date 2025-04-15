import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  generateMockCategories, 
  generateMockContents, 
  generateMockEpisodes,
  ExtendedCategory
} from "../client/src/lib/data";
import { Content, Episode } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize the mock data with real Netflix content
  const contents: Content[] = generateMockContents();
  const categories: ExtendedCategory[] = generateMockCategories(contents);
  
  // API routes
  app.get('/api/contents', (req, res) => {
    res.json(contents);
  });
  
  app.get('/api/contents/featured', (req, res) => {
    // Mostrar "Resgate" como destaque conforme solicitado pelo usuário
    const featuredContent = contents.find(c => c.title === 'Resgate') || 
                           contents.find(c => c.title === 'Stranger Things');
    res.json(featuredContent);
  });
  
  app.get('/api/contents/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const content = contents.find(c => c.id === id);
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.json(content);
  });
  
  app.get('/api/contents/:id/episodes', (req, res) => {
    const id = parseInt(req.params.id);
    const content = contents.find(c => c.id === id);
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    if (content.contentType !== 'tv') {
      return res.status(400).json({ message: 'Content is not a TV show' });
    }
    
    // Gerar episódios fictícios com nomes mais autênticos de acordo com o show
    let episodeNames: string[] = [];
    if (content.title === 'Stranger Things') {
      episodeNames = [
        'O Desaparecimento de Will Byers', 
        'A Estranha na Rua Maple', 
        'O Laboratório de Hawkins', 
        'O Corpo', 
        'A Tempestade', 
        'O Monstro', 
        'O Banho', 
        'O Mundo Invertido'
      ];
    } else if (content.title === 'Round 6') {
      episodeNames = [
        'Luz Verde, Luz Vermelha', 
        'Quebra-Cabeça', 
        'O Homem do Guarda-Chuva', 
        'Fora Daqui', 
        'Um Mundo Justo', 
        'Gganbu', 
        'VIPs', 
        'O Líder'
      ];
    } else {
      episodeNames = [
        'Episódio 1', 
        'Episódio 2', 
        'Episódio 3', 
        'Episódio 4', 
        'Episódio 5', 
        'Episódio 6', 
        'Episódio 7', 
        'Episódio 8'
      ];
    }
    
    const episodes: Episode[] = Array(8).fill(null).map((_, i) => ({
      id: id * 100 + i,
      contentId: id,
      seasonNumber: 1,
      episodeNumber: i + 1,
      title: episodeNames[i % episodeNames.length],
      description: "Neste episódio, os personagens enfrentam novos desafios e fazem descobertas surpreendentes que mudarão tudo.",
      duration: `${Math.floor(40 + Math.random() * 20)}m`
    }));
    
    res.json(episodes);
  });
  
  app.get('/api/categories', (req, res) => {
    res.json(categories);
  });
  
  app.get('/api/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(c => c.id === id);
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    res.json(category);
  });

  const httpServer = createServer(app);
  return httpServer;
}
