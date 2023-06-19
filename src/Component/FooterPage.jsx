import {BsGithub} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
const Footer = () =>{
    return(
        <div className="footer">
            <a href="https://www.facebook.com/chukwudi.ilonuba" className='social'><FaFacebook /></a>
            <a href="#" className='social'><BsInstagram /></a>
            <a href="https://twitter.com/marcelinus_ilo" className='social'><BsTwitter /></a>
            <a href="https://www.linkedin.com/in/ilonuba-chukwudi-a14868191/" className='social'><BsLinkedin /></a>
            <a href="https://github.com/Meskana" className='social'><BsGithub /></a>
        </div>
    )
}
 export default Footer