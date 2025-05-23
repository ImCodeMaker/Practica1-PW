import './App.css';

export default function HomePage() {
  return (
    <section className="main-container">
      <div className="items-container">
        <h1>Práctica #1</h1>
        <p><strong>Nombre:</strong> Teudy Joshua</p>
        <p><strong>Apellidos:</strong> Encarnacion Fulgencio</p>
        <p><strong>Teléfono:</strong> +1 829-388-5700</p>
        <p><strong>Dirección:</strong> Calle Camino 2do Marbella III #82</p>
        <p><strong>Correo Electrónico:</strong> teudijoshua@gmail.com</p>
        <p><strong>Hobbies:</strong> Creación de Videojuegos, Programación, Piano, Explorar nuevos lugares y aprender</p>

        <div className="link-group">
          <a 
            className="social-link instagram" 
            href="https://www.instagram.com/teudyenc_/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a 
            className="social-link youtube" 
            href="https://www.youtube.com/watch?v=g4xoe5Ccuzc" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver en YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
