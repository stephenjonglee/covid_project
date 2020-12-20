import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">SAJ COVID19 Tracking Project</Link>
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map/">Maps</Link>
          </li>
          <li>
            <Link to="/table/">Tables</Link>
          </li>
          <li>
            <Link to="/bar/">Bar Graphs</Link>
          </li>
          <li>
            <Link to="/line/">Line Graphs</Link>
          </li>
          <li>
            <Link to="/ref/">References</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
