import { NavLink } from 'react-router-dom';
import Icons from '../../../Icons';
import S from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={S.navigation_container}>
      <nav className={S.navigation_nav_link}>
        <NavLink to="/fin-project-front/home" className={S.navigation_link}>
          <Icons name="home" className={S.navigation_home_icon} />
          <p className={S.navigation_page_home}>Главная</p>
        </NavLink>

        <NavLink to="/fin-project-front/statistics" className={S.navigation_link}>
          <Icons name="statistic" className={S.navigation_stat_icon} />
          <p className={S.navigation_page_stat}>Статистика</p>
        </NavLink>

        <NavLink to="/fin-project-front/currency" className={S.navigation_link}>
          <Icons name="dollar" className={S.navigation_dollar_icon} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
