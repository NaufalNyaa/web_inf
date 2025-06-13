"use client";

import { Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <div className="relative z-10 py-16 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Hubungi Kami
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Mari terhubung dan wujudkan ide-ide brilian bersama. Kami siap mendengar cerita Anda.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Telepon</h3>
                    <p className="text-gray-700 dark:text-gray-300">+62 895 3373 64474</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Alamat</h3>
                    <p className="text-gray-700 dark:text-gray-300">Banten, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Jadwal Kuliah</h3>
                    <p className="text-gray-700 dark:text-gray-300">Sen - Rab, 07:30 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 border border-white/20 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mari Berkolaborasi!</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  "Setiap ide besar dimulai dari percakapan sederhana. Mari kita mulai percakapan yang akan mengubah segalanya."
                </p>
              </div>

              {/* Social Media Links */}
              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 text-center">
                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Ikuti Kami</h3>
                <div className="flex justify-center space-x-4">
                  <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">f</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">t</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">ig</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}