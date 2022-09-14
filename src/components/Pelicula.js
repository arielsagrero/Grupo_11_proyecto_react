
function Pelicula (props) {
        return (
            <div className="contenedor">
                <div className="pelicula">
                    <h2> {props.titulo} </h2>
                    <hr />
                    <img src={props.img} alt="" />
                    <h3>Sinopsis</h3>
                    <p> {props.sinopsis} </p>
                    <hr />
                    <p><b>Reparto:</b> {props.reparto} </p>
                    <p><b>Clasificación:</b> {props.clasificacion} </p>
                    <p><b>Duración:</b> {props.duracion} </p>
                    <a href="#" className="boton"><i className="fa-solid fa-ticket"></i>Comprar</a>
                </div>
            </div>
        );
}

export default Pelicula;