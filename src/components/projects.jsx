import '../css/projects.css';
import Carousel from './carousel';

const Projects = () => {
    return (
        <section className='projects mt-100'>
            <article className='projects__top'>
                <Carousel />
                <h2 className='projects__title'>PROYECTOS</h2>
                <img className='projects__bg' src="assets/proyects-bg.jpg" alt="background" />
            </article>
            <div className='projects__separator'></div>
            <article className='project__container'>
                <img className='project__img' src="assets/gym-img.jpg" alt="imagen gimnasio" />
                <div className='project__data'>
                    <div className='project__details'>
                        <h2 className='projects__title'>AFTER GYM</h2>
                        <img className='project__mockup' src="assets/wireframe.jpg" alt="" />
                        <div className='project__info'>
                            <span>Info</span>
                            <span>Landing page</span>
                            <span>Responsive page</span>
                        </div>
                        <p className='project__description'>Primer proyecto. Diseño de página institucional y comercial para gimnasio.</p>
                        <div className='project__languages'>
                            <span>Lenguajes utilizados:</span>
                            <div className='languages__container'>
                                <span>
                                    <svg width="46" height="51" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H46L45.31 8.72368H10.35L11.27 18.1184H44.16L41.4 45.6316L23.46 51L3.68 45.6316L2.53 31.5395H12.65L13.34 38.25L23.46 41.1579L33.35 38.25L34.73 26.8421H2.53L0 0Z" fill="black" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43 0H0L0.701087 8.57971L33.1848 8.81159L32.25 17.6232H11.4511L11.9185 25.5072H32.25L31.0815 37.1014L21.7337 39.6522L11.9185 37.1014L11.4511 30.1449H2.80435L3.50543 42.6667L21.7337 48L39.2609 43.3623L43 0Z" fill="black" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.75 0H13.25V36.5L0 33V41L19.75 46V0Z" fill="black" />
                                        <path d="M47 8V0H25.75V30L39 28.25V34.5L25.75 38V46L44.75 41L46 18.5L32.75 20.75V8H47Z" fill="black" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='project__links'>
                        <a href="#"><img src="assets/github.svg" alt="" /></a>
                        <a href="#"><img src="assets/web.svg" alt="" /></a>
                    </div>
                </div>
            </article>
            <div className='projects__separator'></div>
            <article className='project__container project__container--reverse project__container--soon'>
                <img className='project__img' src="assets/soon-img.jpg" alt="imagen gimnasio" />
                <div className='project__data'>
                    <div className='project__details'>
                        <h2 className='projects__title'>Proximamente...</h2>
                        <img className='project__mockup' src="assets/wireframe.jpg" alt="" />
                        <div className='project__info project__info--disabled'>
                            <span>Info</span>
                            <span>Landing page</span>
                            <span>Responsive page</span>
                        </div>
                        <p className='project__description'>Pagina web en desarrollo</p>
                        <div className='project__languages'>
                            <span>Lenguajes utilizados:</span>
                            <div className='languages__container'>
                                <span>
                                    <svg width="46" height="51" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H46L45.31 8.72368H10.35L11.27 18.1184H44.16L41.4 45.6316L23.46 51L3.68 45.6316L2.53 31.5395H12.65L13.34 38.25L23.46 41.1579L33.35 38.25L34.73 26.8421H2.53L0 0Z" fill="black" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43 0H0L0.701087 8.57971L33.1848 8.81159L32.25 17.6232H11.4511L11.9185 25.5072H32.25L31.0815 37.1014L21.7337 39.6522L11.9185 37.1014L11.4511 30.1449H2.80435L3.50543 42.6667L21.7337 48L39.2609 43.3623L43 0Z" fill="black" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.75 0H13.25V36.5L0 33V41L19.75 46V0Z" fill="black" />
                                        <path d="M47 8V0H25.75V30L39 28.25V34.5L25.75 38V46L44.75 41L46 18.5L32.75 20.75V8H47Z" fill="black" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='project__links project__links--disabled'>
                        <img src="assets/github-disabled.svg" alt="" />
                        <img src="assets/web-disabled.svg" alt="" />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Projects;