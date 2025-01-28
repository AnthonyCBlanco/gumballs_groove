import React from 'react';

const tracks = [
  {
    title: "Mix 1",
    description: "Hard groove meets girly vibes",
    gradient: "from-purple-100 to-pink-100",
    image: ""
  },
  {
    title: "Mix 2",
    description: "Deep house vibes with hint of skibiddi toilet",
    gradient: "from-pink-100 to-purple-100",
    image: ""
  },
  {
    title: "Mix 3",
    description: "Future bass meets fanum tax and rizzlers",
    gradient: "from-purple-100 to-pink-100",
    image: ""
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="track-card">
              <div className="aspect-video bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${track.image})`}}>
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{track.title}</h3>
                <p className="text-gray-600 mb-4">{track.description}</p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Listen on SoundCloud →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}