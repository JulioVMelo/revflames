'use client';

import styles from './page.module.css'
import Image from 'next/image'
import IconAwper from './assets/images/icon-awper.svg';
import IconIgl from './assets/images/icon-igl.svg';
// import IconEntry from './assets/images/icon-entry.svg';
// import IconSupport from './assets/images/icon-support.svg';
import IconLurker from './assets/images/icon-lurker.svg';
// import IconTrader from './assets/images/icon-trade.svg';
import IconTwitch from './assets/images/icon-twitch.svg';
import IconSteam from './assets/images/icon-steam.svg';
import ArrowRight from './assets/images/arrow-right.svg';


export default function Home() {
  
  const handleCopy = () => {
    alert('copied');
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Rev Flames
        </p>
        <div>
         <h4>
          By Júlio Melo
         </h4>
        </div>
      </div>
      <div className={styles.players}>
        <div className={styles.playerInfo}>
          <h3 className={styles.nick}>M3loxic</h3>
          <span className={styles.crosshair}>CSGO-CRuM5-SNFNz-4vtqY-GpFfH-LqbxJ</span>
          <div className={styles.roles}>
            <span><Image src={IconAwper} className={styles.icon} alt=""/>Awper</span>
            <span><Image src={IconIgl} className={styles.icon} alt=""/>IGL</span>
            <span><Image src={IconLurker} className={styles.icon} alt=""/>Lurker</span>
            {/* <span><Image src={IconSupport} className={styles.icon} alt=""/>Support</span>
            <span><Image src={IconEntry}  className={styles.icon} alt=""/>Entry</span>
            <span><Image src={IconTrader} className={styles.icon} alt=""/>Trader</span> */}
          </div>
          <div className={styles.profile}>
            <a href=""><Image src={IconSteam} className={styles.icon} alt=""/> Steam</a>
            <a href=""><Image src={IconTwitch} className={styles.icon} alt=""/> Twitch</a>
          </div>
          <div className={styles.detail}>
            <button type='button' onClick={() => console.log('clicou')}>config</button>
          </div>
        </div>
        <div className={styles.playerInfo}>
          <h3 className={styles.nick}>Azurra</h3>
          <span className={styles.crosshair}>CSGO-CRuM5-SNFNz-4vtqY-GpFfH-LqbxJ</span>
          <div className={styles.roles}>
            <span><Image src={IconAwper} className={styles.icon} alt=""/>Awper</span>
            <span><Image src={IconIgl} className={styles.icon} alt=""/>IGL</span>
            <span><Image src={IconLurker} className={styles.icon} alt=""/>Lurker</span>
            {/* <span><Image src={IconSupport} className={styles.icon} alt=""/>Support</span>
            <span><Image src={IconEntry}  className={styles.icon} alt=""/>Entry</span>
            <span><Image src={IconTrader} className={styles.icon} alt=""/>Trader</span> */}
          </div>
          <div className={styles.profile}>
            <a href=""><Image src={IconSteam} className={styles.icon} alt=""/> Steam</a>
            <a href=""><Image src={IconTwitch} className={styles.icon} alt=""/> Twitch</a>
          </div>
          <div className={styles.detail}>
            <button type='button' onClick={() => console.log('clicou')}>config</button>
          </div>
        </div>
        <div className={styles.playerInfo}>
          <h3 className={styles.nick}>Bond</h3>
          <span className={styles.crosshair}>CSGO-CRuM5-SNFNz-4vtqY-GpFfH-LqbxJ</span>
          <div className={styles.roles}>
            <span><Image src={IconAwper} className={styles.icon} alt=""/>Awper</span>
            <span><Image src={IconIgl} className={styles.icon} alt=""/>IGL</span>
            <span><Image src={IconLurker} className={styles.icon} alt=""/>Lurker</span>
            {/* <span><Image src={IconSupport} className={styles.icon} alt=""/>Support</span>
            <span><Image src={IconEntry}  className={styles.icon} alt=""/>Entry</span>
            <span><Image src={IconTrader} className={styles.icon} alt=""/>Trader</span> */}
          </div>
          <div className={styles.profile}>
            <a href=""><Image src={IconSteam} className={styles.icon} alt=""/> Steam</a>
            <a href=""><Image src={IconTwitch} className={styles.icon} alt=""/> Twitch</a>
          </div>
          <div className={styles.detail}>
            <button type='button' onClick={() => console.log('clicou')}>config</button>
          </div>
        </div>
        <div className={styles.playerInfo}>
          <h3 className={styles.nick}>Gabaru</h3>
          <button className={styles.crosshair} onClick={() => handleCopy()}>CSGO-CRuM5-SNFNz-4vtqY-GpFfH-LqbxJ</button>
          <div className={styles.roles}>
            <span><Image src={IconAwper} className={styles.icon} alt=""/>Awper</span>
            <span><Image src={IconIgl} className={styles.icon} alt=""/>IGL</span>
            <span><Image src={IconLurker} className={styles.icon} alt=""/>Lurker</span>
            {/* <span><Image src={IconSupport} className={styles.icon} alt=""/>Support</span>
            <span><Image src={IconEntry}  className={styles.icon} alt=""/>Entry</span>
            <span><Image src={IconTrader} className={styles.icon} alt=""/>Trader</span> */}
          </div>
          <div className={styles.profile}>
            <a href=""><Image src={IconSteam} className={styles.icon} alt=""/> Steam</a>
            <a href=""><Image src={IconTwitch} className={styles.icon} alt=""/> Twitch</a>
          </div>
          <div className={styles.detail}>
            <button type='button' onClick={() => console.log('clicou')}><Image src={ArrowRight}  alt=""/>profile</button>
          </div>
        </div>
      </div>
    </main>
  )
}
