import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";


export default function Footer() {
  return (
    <footer>
        <Container>
            <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faFacebookSquare} className="icon"/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="icon" /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="icon" /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} className="icon" /></a>                
            </div>
            <p>© 2025 Barbershop Website | Martin Liwonde</p>
        </Container>
    </footer>
  )
}

