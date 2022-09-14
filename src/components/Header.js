
function Header (props) {
        return (
            <header>
                <div className="menu">
                    <h2 className="cine">CINE JUJUY</h2>
                    <nav>
                        <ul>
                            <li><a href="peliculas">Películas</a></li>
                            <li><a href="#">Cines</a></li>
                            <li><a href="#">Promociones</a></li>
                            <li><a href="#">SociosCineJujuy</a></li>
                            <li><a href="#">Contactos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
}

export default Header;