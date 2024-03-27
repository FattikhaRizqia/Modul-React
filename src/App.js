

import React from 'react';
import Utama from './utama';
import Gallery from './Pages/Gallery';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      //  <div> <hr />
      //    <Link to="/">Beranda</Link>
      //    <Link to="/tentangsaya">Tentang Saya</Link>
      //    <Link to="/karya">Karya</Link>
      //    <Link to="/kontak">Kontak</Link> 
      //    <hr />
      //    <p><Utama /></p>
      // </div>
      <div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Aryoda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tentangsaya">Tentang Saya</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/karya">Karya</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kontak">Kontak</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Cart">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pegawai">Pegawai</a>
        </li>
      </ul>
    </div>
  </div>
  
  
</nav>
<hr/>
<div class='row'>
    <div class='col-md-8'>
      <Utama/>
    </div>
  </div>
</div>


    );
  }
}

export default App;
