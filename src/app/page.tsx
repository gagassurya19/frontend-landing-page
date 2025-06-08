import { Heart, ChefHat, Calculator, Users, Star, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EEB773' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm" style={{ borderBottomColor: '#5E3726', borderBottomWidth: '1px' }}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8" style={{ color: '#5E3726' }} />
            <span className="text-xl font-bold" style={{ color: '#5E3726' }}>Kalori & Resep</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="transition-colors hover:opacity-70" style={{ color: '#5E3726' }}>Fitur</a>
            <a href="#recipes" className="transition-colors hover:opacity-70" style={{ color: '#5E3726' }}>Resep</a>
            <a href="#about" className="transition-colors hover:opacity-70" style={{ color: '#5E3726' }}>Tentang</a>
          </nav>
          <button className="text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-80" style={{ backgroundColor: '#5E3726' }}>
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ color: '#5E3726' }}>
            Hidup Sehat Dimulai dari
            <span style={{ color: '#5E3726' }}> Resep Tepat</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: '#5E3726' }}>
            Temukan ribuan resep sehat dengan hitungan kalori akurat. Mulai perjalanan hidup sehat Anda hari ini!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://kasep-app.gagas.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:opacity-80"
              style={{ backgroundColor: '#5E3726' }}
            >
              <Calculator className="inline h-5 w-5 mr-2" />
              Hitung Kalori Sekarang
            </a>
            <a
              href="#recipes"
              className="inline-block border-2 px-8 py-4 rounded-full text-lg font-medium transition-all hover:opacity-70"
              style={{ borderColor: '#5E3726', color: '#5E3726' }}
            >
              <Heart className="inline h-5 w-5 mr-2" />
              Lihat Resep Favorit
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#5E3726' }}>10K+</div>
              <div className="text-sm md:text-base lg:text-lg" style={{ color: '#5E3726' }}>Resep Sehat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#5E3726' }}>50K+</div>
              <div className="text-sm md:text-base lg:text-lg" style={{ color: '#5E3726' }}>Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#5E3726' }}>95%</div>
              <div className="text-sm md:text-base lg:text-lg" style={{ color: '#5E3726' }}>Akurasi Kalori</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#5E3726' }}>4.9</div>
              <div className="text-sm md:text-base lg:text-lg" style={{ color: '#5E3726' }}>Rating App</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#5E3726' }}>
              Fitur Unggulan
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#5E3726' }}>
              Semua yang Anda butuhkan untuk menjalani hidup sehat dalam satu aplikasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="text-center p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all hover:transform hover:scale-105" style={{ backgroundColor: '#5E3726' }}>
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EEB773' }}>
                <Calculator className="h-10 w-10 lg:h-12 lg:w-12" style={{ color: '#5E3726' }} />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Kalkulator Kalori Pintar</h3>
              <p className="text-white lg:text-lg leading-relaxed">
                Hitung kalori makanan dengan akurasi tinggi menggunakan AI terdepan
              </p>
            </div>

            <div className="text-center p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all hover:transform hover:scale-105" style={{ backgroundColor: '#5E3726' }}>
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EEB773' }}>
                <ChefHat className="h-10 w-10 lg:h-12 lg:w-12" style={{ color: '#5E3726' }} />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Resep Personalisasi</h3>
              <p className="text-white lg:text-lg leading-relaxed">
                Dapatkan rekomendasi resep sesuai target kalori dan preferensi diet Anda
              </p>
            </div>

            <div className="text-center p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all hover:transform hover:scale-105" style={{ backgroundColor: '#5E3726' }}>
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EEB773' }}>
                <Users className="h-10 w-10 lg:h-12 lg:w-12" style={{ color: '#5E3726' }} />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Komunitas Sehat</h3>
              <p className="text-white lg:text-lg leading-relaxed">
                Bergabung dengan komunitas untuk berbagi tips dan motivasi hidup sehat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section id="recipes" className="py-20 lg:py-28" style={{ backgroundColor: '#D78F43' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Resep Populer Minggu Ini
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
              Dipilih khusus oleh ahli gizi untuk hidup sehat Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Smoothie Bowl Protein",
                calories: "280 kal",
                time: "5 menit",
                rating: "4.8",
                image: "🥣",
                description: "Sarapan bergizi tinggi protein"
              },
              {
                title: "Salad Quinoa Rainbow",
                calories: "350 kal",
                time: "15 menit",
                rating: "4.9",
                image: "🥗",
                description: "Lunch sehat penuh nutrisi"
              },
              {
                title: "Salmon Panggang Lemon",
                calories: "420 kal",
                time: "25 menit",
                rating: "4.7",
                image: "🐟",
                description: "Dinner lezat dan sehat"
              }
            ].map((recipe, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{ backgroundColor: '#5E3726' }}>
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#EEB773' }}>
                  <div className="text-6xl">{recipe.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{recipe.title}</h3>
                  <p className="text-white mb-4">{recipe.description}</p>

                  <div className="flex items-center justify-between text-sm text-white mb-4">
                    <div className="flex items-center">
                      <Calculator className="h-4 w-4 mr-1" />
                      {recipe.calories}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-300" />
                      {recipe.rating}
                    </div>
                  </div>

                  <button className="w-full text-white py-2 rounded-lg transition-colors hover:opacity-80" style={{ backgroundColor: '#EEB773', color: '#5E3726' }}>
                    Lihat Resep
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 lg:py-28 text-white" style={{ backgroundColor: '#5E3726' }}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Siap Memulai Hidup Sehat?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-5xl mx-auto opacity-90 leading-relaxed">
            Bergabung dengan ribuan orang yang sudah merasakan manfaat hidup sehat dengan Kalori & Resep
          </p>

          {/* About App Description */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
              <div className="bg-white/10 p-8 lg:p-10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center">🧮 Kalkulator Kalori Pintar</h3>
                <ul className="space-y-3 text-sm lg:text-base opacity-90 leading-relaxed">
                  <li>• Hitung kalori makanan dengan akurasi tinggi</li>
                  <li>• Database lengkap ribuan jenis makanan Indonesia</li>
                  <li>• Teknologi AI untuk estimasi porsi yang tepat</li>
                  <li>• Tracking harian intake kalori dan nutrisi</li>
                  <li>• Goal setting untuk target berat badan ideal</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 lg:p-10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center">👨‍🍳 Koleksi Resep Sehat</h3>
                <ul className="space-y-3 text-sm lg:text-base opacity-90 leading-relaxed">
                  <li>• 10,000+ resep sehat terverifikasi ahli gizi</li>
                  <li>• Resep disesuaikan dengan target kalori Anda</li>
                  <li>• Panduan step-by-step dengan gambar detail</li>
                  <li>• Filter berdasarkan diet khusus (keto, vegan, dll)</li>
                  <li>• Meal planning mingguan yang praktis</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-white/5 p-8 lg:p-10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl lg:text-2xl font-semibold mb-8">🎯 Mengapa Memilih Kalori & Resep?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-sm lg:text-base">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-4">⚡</div>
                  <p className="leading-relaxed"><strong>Mudah & Cepat</strong><br />Interface yang user-friendly dan responsive untuk semua device</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-4">🔬</div>
                  <p className="leading-relaxed"><strong>Akurasi Tinggi</strong><br />Data nutrisi yang akurat dan terverifikasi oleh ahli gizi</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-4">🤝</div>
                  <p className="leading-relaxed"><strong>Komunitas Aktif</strong><br />Dukungan komunitas dan tips dari sesama pengguna</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://kasep-app.gagas.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:opacity-80"
              style={{ backgroundColor: '#EEB773', color: '#5E3726' }}
            >
              Coba Sekarang
            </a>
            <a
              href="https://kasep-app.gagas.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:opacity-70"
              style={{ borderColor: '#EEB773' }}
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#5E3726' }}>
        <div className="container w-full mx-auto px-4 text-center">

          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-8 w-8" style={{ color: '#EEB773' }} />
            <span className="text-xl font-bold">Kalori & Resep</span>
          </div>
          <p className="text-white opacity-80 max-w-2xl mx-auto mb-8">
            Platform terpercaya untuk hidup sehat dengan resep bergizi dan hitungan kalori akurat.
          </p>

          <div className="mt-8 pt-8 text-center text-white opacity-80" style={{ borderTopColor: '#EEB773', borderTopWidth: '1px' }}>
            <p>&copy; 2024 Kalori & Resep. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
