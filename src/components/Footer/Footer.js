import matruvaniLogo from '../../assets/matruvani-logo.svg';
import facebookLogo from '../../assets/facebook.svg'
import twitterLogo from '../../assets/twitter.svg'
import instagramLogo from '../../assets/instagram.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer_logo">
                            <img src={matruvaniLogo} alt='matruvani-logo' />
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-md-8">
                        <div className="footer_info">
                            <span>Copyright © 2022 Matruvani. All Rights Reserved.</span>
                            <a href="#">Terms &amp; Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="col-md-4 text-left">
                        <div className="footer_social">
                            <a href="#"><img src={facebookLogo} alt='social-media-logo' /></a>
                            <a href="#"><img src={twitterLogo} alt='social-media-logo' /></a>
                            <a href="#"><img src={instagramLogo} alt='social-media-logo' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
