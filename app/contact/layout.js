import Link from "next/link"

const ContactLayout = ({ children }) => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center", alignItems: "center", color:"lightblue" }}>
                <Link href="/contact/phone">Call us</Link>
                <Link href="/contact/email">Email</Link>
            </div>
            {children}
        </div>
    )
}

export default ContactLayout