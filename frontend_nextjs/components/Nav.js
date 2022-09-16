import Link from 'next/link'


function Nav() {
    return (
        <nav>
            <div className="logo">
                <h1>Quizzer</h1>
            </div>
            <div className="anchor">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>



        </nav>
    )
}

export default Nav;