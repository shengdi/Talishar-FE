import React from 'react';
import styles from '../index/Index.module.css';
import ArmoryDeckDash from '../../img/ArmoryDeckDash.webp';


const News = () => {
  return (
    <div>
    <h4 className={styles.headlines}>⚙️ Armory Deck: Dash! ⚙️</h4>
    <p className={styles.headlinesParagraphs}>
      Dash I/O armory deck cards are now available in all queues!<br/>For more information about the product, 
      <a href="https://fabtcg.com/en/products/booster-set/armory-deck-dash/" target="_blank"> click here!</a>
    </p>
    <a href="https://fabtcg.com/en/products/booster-set/armory-deck-dash/" target="_blank">
      <img src={ArmoryDeckDash} className={styles.NewsLogoRectangle} />
    </a>
    <br/>
      <p>Please join our community:</p>
      <ul>
        <li>
          <a href="https://discord.gg/JykuRkdd5S" target="_blank">
            Discord
          </a>
        </li>
        <li>
          <a href="https://twitter.com/talishar_online" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
      <p>Disclaimer:</p>
      <small className={styles.disclaimer}>
        Talishar is an open-source, fan-made platform not associated with
        LSS. It may not be a completely accurate representation of the Rules
        as written. If you have questions about interactions or rulings,
        please contact the <a href="https://discord.gg/flesh-and-blood-judge-hub-874145774135558164" target="_blank">JudgeHub Discord</a> for clarification.
        <br/><br/>
        Talishar is in no way affiliated with Legend Story Studios. Legend Story
        Studios®, Flesh and Blood™, and set names are trademarks of Legend Story
        Studios. Flesh and Blood characters, cards, logos, and art are property
        of <a href="https://legendstory.com/" target="_blank">Legend Story Studios</a>. Card Images © Legend Story Studios
      </small>
    </div>
  );
};

/*
            <hgroup>
        Watch Battle Hardened: St. Louis!
        <a href="https://www.youtube.com/watch?v=9ADl9gDGtH0" target="_blank">
          <img
            src="bh-st-louis.webp"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'cover'
            }}
          />
        </a>
      </hgroup>

      */

export default News;
