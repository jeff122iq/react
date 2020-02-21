import React, { Component } from 'react';
import './App.css';

import styles from './userCard.module.css';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      coaches: [
        {
          id: 1,
          firstName: 'Brian',
          lastName: 'McCauley',
          level: 1,
          avatar: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        },
        {
          id: 2,
          firstName: 'Chad',
          lastName: 'Hayes',
          level: 2,
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 3,
          firstName: 'Jeff',
          lastName: 'Buck',
          level: 2,
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          id: 4,
          firstName: 'Kenny',
          lastName: 'Griffin',
          level: 3,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          id: 5,
          firstName: 'Tom',
          lastName: 'Glover',
          level: 3,
          avatar: 'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        }
      ]
    };
  }

  render () {
    return (
      <ul className={styles.usersList}>
        <li className={styles.userCardContainer}>
          <img className={`${styles.avatar} ${styles.borderRadius50}`} src={this.state.coaches[0].avatar} alt=""/>

          <div className={styles.userInfoWrapper}>
            <h1>{`${this.state.coaches[0].firstName} ${this.state.coaches[0].lastName}`}</h1>
            <h2>{`Level ${this.state.coaches[0].level}`}</h2>
          </div>

          <div className={styles.checkBox}>
            <Icon path={mdiCheck}
                  size={'75%'}
                  color="white"/>
          </div>


        </li>
      </ul>
    );
  }

}

export default App;
