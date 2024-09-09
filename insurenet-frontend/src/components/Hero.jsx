import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
  <div className="text-center text-white px-6 py-4">
    <h1 className="text-5xl font-bold mb-4">Empowering Community Insurance</h1>
    <p className="text-xl mb-6">Innovative peer-to-peer insurance tailored for your community.</p>
    <button className="bg-white text-custom-green px-6 py-3 rounded-3xl hover:scale-105 transition-transform">Get Started</button>
  </div>
</section>

  )
}

export default Hero