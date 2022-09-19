import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    })

    return (
        <div className="not-found">
            <h1>Ooooops....</h1>
            <h2>Page was not found</h2>
            <p>Please go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;