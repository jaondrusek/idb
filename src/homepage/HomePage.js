import React, { Component } from 'react';
import styles from './HomePage.scss';
import MemberContainer from './MemberContainer';
import memberdata from './MemberData.js';
import APIContainer from './APIContainer';
import apidata from './APIData.js';
import StatsContainer from './StatsContainer.js';
import ToolContainer from './ToolContainer';
import tooldata from './ToolData.js';
import NavMenu from '../shared/NavMenu';
import PropTypes from 'prop-types';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.home_container}>
        <NavMenu
          pages={this.props.pages}
          searchText={this.props.searchText}
          handleSubmit={this.props.handleSubmit} />
        <div className={styles.splash}></div>
        <div className={styles.about_container}>
          <div className={styles.motivation}>
            <p className={styles.topic}>
              The Motivation
            </p>
            <div className="ui container">
              <div className={styles.motivation}>
                This project was made because many of our team members are very interested in Anime and anime culture. Those who are interested in anime are jokingly called weebs short for weeaboo which used to be a derogatory term created on internet forums for people obsessed with anime and Japanese culture. Nowadays, the term is much more of a funny nod to early Internet culture and thus we named the website WeebMD as a pun off of WebMD one of the most well known Internet medical websites. Doing a project on a subject that many of us are interested in has made it much easier for us to want to work on the project and take interest into how it both looks and performs. Internet culture is ripe with anime content and the RESTful APIs available to us have been well documented for the use cases we want to provide. We want to make this website easy to navigate so that those who want a simple way to look up their favorite anime, manga, anime characters or the creators who work on them can do so on a fun website made by anime fans!
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <p className={styles.topic}>
              The Anime All Stars
            </p>
            <MemberContainer data={memberdata.map(member => {
              return {
                ...member
              }
            })}/>
          </div>
          <div className={styles.info}>
            <p className={styles.topic}>
              The Stats
            </p>
            <StatsContainer/>
          </div>
          <div className={styles.info}>
            <p className={styles.topic}>
              The Data
            </p>
            <APIContainer data={apidata.map(api => {
              return {
                ...api
              }
            })}/>
          </div>
          <div className={styles.info}>
            <p className={styles.topic}>
              The Toolbox
            </p>
            <ToolContainer data={tooldata.map(tool => {
              return {
                ...tool
              }
            })}/>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  pages: PropTypes.array.isRequired,
  searchText: PropTypes.string,
  handleSubmit: PropTypes.func,
}

export default HomePage;
