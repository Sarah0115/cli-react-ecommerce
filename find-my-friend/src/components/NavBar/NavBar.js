import './NavBar.css';
import logo from '../../logo.svg';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
            <a class="navbar-brand" href="#"><img alt="logo" className="logo" src={logo} width="30" height="24"/>OnlineShop</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
                            
            </div>
        </nav>
    );
}

export default NavBar; 