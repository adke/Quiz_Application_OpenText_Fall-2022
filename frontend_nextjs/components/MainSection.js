import Link from 'next/link'

function MainSection(){
    return(
        <div className="standard-format">
            <Link href='/addquiz'>
                <button className="button-17">Let's Make a Quiz!</button>
            </Link>
        </div>
    )
}

export default MainSection;