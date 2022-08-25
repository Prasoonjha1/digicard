import twitter from '../Image/Twitter.png'
import insta from '../Image/Instagram.png'
import facebook from '../Image/Facebook.png'
import git from '../Image/GitHub.png'

function Footer()
{
    return (
        <footer className='footer'>
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={insta}></img>
            <img src={git}></img>
        </footer>
    )
}

export default Footer