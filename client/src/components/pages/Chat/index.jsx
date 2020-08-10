import React from 'react';
import { FaRegSun, FaToggleOff, FaSearch } from 'react-icons/fa';
import Menu from '../../organisms/Menu';
import Profile from '../../molecules/Profile';

import image from '../../../image.png'

import { Container, Navbar, Chats, Messages, NavButton, Feet, Badge, ChatButton, Search } from './styles';
import Footer from '../../molecules/Footer';

const Chat = () => (
  <Container>
    <Navbar>
      <Profile />
      <Menu />
      <div>
        <NavButton>
          <div>
            <FaRegSun />
            <span>Settings</span>
          </div>
        </NavButton>
        <NavButton>
          <div>
            <span>Dark Mode</span>
          </div>
          <FaToggleOff />
        </NavButton>
      </div>
      <Footer />
    </Navbar>
    <Chats>
      <Search>
        <div>
          <label htmlFor="">
            <FaSearch />
          </label>
          <input type="text" placeholder="Search"/>
        </div>
      </Search>
      <ChatButton>
        <div>
          <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" alt=""/>
          <div>
            <h3>Aston Martin</h3>
            <p>I am fine too</p>
          </div>
        </div>
        <Badge>
          <span>2</span>
        </Badge>
      </ChatButton>
      <ChatButton active>
        <div>
          <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" alt=""/>
          <div>
            <h3>Aston Martin <span/></h3>
            <p>I am fine too</p>
          </div>
        </div>
      </ChatButton>
    </Chats>
    <Messages>
      <img src={image} alt="" style={{ width: '100%' }}/>
      <h1>Messages</h1>
    </Messages>
  </Container>
);

export default Chat;