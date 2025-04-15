import { Content, Category, Episode } from '@shared/schema';

// Netflix real content thumbnails and posters
export const netflixPosters = {
  strangerThings: 'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  squidGame: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
  sintonia: '/attached_assets/sintonia.jpg',
  theWitcher: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  theChosen: '/attached_assets/chosen.jpg',
  naruto: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
  lupin: 'https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  bridgerton: 'https://m.media-amazon.com/images/M/MV5BNjk4MDdhODctMmFhYi00ZTNhLThlN2UtN2NhZGY0OGFlMWEwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
  peakyBlinders: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Yi00M2Y0LWE0ZjctZjJkOTBmYWZjMDk1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
  casaDePapel: 'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
  crown: '/attached_assets/crown.jpg',
  dolemite: '/attached_assets/dolemite.jpg',
  you: 'https://m.media-amazon.com/images/M/MV5BMzkzOGFiY2EtZDcyZi00OWNhLThhNmYtYjQ3ODljMTM5ZDBkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  blackMirror: 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  dark: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg',
  umbrella: 'https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
  minhaLista: 'https://danimagem.com.br/wp-content/uploads/2023/10/a-minha-lista-da-vida-poster.jpg',
  resgate: '/attached_assets/resgate.jpg',
  poco: '/attached_assets/poco.jpg',
};

// Hero images (higher quality for hero section)
export const heroImages = [
  netflixPosters.strangerThings,
  netflixPosters.squidGame,
  netflixPosters.theWitcher,
  netflixPosters.dark,
];

