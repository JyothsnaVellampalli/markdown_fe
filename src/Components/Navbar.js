import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar({login, email}) {
  return (
    <div class="navbar">
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Markdown Viewer</a>
    {login== 'True' ?
    (<p className="navbar-email"><AccountCircleIcon/>{email}</p>):<></>}
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
