import Link from "next/link"

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Header