import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'

function Nav(){
    return(
        <header className={navStyle.nav}>
            <Link href='/'>
                <ul>
                    <li>QUIZZER</li>
                </ul>
            </Link>
        </header>
    )
}

export default Nav;