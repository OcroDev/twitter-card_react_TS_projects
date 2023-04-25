import '../styles/Footer.css'
import twitter from '../assets/twitter.png'
export const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      <h4>
        React+Ts ⚛️
        <span>
          <a href='https://www.github.com/OcroDev'>@OcroDev</a>
        </span>
      </h4>
      <div>
      </div>
      <h5><b style={{ color: '#00acee' }} > Twitter <img src={twitter} alt="twitter logo"/> </b> &nbsp; follow card ( clone )</h5>
    </footer>
  )
}
