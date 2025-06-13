"use client";

import React, { useState, useEffect } from 'react';
import { Play, Image, Calendar, Users, Eye, Heart, X } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface MediaItem {
  id: number;
  type: 'foto' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
  category: string;
  likes: number;
  views: number;
  description: string;
}

// Sample data - ganti dengan data real Anda
const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'foto',
    src: '/assets/photos/coding-session.jpg',
    title: 'Coding Session Bersama',
    date: '2024-05-15',
    category: 'Akademik',
    likes: 24,
    views: 156,
    description: 'Sesi coding bersama untuk project akhir semester'
  },
  {
    id: 2,
    type: 'foto',
    src: '/assets/photos/presentation.jpg',
    title: 'Presentasi Project Mobile App',
    date: '2024-05-10',
    category: 'Presentasi',
    likes: 31,
    views: 203,
    description: 'Demo aplikasi mobile yang dibuat mahasiswa'
  },
  {
    id: 3,
    type: 'video',
    src: '/assets/videos/bukber.mp4',
    thumbnail: '/assets/images/bukber.jpg',
    title: 'Bukber Ramadhan',
    date: '2024-04-28',
    category: 'Kumpulan',
    likes: 45,
    views: 389,
    description: 'Dokumentasi Buka Puasa Bersama di Bulan Ramadhan kelas Informatika A'
  },
  {
    id: 4,
    type: 'foto',
    src: '/assets/photos/graduation.jpg',
    title: 'Wisuda Angkatan 2024',
    date: '2024-04-20',
    category: 'Wisuda',
    likes: 67,
    views: 524,
    description: 'Momen kelulusan mahasiswa Informatika A'
  },
  {
    id: 5,
    type: 'video',
    src: '/assets/videos/campus-tour.mp4',
    thumbnail: '/assets/thumbnails/campus-tour.jpg',
    title: 'Virtual Campus Tour',
    date: '2024-04-15',
    category: 'Tour',
    likes: 28,
    views: 187,
    description: 'Tur virtual laboratorium dan fasilitas kampus'
  },
  {
    id: 6,
    type: 'foto',
    src: '/assets/photos/workshop.jpg',
    title: 'Workshop AI & Machine Learning',
    date: '2024-04-01',
    category: 'Workshop',
    likes: 52,
    views: 298,
    description: 'Workshop intensif tentang AI dan ML untuk mahasiswa'
  }
];

const categories = ['Semua', 'Akademik', 'Presentasi', 'Kumpulan', 'Wisuda', 'Tour', 'Workshop'];

export default function ModernGallery() {
  const [activeTab, setActiveTab] = useState<'semua' | 'foto' | 'video'>('semua');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');

  const filteredItems = mediaItems.filter(item => {
    const matchesTab = activeTab === 'semua' || item.type === activeTab;
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesTab && matchesCategory;
  });

  const handleLike = (id: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const openLightbox = (item: MediaItem) => {
    setSelectedMedia(item);
    setIsLightboxOpen(true);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedMedia(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isLightboxOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Determine grid columns based on screen size
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Galeri Momen
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Koleksi foto dan video terbaik dari perjalanan akademik Informatika A
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {[
              { key: 'semua', label: 'Semua', icon: Users },
              { key: 'foto', label: 'Foto', icon: Image },
              { key: 'video', label: 'Video', icon: Play }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
                }`}
              >
                <Icon size={isMobile ? 16 : 18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className={`grid ${getGridCols()} gap-4 sm:gap-6`}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Media Preview */}
              <div className="relative aspect-square overflow-hidden">
                {item.type === 'foto' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x400/6366f1/ffffff?text=${item.title}`;
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnail || `https://via.placeholder.com/400x400/8b5cf6/ffffff?text=Video`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="text-blue-600 ml-1" size={isMobile ? 20 : 24} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => openLightbox(item)}
                        className="flex items-center space-x-1 bg-white/90 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-white transition-colors"
                      >
                        <Eye size={12} />
                        <span>Lihat</span>
                      </button>
                      <button
                        onClick={() => handleLike(item.id)}
                        className={`p-1.5 sm:p-2 rounded-full transition-colors ${
                          likedItems.has(item.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/90 text-gray-800 hover:bg-red-100'
                        }`}
                      >
                        <Heart size={14} fill={likedItems.has(item.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="flex items-center space-x-1">
                      <Heart size={10} />
                      <span>{item.likes + (likedItems.has(item.id) ? 1 : 0)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye size={10} />
                      <span>{item.views}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={10} />
                    <span>{new Date(item.date).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image size={isMobile ? 24 : 32} className="text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Tidak ada konten ditemukan
            </h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
              Coba ubah filter atau kategori untuk melihat konten lainnya
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed positioning for better visibility */}
            <button
              onClick={closeLightbox}
              className="fixed top-4 right-4 z-60 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Close lightbox"
            >
              <X size={isMobile ? 20 : 24} />
            </button>

            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
              {selectedMedia?.type === 'foto' ? (
                <img
                  src={selectedMedia?.src}
                  alt={selectedMedia?.title}
                  className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${selectedMedia?.title}`;
                  }}
                />
              ) : (
                <video
                  src={selectedMedia?.src}
                  controls
                  className="w-full max-h-[60vh] sm:max-h-[70vh]"
                  autoPlay
                />
              )}

              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 space-y-2 sm:space-y-0">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {selectedMedia?.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {selectedMedia?.description}
                    </p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start">
                    {selectedMedia?.category}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Heart size={14} />
                      <span>{selectedMedia?.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{selectedMedia?.views}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{selectedMedia?.date ? new Date(selectedMedia.date).toLocaleDateString('id-ID') : ''}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}