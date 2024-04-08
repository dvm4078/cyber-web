import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {

    new fullpage('#fullpage', {
      sectionsColor: ['#000', '#000', '#000', '#000'],
      slidesNavigation: true,
      css3: true,
      scrollingSpeed: 1500,
    });

    const moveUpElm = document.getElementById('moveUp');
    const moveDownElm = document.getElementById('moveDown');

    const handleMoveUp = () => {
      fullpage_api.moveSectionUp();
    }

    const handleMoveDown = () => {
      fullpage_api.moveSectionDown();
    }

    moveUpElm.addEventListener('click', handleMoveUp)
    moveDownElm.addEventListener('click', handleMoveDown)

    return () => {
      fullpage_api.destroy('all');
    }
  }, [])

  return (
    <div className="main">
      <div id="fullpage">
        <div className="section section0" id="section0">
          <picture>
            <source srcSet="img/txt_home_pc.png" media="(min-width: 1000px)" />
            <img srcSet="img/txt_home_mobile.png" alt="…" />
          </picture>
          <img className="us-home" src="img/us_home.png" />
          <Link to="/buy-token" className="btn-home" />
          {/* <a href="#" className="btn-home" target="_self"></a> */}
          <p className="txt-home">
            Bringing AI into gaming experience, <br />
            dive in a new world of CyberNeo
          </p>
        </div>
        <div className="section section1" id="section1">
          <div className="box-section box-1">
            <div className="box-layer"></div>
            <div className="box-footer">
              <img src="img/txt_intro_1.png" />
              <p className="txt_intro">Beginning of a new Journey</p>
            </div>
          </div>
          <div className="box-section box-2">
            <div className="box-layer"></div>
            <div className="box-intro">
              <img src="img/txt_intro.png" />
              <p>
                CyberNeo is a Multichain integrated Web3 platform combining GameFi,
                NFTs, DeFi, Marketplace, and Liquid Staking. Ultiverse aims at building
                the next-generation entrance connecting Web3 with players all around
                the world.
              </p>
            </div>
            <div className="box-footer">
              <img src="img/token_intro.png" />
              <p className="txt_intro"> Available on, SOL</p>
            </div>
          </div>
          <div className="box-section box-3">
            <div className="box-layer"></div>
            <div className="box-footer">
              <img src="img/txt_intro_2.png" />
              <p className="txt_intro">NFTs</p>
            </div>
          </div>
        </div>
        <div className="section section2" id="section2">
          <div className="box-partner">
            <picture>
              <source srcSet="img/partner_pc.png" media="(min-width: 1000px)" />
              <img srcSet="img/partner_mobile.png" alt="…" />
            </picture>
          </div>
        </div>
        <div className="section section3" id="section3">
          <img src="img/txt_terms.png" />
          <div className="box-terms">
            <div className="box-terms-inner">
              <h2>TERMS OF SERVICE</h2>
              <br />
              <p>
                <i>Last Revised on September 6, 2022</i> <br />
                Welcome to the Terms of Service (these `Service`) for the website https://www.cyberneo.io/ (the “Website”), the Projects of CyberNeo, and all other applications, content, smart contracts, tools, features, and functionality offered on or through our Website, in each case operated by or on behalf of CyberNeo, Inc. ("Company," "we," or "us").
              </p>
              <br />
              <h2>PRIVACY POLICY</h2>
              <br />
              <p>
                <i>Last Revised on September 6, 2022</i> <br />
                We are committed to respecting and protecting your privacy and complying with any applicable law and regulation regarding your personal information. This Privacy Policy describes how we collect, use, disclose, and protect your personal information, including across our website, https://www.cyberneo.io/, projects of Cyberneo, and all other applications, content, smart contracts, tools, features, and functionality offered on or through our Website and projects of CyberNeo, in each case operated by or on behalf of CyberNeo, Inc. (“we,” “us,” “our”).
                <br /><br />
                Please read this Privacy Policy carefully. If you do not agree with this Privacy Policy in general or any part of it, you should not access the website, use our Services, or otherwise provide your information to us.
              </p>
              <img src="img/ico-4.png" />
              <p>
                Copyright ©2022 Cyberneo, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fp-arrow-up" id="moveUp"></div>
      <div className="fp-arrow-down" id="moveDown"></div>
      <div className="bg-footer"></div>
    </div>
  )
}

export default HomePage
