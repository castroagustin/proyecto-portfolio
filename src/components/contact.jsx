import '../css/contact.css';

const Contact = () => {
    return (
        <section className='contact'>
            <h2 className='contact__title'>CONTACTO</h2>
            <article className='contact__textContainer'>
                <h3 className='contact__textTitle'>¡Trabajemos Juntos!</h3>
                <p className='contact__text'>
                    Quiero seguir capacitandome y creciendo profesionalmente.
                    Si estás interesado/a en un perfil de desarrollador Full Stack
                    con muchas ganas de aprender, contacta conmigo.
                </p>
            </article>
            <article className='contact__socialContainer'>
                <a download href='assets/CV - DE ASCENTIIS MAXIMILIANO.pdf' className='contact__downloadCV'>Descargar CV</a>
                <div className='contact__social'>
                    <a href="https://www.linkedin.com/in/deascentiismaximiliano/" target="_blank"><img src="assets/linkedin.svg" alt="linkedin" /></a>
                    <a href="https://github.com/DeAscentiisMaximiliano" target="_blank"><img src="assets/github.svg" alt="github" /></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maximiliano.deascentiis@gmail.com" target="_blank"><img src="assets/mail.svg" alt="mail" /></a>
                </div>
            </article>
            <img className='contact__bg' src="assets/contact-bg.jpg" alt="background" />
        </section>
    )
}

export default Contact;