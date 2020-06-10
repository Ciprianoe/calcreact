import Link from 'next/link'

const links = [
    {url:"/",nombre:"Home"},
    {url:"/calc",nombre:"Calculator"}
]
export default () => (
<nav>        
    <div className="nav-wrapper">
        <Link href="/"><a className="brand-logo">React + Nextjs</a></Link>      
      <ul id="nav-mobile" className="right hide-on-med-and-down">

          {
              links.map(link=>{
                  return(<li><Link href={link.url}><a>{link.nombre}</a></Link></li>)                
              })
          }
             
      </ul>
    </div>
</nav>
)