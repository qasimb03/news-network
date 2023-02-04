import "./NavBar.css"

export default function NavBar()
{
    return <nav className = "navbar">
        <a href="/" className="site-title">News Network</a>
        <ul>
            <CustomLink href="/sports">Sports</CustomLink>
            <CustomLink href="/stocks">Stocks</CustomLink>
            <CustomLink href="/economy">Economy</CustomLink>
            <CustomLink href="/presidency">Presidency</CustomLink>
        </ul>

    </nav>

    
}


function CustomLink({href, children, ...props})
{
    const path = window.location.pathname
    return (
        <li className = {path === href ? "active" : ""}> 
            <a href={href} {...props}>{children}</a>
        </li>
    ) 
    

}
