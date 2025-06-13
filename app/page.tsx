import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Remove this line: import Layout from '../app/layout';

const Homepage: React.FC = () => {
  const features = [
    {
      icon: '👥',
      title: 'Profil Mahasiswa',
      description: 'Kenali lebih dekat 35 mahasiswa Informatika A dengan profil lengkap dan foto.',
      href: '/profil'
    },
    {
      icon: '📸',
      title: 'Galeri Kegiatan',
      description: 'Dokumentasi foto dan video kegiatan kelas dan organisasi.',
      href: '/galeri'
    },
    {
      icon: '📞',
      title: 'Hubungi Kami',
      description: 'Terhubung dengan kelas melalui form kontak dan media sosial.',
      href: '/kontak'
    }
  ];

  const stats = [
    { number: '35', label: 'Mahasiswa' },
    { number: '100+', label: 'Kegiatan' },
    { number: '4', label: 'Semester' },
    { number: '1', label: 'Kelas Terbaik' }
  ];

  return (
    <>
      <Head>
        <title>Informatika A - Kelas Terdepan dalam Teknologi</title>
        <meta name="description" content="Website resmi kelas Informatika A - Mengenal lebih dekat mahasiswa, kegiatan, dan prestasi kelas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient text-gray-700 dark:text-gray-300">Informatika A</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Kelas terdepan dalam teknologi, inovasi, dan kolaborasi.
              Bersama membangun masa depan digital yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-700 dark:text-gray-300">
              <Link href="/profil" className="btn-primary text-lg px-8 py-3">
                Kenali Kami
              </Link>
              <Link href="/galeri" className="btn-secondary text-lg px-8 py-3">
                Lihat Galeri
              </Link>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-12 opacity-80"></div>
          </div>
          <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-80"></div>
          </div>
          <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg rotate-45 opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-700 dark:text-gray-300">
              Jelajahi Kelas Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Temukan berbagai informasi menarik tentang kelas Informatika A
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-medium">Selengkapnya</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Bergabung dengan Komunitas Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Terhubung dengan mahasiswa Informatika A dan ikuti perkembangan terbaru kelas
          </p>
          <Link href="/kontak" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
};

export default Homepage;
