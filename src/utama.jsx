import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Beranda from './berada';
import TentangSaya from './tentang saya';
import Karya from './karya';
import Kontak from './kontak';
import Gallery from './Pages/Gallery';
import Cart from './Pages/Cart';
import Pegawai from './Pages/pegawai'

const Utama = () => (
    <Routes>
        <Route exact path='/' element={<Beranda/>}/>
        <Route path='/tentangsaya' element={<TentangSaya/>}/>
        <Route path='/karya' element={<Karya/>} />
        <Route path='/kontak' element={<Kontak/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/pegawai' element={<Pegawai/>}/>
  </Routes>
)

export default Utama;