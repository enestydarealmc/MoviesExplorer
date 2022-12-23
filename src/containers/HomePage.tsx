import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import MovieList from '../components/MovieList'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div>
    <Navbar />
    <Hero />
    <MovieList />
    </div>
  )
}