export const generateMockContents = (): Content[] => {
  // Real Netflix movies
  const movies: Content[] = [
    {
      id: 1,
      title: "Bird Box",
      description: "Cinco anos após uma força misteriosa dizimar quase toda a população, uma sobrevivente e seus dois filhos procuram um lugar seguro, mas precisam permanecer vendados para evitar uma visão maligna.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_.jpg",
      releaseYear: 2018,
      rating: "TV-MA",
      duration: "124m",
      seasons: null,
      match: 89,
      contentType: "movie",
      genre: ["Suspense", "Terror", "Drama"],
    },
    {
      id: 2,
      title: "Resgate",
      description: "Em Bangladesh, o mercenário Tyler Rake luta para sobreviver durante a missão para resgatar o filho de um chefão do crime organizado.",
      imageUrl: netflixPosters.resgate,
      releaseYear: 2020,
      rating: "TV-MA",
      duration: "117m",
      seasons: null,
      match: 94,
      contentType: "movie",
      genre: ["Ação", "Thriller", "Drama"],
    },
    {
      id: 3,
      title: "A Minha Lista da Vida",
      description: "Dois homens com câncer terminal escapam do hospital para realizar os desejos de suas vidas antes de morrerem.",
      imageUrl: netflixPosters.minhaLista,
      releaseYear: 2023,
      rating: "PG-13",
      duration: "98m",
      seasons: null,
      match: 87,
      contentType: "movie",
      genre: ["Drama", "Comédia", "Aventura"],
    },
    {
      id: 4,
      title: "O Poço",
      description: "Em uma prisão vertical com uma cela por nível e dois prisioneiros por cela, os detentos nos níveis superiores são alimentados bem, enquanto os que estão abaixo passam fome.",
      imageUrl: netflixPosters.poco,
      releaseYear: 2019,
      rating: "TV-MA",
      duration: "94m",
      seasons: null,
      match: 92,
      contentType: "movie",
      genre: ["Terror", "Ficção Científica", "Thriller"],
    },
    {
      id: 5,
      title: "Não Olhe Para Cima",
      description: "Dois astrônomos descobrem um cometa mortal vindo em direção à Terra e precisam fazer um tour midiático para alertar a humanidade. Só que ninguém parece se importar.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      releaseYear: 2021,
      rating: "R",
      duration: "138m",
      seasons: null,
      match: 85,
      contentType: "movie",
      genre: ["Comédia", "Drama", "Ficção Científica"],
    },
    {
      id: 6,
      title: "Roma",
      description: "A vida de uma empregada doméstica mexicana muda drasticamente quando ela fica grávida, em meio à turbulência política dos anos 1970.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_.jpg",
      releaseYear: 2018,
      rating: "R",
      duration: "135m",
      seasons: null,
      match: 96,
      contentType: "movie",
      genre: ["Drama"],
    },
    {
      id: 7,
      title: "Meu Nome é Dolemite",
      description: "Na década de 1970, o comediante Rudy Ray Moore fica famoso ao criar uma figura excêntrica chamada Dolemite, tornando-se um astro do cinema blaxploitation.",
      imageUrl: netflixPosters.dolemite,
      releaseYear: 2019,
      rating: "R",
      duration: "118m",
      seasons: null,
      match: 88,
      contentType: "movie",
      genre: ["Comédia", "Drama", "Biografia"],
    },
    {
      id: 8,
      title: "O Irlandês",
      description: "Um homem idoso relembra sua época como motorista de caminhão e assassino da máfia. Através de décadas, ele trabalhou para o chefe do crime Russell Bufalino.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
      releaseYear: 2019,
      rating: "R",
      duration: "209m",
      seasons: null,
      match: 91,
      contentType: "movie",
      genre: ["Drama", "Crime", "Biografia"],
    },
  ];
  
  // Real Netflix TV shows
  const tvShows: Content[] = [
    {
      id: 9,
      title: "Stranger Things",
      description: "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.",
      imageUrl: netflixPosters.strangerThings,
      releaseYear: 2016,
      rating: "TV-14",
      duration: null,
      seasons: 4,
      match: 96,
      contentType: "tv",
      genre: ["Drama", "Terror", "Ficção Científica"],
    },
    {
      id: 10,
      title: "Round 6",
      description: "Centenas de jogadores falidos aceitam um estranho convite para competir em jogos infantis. Um prêmio tentador os aguarda, mas as apostas são mortais.",
      imageUrl: netflixPosters.squidGame,
      releaseYear: 2021,
      rating: "TV-MA",
      duration: null,
      seasons: 2,
      match: 95,
      contentType: "tv",
      genre: ["Ação", "Thriller", "Drama"],
    },
    {
      id: 11,
      title: "Sintonia",
      description: "Criados juntos na mesma comunidade de São Paulo, três jovens amigos correm atrás de seus sonhos rodeados por música, drogas e religião.",
      imageUrl: netflixPosters.sintonia,
      releaseYear: 2019,
      rating: "TV-MA",
      duration: null,
      seasons: 4,
      match: 89,
      contentType: "tv",
      genre: ["Drama", "Crime", "Música"],
    },
    {
      id: 12,
      title: "The Witcher",
      description: "O bruxo Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas são mais cruéis que as criaturas.",
      imageUrl: netflixPosters.theWitcher,
      releaseYear: 2019,
      rating: "TV-MA",
      duration: null,
      seasons: 3,
      match: 91,
      contentType: "tv",
      genre: ["Fantasia", "Ação", "Aventura"],
    },
    {
      id: 13,
      title: "The Chosen",
      description: "Uma série histórica baseada na vida de Jesus Cristo, contada através dos olhos daqueles que o conheceram.",
      imageUrl: netflixPosters.theChosen,
      releaseYear: 2019,
      rating: "TV-PG",
      duration: null,
      seasons: 4,
      match: 92,
      contentType: "tv",
      genre: ["Drama", "História", "Religião"],
    },
    {
      id: 14,
      title: "Naruto",
      description: "A série gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o ninja líder da vila.",
      imageUrl: netflixPosters.naruto,
      releaseYear: 2002,
      rating: "TV-14",
      duration: null,
      seasons: 9,
      match: 94,
      contentType: "tv",
      genre: ["Anime", "Aventura", "Fantasia"],
    },
    {
      id: 15,
      title: "La Casa de Papel",
      description: "Oito ladrões fazem reféns e se trancam na Casa da Moeda da Espanha com o objetivo de realizar o maior roubo da história e levar com eles 2,4 bilhões de euros.",
      imageUrl: netflixPosters.casaDePapel,
      releaseYear: 2017,
      rating: "TV-MA",
      duration: null,
      seasons: 5,
      match: 93,
      contentType: "tv",
      genre: ["Crime", "Drama", "Thriller"],
    },
    {
      id: 16,
      title: "The Crown",
      description: "Esta série dramática segue a vida da rainha Elizabeth II desde seu casamento em 1947 até os dias atuais.",
      imageUrl: netflixPosters.crown,
      releaseYear: 2016,
      rating: "TV-MA",
      duration: null,
      seasons: 6,
      match: 90,
      contentType: "tv",
      genre: ["Drama", "História", "Biografia"],
    },
  ];
  
  return [...movies, ...tvShows];
};

