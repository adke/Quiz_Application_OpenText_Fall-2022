import Link from 'next/link'
import styles from '../styles/Home.module.css'

function MainSection() {
    return (
        <>
            <div className="bootstrapbuttons">
                <Link href='/addquiz'>
                    <button type="button" class="btn btn-outline-primary">Create Quiz</button>
                </Link>
            </div>
        </>
    )
}

export default MainSection;