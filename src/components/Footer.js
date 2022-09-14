
function Footer (props) {
        return (
            <footer className="pie_pagina">
                <div className="grupo_1">
                    <div class="box">
                        <h2><a href="#">¿Quienes somos?</a></h2>
                        <h2><a href="#">Trabaja con nosotros</a></h2>
                    </div>
                    <div className="box">
                        <h1>SIGUENOS</h1>
                        <div className="red_social">
                            <a href="https://es-la.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/?lang=es"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="grupo_2">
                    <small>&copy; 2022 <b>FPW_Grupo_11</b> - Todos los derechos reservados.</small>
                </div>
            </footer>
        );
}

export default Footer;