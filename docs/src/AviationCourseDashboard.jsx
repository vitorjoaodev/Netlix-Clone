import React, { useState } from 'react';

const AviationCourseDashboard = () => {
  // Estados para controle da interface
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dados de exemplo para cursos
  const courses = [
    {
      id: 1,
      title: "Piloto Privado: Teoria Completa",
      instructor: "Cap. Ricardo Oliveira",
      hours: 120,
      students: 425,
      rating: 4.8,
      price: 3299.90,
      featured: true,
      category: "piloto",
      image: "/api/placeholder/320/180"
    },
    {
      id: 2,
      title: "Mecânica de Aeronaves Turboélice",
      instructor: "Eng. Paulo Mendes",
      hours: 80,
      students: 212,
      rating: 4.7,
      price: 2590.00,
      featured: false,
      category: "mecânica",
      image: "/api/placeholder/320/180"
    },
    {
      id: 3,
      title: "Legislação Aeronáutica Atualizada",
      instructor: "Dra. Amanda Torres",
      hours: 60,
      students: 368,
      rating: 4.9,
      price: 1879.90,
      featured: true,
      category: "legislação",
      image: "/api/placeholder/320/180"
    },
    {
      id: 4,
      title: "Meteorologia para Aviação",
      instructor: "Prof. Carlos Sampaio",
      hours: 40,
      students: 530,
      rating: 4.6,
      price: 1399.90,
      featured: false,
      category: "meteorologia",
      image: "/api/placeholder/320/180"
    },
    {
      id: 5,
      title: "Inglês Técnico para Aviação",
      instructor: "Sarah Johnson",
      hours: 90,
      students: 647,
      rating: 4.8,
      price: 2199.90,
      featured: true,
      category: "idiomas",
      image: "/api/placeholder/320/180"
    },
    {
      id: 6,
      title: "Navegação Aérea Avançada",
      instructor: "Cmte. Fernando Alves",
      hours: 75,
      students: 294,
      rating: 4.7,
      price: 2799.90,
      featured: false,
      category: "navegação",
      image: "/api/placeholder/320/180"
    }
  ];

  // Filtrar cursos baseado na categoria e busca
  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Estatísticas para o dashboard
  const stats = [
    { label: "Cursos Ativos", value: "23", icon: "📚", trend: "+3", color: "bg-gray-800" },
    { label: "Alunos", value: "2,478", icon: "👨‍🎓", trend: "+124", color: "bg-gray-900" },
    { label: "Receita Mensal", value: "R$ 342.990", icon: "💰", trend: "+18%", color: "bg-gray-800" },
    { label: "Avaliação Média", value: "4.8", icon: "⭐", trend: "+0.2", color: "bg-gray-900" }
  ];

  // Categorias de cursos
  const categories = [
    { id: 'all', name: 'Todos os Cursos' },
    { id: 'piloto', name: 'Formação de Pilotos' },
    { id: 'mecânica', name: 'Mecânica & Manutenção' },
    { id: 'legislação', name: 'Legislação Aeronáutica' },
    { id: 'meteorologia', name: 'Meteorologia' },
    { id: 'navegação', name: 'Navegação Aérea' },
    { id: 'idiomas', name: 'Inglês Técnico' }
  ];

  // Atividades recentes
  const recentActivities = [
    { id: 1, type: "enrollment", user: "João Silva", course: "Piloto Privado: Teoria Completa", time: "Há 2 horas" },
    { id: 2, type: "review", user: "Maria Costa", course: "Mecânica de Aeronaves Turboélice", rating: 5, time: "Há 5 horas" },
    { id: 3, type: "completion", user: "Pedro Santos", course: "Legislação Aeronáutica Atualizada", time: "Há 8 horas" },
    { id: 4, type: "enrollment", user: "Ana Oliveira", course: "Inglês Técnico para Aviação", time: "Há 12 horas" },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-black transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          <h1 className={`text-xl font-bold text-white ${!sidebarOpen && 'hidden'}`}>AERO CURSOS</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 rounded-full hover:bg-gray-800">
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <div className="px-4 py-6">
          <ul className="space-y-2">
            {['dashboard', 'courses', 'students', 'instructors', 'finance', 'settings'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => setActiveTab(item)}
                  className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                    activeTab === item ? 'bg-gray-700' : 'hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-3">
                    {item === 'dashboard' && '📊'}
                    {item === 'courses' && '📚'}
                    {item === 'students' && '👨‍🎓'}
                    {item === 'instructors' && '👨‍✈️'}
                    {item === 'finance' && '💰'}
                    {item === 'settings' && '⚙️'}
                  </span>
                  {sidebarOpen && (
                    <span className="capitalize">{item}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 w-64 p-4 bg-gray-950">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-lg">A</span>
              </div>
              <div>
                <p className="font-medium">Admin User</p>
                <p className="text-sm text-gray-400">Administrador</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-gray-950 p-4 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-3 top-2.5">🔍</span>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-800">🔔</button>
              <button className="p-2 rounded-full hover:bg-gray-800">✉️</button>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} p-6 rounded-lg shadow-lg overflow-hidden relative`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    <p className="text-green-400 text-sm mt-2">{stat.trend}</p>
                  </div>
                  <div className="text-3xl opacity-50">{stat.icon}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 to-gray-600"></div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <div className="flex overflow-x-auto pb-2 space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Cursos Disponíveis</h3>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                + Adicionar Curso
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    {course.featured && (
                      <span className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                        Destaque
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-1">{course.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{course.instructor}</p>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span>{course.rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{course.students} alunos</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{course.hours} horas</span>
                      <span className="font-bold">R$ {course.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors">
                        Editar
                      </button>
                      <button className="bg-gray-900 hover:bg-gray-700 text-white py-2 rounded transition-colors">
                        Visualizar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout for Analytics and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Analytics Chart */}
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Análise de Vendas</h3>
              <div className="h-64 w-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Simulated Chart */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end space-x-4 px-4">
                    {[65, 40, 70, 50, 75, 55, 80, 60, 85, 45, 90, 65].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-t-sm transition-all duration-300"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs mt-1 text-gray-400">{['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Atividades Recentes</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="mr-3">
                        {activity.type === "enrollment" && (
                          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-green-400">
                            +
                          </div>
                        )}
                        {activity.type === "review" && (
                          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-yellow-400">
                            ★
                          </div>
                        )}
                        {activity.type === "completion" && (
                          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-400">
                            ✓
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {activity.user}{" "}
                          {activity.type === "enrollment" && "inscreveu-se em"}
                          {activity.type === "review" && "avaliou"}
                          {activity.type === "completion" && "concluiu"}
                          {" "}<span className="text-gray-400">{activity.course}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-center text-sm transition-colors">
                Ver Todas Atividades
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AviationCourseDashboard;