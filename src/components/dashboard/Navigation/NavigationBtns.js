import { NavLink } from 'react-router-dom';
import Icons from '../../../Icons';
import useSizeScreen from '../../../hooks/useSizeScreen';

import S from './Navigation.module.scss';

const Navigation = () => {
  const sizeScreen = useSizeScreen();
  return (
    <nav className={S.navigation_navigation}>
      <NavLink
        exact
        to="/"
        className={S.navigation_navLink}
        activeClassName={S.navigation_navLinkActive}
      >
        <button className={S.navigation_button}>
          {sizeScreen <= 767 ? (
            <Icons name="home" className={S.navigation_svgNav} />
          ) : (
            <div className={S.navigation_boxNav}>
              <Icons name="home" className={S.navigation_svgNav} />
              <span className={S.navigation_textNav}>Главная</span>
            </div>
          )}
        </button>
      </NavLink>
      <NavLink
        exact
        to="/"
        className={S.navigation_navLink}
        activeClassName={S.navigation_navLinkActive}
      >
        <button className={S.navigation_button}>
          {sizeScreen <= 767 ? (
            <Icons name="statistic" className={S.navigation_svgNav} />
          ) : (
            <div className={S.navigation_boxNav}>
              <Icons name="statistic" className={S.navigation_svgNav} />
              <span className={S.navigation_textNav}>Статистика</span>
            </div>
          )}
        </button>
      </NavLink>
      {sizeScreen <= 767 && (
        <NavLink
          exact
          to="/"
          className={S.navigation_navLink}
          activeClassName={S.navigation_navLinkActive}
        >
          <button className={S.navigation_button}>
            <Icons name="dollar" className={S.navigation_svgNav} />
          </button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
