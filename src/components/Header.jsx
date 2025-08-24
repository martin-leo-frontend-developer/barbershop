import { faScissors} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container } from "react-bootstrap";


export default function Header() {

  const [currentNavLink, setCurrentNavLink] = useState('/')
  
  
  const navLinks = [
    {
      title: 'home',
      url: '/'
    },
    {
      title: 'features',
      url: '/#features'
    },
    {
       title: 'services',
      url: '/#services'
    },
    {
      title: 'contact',
      url: '/#contact'
    }
  ]


  function handleClick(link) {
    setCurrentNavLink(link)
  }

  return (
    <header>
      <Container>

        <div className="header-container">
          <div className="logo">
            <a href="/"><FontAwesomeIcon icon={faScissors} className="icon"/></a>
          </div>
          <nav>
            {navLinks.map((link) => <a href={link.url} onClick={() => handleClick(link.url)} className={currentNavLink === link.url && 'active' }>{link.title}</a>)}            
          </nav>
        </div>
      </Container>
    </header>
  )
}