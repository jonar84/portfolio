import React from "react";
import profil from "../Assets/profile.png";
import '../pages/style.css';
import linkedin from "../Assets/linkedin.svg"
import facebook from "../Assets/facebook.svg"
import instagram from "../Assets/instagram.svg"
import google from "../Assets/google.svg"
import amazon from "../Assets/amazon.svg"
import apple from "../Assets/apple.svg"
import plane from "../Assets/plane.svg"
import bootstrap from "../Assets/bootstrap.jpg"
import console from "../Assets/console.jpg"
import animcss from "../Assets/animcss.jpg"
import bootstrapsite from "../Assets/bootstrapsite.jpg"
import down from "../Assets/down.svg"
import Typewriter from "typewriter-effect"


function Home() {

    window.onload = function () {
        const btnMenu = document.querySelector('.btn-rond-menu');
        const nav = document.querySelector('.nav-gauche');
        const allItemNav = document.querySelectorAll('.nav-menu-item');
        const ligne = document.querySelector('.cont-ligne');

        btnMenu.addEventListener('click', () => {
            ligne.classList.toggle('active');
            nav.classList.toggle('menu-visible');
        });

        if (window.matchMedia('(max-width: 1300px)')) {
            allItemNav.forEach(item => {
                item.addEventListener('click', () => {
                    nav.classList.toggle('menu-visible');
                    ligne.classList.toggle('active');
                })
            })
        }
        {/* const txtAnim = document.querySelector('.txt-animation');*/}

        const input_fields = document.querySelectorAll('input');

        for (let i = 0; i < input_fields.length; i++) {
            let field = input_fields[i];
            field.addEventListener('input', (e) => {
                if (e.target.value !== '') {
                    e.target.parentNode.classList.add('animation')
                } else if (e.target.value === '') {
                    e.target.parentNode.classList.remove('animation')
                }
            })

        }

    }

    return (
        <>

            <div className="btn-rond-menu">
                <div className="cont-ligne">
                    <div className="ligne-unique"></div>
                </div>
            </div>

            <nav className="nav-gauche">
                <div className="blocs-menu">
                    <div className="cercle-portrait">
                        <img src={profil} alt="jopdp" />
                    </div>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="http://localhost:3000/">
                            Accueil
                        </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="http://localhost:3000/">
                            Presentation
                        </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="http://localhost:3000/">
                            Portfolio
                        </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="http://localhost:3000/">
                            Competence
                        </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="http://localhost:3000/">
                            Projets
                        </a>
                    </span>
                </div>
                <div className="blocs-menu">
                    <span className="nav-menu-item">
                        <a href="http://localhost:3000/">

                        </a>
                    </span>
                </div>
            </nav>

            <section className="accueil" id="accueil">
                <h2 className="titreh2">Bienvenue sur mon Portfolio</h2>

                <p className="txt-animation">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(40)
                                .typeString("Bonjour, moi c'est Andriamahady Joala")
                                .pauseFor(1000)
                                .typeString('<strong>, Développeur Full-Stack </strong> !')
                                .pauseFor(1000)
                                .deleteChars(13)
                                .typeString('<span style="color: #27ae60;"> CSS</span>')
                                .pauseFor(1000)
                                .deleteChars(5)
                                .typeString('<span style="color: #EA39fff;"> PHP</span>')
                                .pauseFor(1000)
                                .deleteChars(3)
                                .typeString('<span style="color: midnightblue;"> React</span>')
                                .pauseFor(1000)
                                .deleteChars(5)
                                .typeString('<span style="color: #ff6910;"> Javascript</span>')
                                .pauseFor(1000)
                                .deleteChars(11)
                                .typeString('<span style="color: #03fcc2;"> Symfony</span>')
                                .start();
                        }}
                    />
                </p>
                <a href="http://localhost:3000/" className="btn-acc btn-acc1">Projets</a>
                <a href="http://localhost:3000/" className="btn-acc btn-acc2">Expériences</a>

                <div className="medias">
                    <a href="https://www.linkedin.com" target="blank">
                        <div className="media media1">
                            <img src={linkedin} alt="linkedin icon" className="icone-medias" />
                        </div>
                    </a>
                    <a href="https://www.facebook.com" target="blank">
                        <div className="media media2">
                            <img src={facebook} alt="facebook icon" className="icone-medias" />
                        </div>
                    </a>
                    <a href="https://www.instagram.com" target="blank">
                        <div className="media media3">
                            <img src={instagram} alt="instagram icon" className="icone-medias" />
                        </div>
                    </a>
                </div>

                <a href="http://localhost:3000/">
                    <div className="btn-rond">
                        <img src={down} alt="logo fleche bas" className="logo-btn-rond-acc" />
                    </div>
                </a>
            </section>

            { /* Section Presentation */}

            <section className="presentation" id="pres">
                <h2 className="titre-pres">Lorem ipsum dolor sit amet.</h2>

                <div className="container-presentation">
                    <div className="fond-forme"></div>
                    <div className="pres-gauche">
                        <h3>
                            Voluptatum hic odio magni molestias
                        </h3>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quis aspernatur consequuntur inventore sapiente reprehenderit maiores voluptatem, a sed assumenda aut error culpa maxime labore.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, vel. Accusantium quidem dolorum pariatur earum.
                        </p>
                    </div>
                    <div className="pres-droite">
                        <ul className="liste-presentation">
                            <li className="item-liste i1">
                                <span className="chiffre-style">1.</span>
                                <p className="txt-liste">UX Design expert</p>
                            </li>
                            <li className="item-liste i2">
                                <span className="chiffre-style">2.</span>
                                <p className="txt-liste">Spécialiste UI</p>
                            </li>
                            <li className="item-liste i3">
                                <span className="chiffre-style">3.</span>
                                <p className="txt-liste">Développeur Back-end</p>
                            </li>
                            <li className="item-liste i4">
                                <span className="chiffre-style">4.</span>
                                <p className="txt-liste">Développeur Front-end</p>
                            </li>
                            <li className="item-liste i5">
                                <span className="chiffre-style">5.</span>
                                <p className="txt-liste">Développeur Fullstack</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            { /* Section Portfolio */}

            <section className="portfolio" id="port">
                <h2 className="titre-port">
                    Mon Portfolio
                </h2>
                <div className="cont-portfolio">
                    <div className="item vague1">
                        <div className="cont-img-port">
                            <img src={bootstrap} alt="boss" />
                        </div>
                        <h3>Mon projet</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere?</p>
                        <a href="http://localhost:3000/" className="btn-projet">Decouvrer le projet</a>
                    </div>

                    <div className="item vague1">
                        <div className="cont-img-port">
                            <img src={console} alt="boss" />
                        </div>
                        <h3>Mon projet</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere?</p>
                        <a href="http://localhost:3000/" className="btn-projet">Decouvrer le projet</a>
                    </div>

                    <div className="item vague1">
                        <div className="cont-img-port">
                            <img src={animcss} alt="boss" />
                        </div>
                        <h3>Mon projet</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere?</p>
                        <a href="http://localhost:3000/" className="btn-projet">Decouvrer le projet</a>
                    </div>

                    <div className="item vague1">
                        <div className="cont-img-port">
                            <img src={bootstrapsite} alt="boss" />
                        </div>
                        <h3>Mon projet</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere?</p>
                        <a href="http://localhost:3000/" className="btn-projet">Decouvrer le projet</a>
                    </div>
                </div>
            </section>

            { /* Section range */}

            <section className="section-range" id="range">
                <h2 className="titre-exp">Mes compétences</h2>
                <div className="grille-skill">
                    <div class="range-cont">
                        <p class="label-skill">JavaScript</p>
                        <p class="number-skill">90%</p>
                        <div class="barre-skill b1"></div>
                        <div class="barre-grises"></div>
                    </div>
                    <div class="range-cont">
                        <p class="label-skill">SEO</p>
                        <p class="number-skill">75%</p>
                        <div class="barre-skill b2"></div>
                        <div class="barre-grises"></div>
                    </div>
                    <div class="range-cont">
                        <p class="label-skill">UI / UX</p>
                        <p class="number-skill">70%</p>
                        <div class="barre-skill b3"></div>
                        <div class="barre-grises"></div>
                    </div>


                    <div class="range-cont">
                        <p class="label-skill">Node JS</p>
                        <p class="number-skill">80%</p>
                        <div class="barre-skill b4"></div>
                        <div class="barre-grises"></div>
                    </div>
                    <div class="range-cont">
                        <p class="label-skill">Wordpress</p>
                        <p class="number-skill">70%</p>
                        <div class="barre-skill b5"></div>
                        <div class="barre-grises"></div>
                    </div>
                    <div class="range-cont">
                        <p class="label-skill">React JS</p>
                        <p class="number-skill">80%</p>
                        <div class="barre-skill b6"></div>
                        <div class="barre-grises"></div>
                    </div>
                </div>
            </section>

            { /* Section experience */}

            <section className="travail-exp" id="exp">
                <h2 className="titre-travail-exp">Mes experiences</h2>
                <div className="cont-exp-travail">
                    <div className="barre-verticale">
                        <div className="boule-ico">
                            <img src={google} alt="icone gauche" />
                        </div>
                        <div className="boule-ico">
                            <img src={instagram} alt="icone gauche" />
                        </div>
                        <div className="boule-ico">
                            <img src={amazon} alt="icone gauche" />
                        </div>
                        <div className="boule-ico">
                            <img src={apple} alt="icone gauche" />
                        </div>
                        <div className="boule-ico">
                            <img src={plane} className="avion" alt="icone gauche" />
                        </div>
                    </div>

                    <div className="flex-cont-bloc-exp">

                        <div className="bloc bloc1">
                            <div className="contenu-bloc">
                                <p className="titre-section-bloc">Google, 2023</p>
                                <p className="text-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro necessitatibus architecto rerum debitis laudantium neque excepturi illo saepe dolores!</p>
                            </div>
                        </div>

                        <div className="bloc bloc2">
                            <div className="contenu-bloc">
                                <p className="titre-section-bloc">Google, 2023</p>
                                <p className="text-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro necessitatibus architecto rerum debitis laudantium neque excepturi illo saepe dolores!</p>
                            </div>
                        </div>

                        <div className="bloc bloc3">
                            <div className="contenu-bloc">
                                <p className="titre-section-bloc">Google, 2023</p>
                                <p className="text-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro necessitatibus architecto rerum debitis laudantium neque excepturi illo saepe dolores!</p>
                            </div>
                        </div>

                        <div className="bloc bloc4">
                            <div className="contenu-bloc">
                                <p className="titre-section-bloc">Google, 2023</p>
                                <p className="text-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro necessitatibus architecto rerum debitis laudantium neque excepturi illo saepe dolores!</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            { /* Section Parallax */}
            <div className="section-parallax">
                <p className="txt-par">
                    752 tasses
                </p>
                <p className="txt-par">
                    3 projets
                </p>
                <p className="txt-par">
                    1 client
                </p>
            </div>

            { /* Section Contact */}
            <section className="section-contact" id="contact">
                <h2><strong>Rentrons </strong>en contact</h2>
                <div className="container-form">
                    <form className="form-bloc">
                        <div className="form-groupe">
                            <label htmlFor="prenom">Prenom</label>
                            <input type="text" required maxLength={16} id="prenom" />
                        </div>
                        <div className="form-groupe">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" required maxLength={16} id="nom" />
                        </div>
                        <div className="form-groupe">
                            <textarea id="txt" placeholder="Votre message" required></textarea>
                        </div>
                        <div className="form-groupe">
                            <input type="submit" value="ENVOYER" className="button-sub" />
                        </div>
                    </form>
                </div>
            </section>
            <footer>Tout droit reserve &copy; </footer>
        </>
    )
}

export default Home;