// Extended category that includes contents array
export interface ExtendedCategory extends Omit<Category, 'contents'> {
  id: number;
  name: string;
  isTop10: boolean | null;
  contents: Content[];
}

export const generateMockCategories = (contents: Content[]): ExtendedCategory[] => {
  const movieContents = contents.filter(content => content.contentType === 'movie');
  const tvContents = contents.filter(content => content.contentType === 'tv');
  
  return [
    {
      id: 1,
      name: 'Populares na Netflix',
      isTop10: null,
      contents: [...contents].sort(() => Math.random() - 0.5).slice(0, 8)
    },
    {
      id: 2,
      name: 'Séries',
      isTop10: null,
      contents: tvContents.slice(0, 8)
    },
    {
      id: 3,
      name: 'Filmes',
      isTop10: null,
      contents: movieContents.slice(0, 8)
    },
    {
      id: 4,
      name: 'Lançamentos',
      isTop10: null,
      contents: [...contents].sort((a, b) => b.releaseYear - a.releaseYear).slice(0, 8)
    },
    {
      id: 5,
      name: 'Minha lista',
      isTop10: null,
      contents: [...contents].sort(() => Math.random() - 0.5).slice(0, 5)
    },
    {
      id: 6,
      name: 'Top 10 no Brasil hoje',
      isTop10: true,
      contents: [...contents].sort(() => Math.random() - 0.5).slice(0, 10)
    },
    {
      id: 7,
      name: 'Originais Netflix',
      isTop10: null,
      contents: [
        contents.find(c => c.title === 'Stranger Things')!,
        contents.find(c => c.title === 'Round 6')!,
        contents.find(c => c.title === 'Sintonia')!,
        contents.find(c => c.title === 'The Witcher')!,
        contents.find(c => c.title === 'La Casa de Papel')!,
        contents.find(c => c.title === 'The Crown')!,
      ].filter(Boolean)
    },
    {
      id: 8,
      name: 'Em alta',
      isTop10: null,
      contents: [contents[3], contents[9], contents[2], contents[10], contents[5], contents[14], contents[7], contents[11]].filter(Boolean)
    }
  ];
};

export const generateMockEpisodes = (contentId: number): Episode[] => {
  return Array(8).fill(null).map((_, i) => ({
    id: contentId * 100 + i,
    contentId: contentId,
    seasonNumber: 1,
    episodeNumber: i + 1,
    title: `Episode ${i + 1}: ${['The Beginning', 'Revelation', 'Confrontation', 'Discovery', 'Mystery', 'Resolution', 'New Hope', 'Finale'][i % 8]}`,
    description: "In this episode, the characters face new challenges and make surprising discoveries that will change everything.",
    duration: `${Math.floor(40 + Math.random() * 20)}m`
  }));
};
