// Galeria de Fotos - Aplicação Web seguindo o enunciado do PDF

// Requisitos do Projeto: 
// - Header com título centralizado
// - Grid de fotos com nomes e efeitos de hover
// - Barra de busca em tempo real
// - Rodapé com copyright

// Criando o projeto em React com Tailwind CSS

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Estado para armazenar fotos
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // UseEffect para carregar fotos de um conjunto de dados estáticos
  useEffect(() => {
    const staticPhotos = [
      { id: 1, name: 'Praia', url: 'https://via.placeholder.com/300x200', description: 'Foto de uma praia' },
      { id: 2, name: 'Montanha', url: 'https://via.placeholder.com/300x200', description: 'Foto de uma montanha' },
      { id: 3, name: 'Cidade', url: 'https://via.placeholder.com/300x200', description: 'Foto de uma cidade' },
      { id: 4, name: 'Floresta', url: 'https://via.placeholder.com/300x200', description: 'Foto de uma floresta' },
      { id: 5, name: 'Deserto', url: 'https://via.placeholder.com/300x200', description: 'Foto de um deserto' },
      { id: 6, name: 'Lago', url: 'https://via.placeholder.com/300x200', description: 'Foto de um lago' },
      { id: 7, name: 'Ponte', url: 'https://via.placeholder.com/300x200', description: 'Foto de uma ponte' },
      { id: 8, name: 'Neve', url: 'https://via.placeholder.com/300x200', description: 'Foto de neve' },
      { id: 9, name: 'Campo', url: 'https://via.placeholder.com/300x200', description: 'Foto de um campo' },
      { id: 10, name: 'Cachoeira', url: 'https://via.placeholder.com/300x200', description: 'Foto de uma cachoeira' }
    ];
    setPhotos(staticPhotos);
  }, []);

  // Função de filtragem em tempo real
  const filteredPhotos = photos.filter(photo =>
    photo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center p-4 text-2xl font-bold">
        Galeria de Fotos
      </header>

      {/* Barra de Busca */}
      <div className="p-4 text-center">
        <input
          type="text"
          placeholder="Buscar por palavras-chave..."
          className="p-2 border rounded w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-600 text-white rounded">
          🔍
        </button>
      </div>

      {/* Área de Exibição das Fotos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow">
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <div key={photo.id} className="bg-white rounded shadow-lg overflow-hidden">
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 text-center font-medium">
                {photo.name}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-600">Nenhuma foto encontrada</p>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        © 2024 Galeria de Fotos. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
