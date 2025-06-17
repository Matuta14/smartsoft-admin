import { Link, useNavigate } from 'react-router-dom';
import { HeaderStyled } from './header.styled';
import Button from '../../shared-components/button/button';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutClick = () => {
    logout();
    navigate('/login');
  };
  return (
    <HeaderStyled>
      {' '}
      <div className="left">
        <Link to={'/captions'}>Captions</Link>
        <Link to="/countries">Countries</Link>
      </div>
      <div className="right">
        <span className="user">{user}</span>
        <Button text="Logout" onClick={logoutClick} />
      </div>
    </HeaderStyled>
  );
};
