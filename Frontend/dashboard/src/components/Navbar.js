import React from 'react';
import ThemeToggler from './ThemeToggler';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid" >
                <h1 id="nav" className="navbar-brand fs-1" to="/">
                HODLINFO
                </h1>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2"> 
                        {/* Use ml-auto class to move the buttons to the right */}
                        
                    </ul>
                    
                    <div className="d-flex justify-content-between ml-auto">
                    {/* <i class="fa-brands fa-telegram"></i> */}

                        <a className="btn mx-1" to="https://hodlinfo.com/connect/telegram" style={{ backgroundColor: '#17a2b8', color: 'white',margin:'0px 80px 0px 40px'}}>
                            Connect Telegram
                        </a>
                        <ThemeToggler/>
                    </div>
                </div>
            </div>
        </nav>

    </div>
  )
}
