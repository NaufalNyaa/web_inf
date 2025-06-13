"use client";
import { useState } from 'react';

export default function GalleryTab() {
  const [activeTab, setActiveTab] = useState<'foto' | 'video'>('foto');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-neon">Galeri Kegiatan</h1>
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('foto')}
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === 'foto' ? 'bg-neon text-black' : 'bg-gray-700 text-white'}`}
          >
            Foto
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === 'video' ? 'bg-neon text-black' : 'bg-gray-700 text-white'}`}
          >
            Video
          </button>
        </div>
        {activeTab === 'foto' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Ganti dengan foto sebenarnya */}
            <img src="/assets/photos/activity1.jpg" alt="Activity 1" className="rounded-lg" />
            <img src="/assets/photos/activity2.jpg" alt="Activity 2" className="rounded-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ganti dengan video sebenarnya */}
            <video controls src="/assets/videos/activity1.mp4" className="rounded-lg" />
            <video controls src="/assets/videos/activity2.mp4" className="rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
