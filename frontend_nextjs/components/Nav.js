import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'

<<<<<<< Updated upstream
function Nav(){
    return(
        <header className={navStyle.nav}>
            <Link href='/'>
                <ul>
                    <li>QUIZZER</li>
                </ul>
            </Link>
        </header>
=======

function Nav() {
    return (
        <nav>
            <div className="logo">
                <h1>Quizzer</h1>
            </div>
            <div className="anchor">
                <Link href="/"><a id="home">Home</a></Link>
                <Link href="/about"><a id="about">About</a></Link>
            </div>



        </nav>
>>>>>>> Stashed changes
    )
}

export default Nav;