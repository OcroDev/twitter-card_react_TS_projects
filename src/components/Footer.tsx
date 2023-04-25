import '../styles/Footer.css'
import twitter from '../assets/twitter.png'
import react from '../assets/react_logo.png'
import typeScript from '../assets/type_script_logo.png'

export const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      <h5>
        React &nbsp;<img src={react} alt='React logo'/>&nbsp;+&nbsp;<img src={typeScript} alt="TypeScript logo" /> &nbsp;
        <span>
          <a href='https://www.github.com/OcroDev'>@OcroDev</a>
        </span>
      </h5>
      <div>
      </div>
      <h6><b style={{ color: '#00acee' }} > Twitter <img src={twitter} alt="twitter logo"/> </b> &nbsp; follow card ( clone )</h6>
    </footer>
  )
}
