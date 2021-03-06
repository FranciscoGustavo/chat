import React from 'react';

import Profile from '../../molecules/Profile';
import Nav from '../../molecules/Nav';
import Settings from '../../molecules/Settings';
import Footer from '../../molecules/Footer';

import { Div } from './styles';

const Navbar = ({ user }) => (
  <Div>
    <Profile img="/" name={user.name} status="active" />
    <Nav />
    <Settings />
    <Footer />
  </Div>
);

export default Navbar;
