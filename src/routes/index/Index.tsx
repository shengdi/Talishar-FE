import React from 'react';
import CreateGame from './components/createGame/CreateGame';
import GameList from './components/gameList/GameList';
import styles from './Index.module.css';

const Index = () => {
  return (
    <main>
      <div className="grid">
        <div className={styles.firstCol}>
          <GameList />
        </div>
        <div>
          <CreateGame />
        </div>
        <div>
          <h1>News</h1>
          <h3>Big changes to matchmaking!</h3>
          <h4>Login is now required for matchmaking</h4>
          <p>
            If logged out, you can still make private games to play with
            friends, against yourself in multiple tabs, or against the bot!
            We've also added Clash as a supported format.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
