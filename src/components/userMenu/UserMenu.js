import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
// import { AiOutlineLogout } from "react-icons/ai";

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
  <div className={styles.userMenu}>
    <span className={styles.email}>{email}</span>
    
    <button type="button" className={styles.logOutButton} onClick={() => dispatch(authOperations.logOut())}> 
      
      {/* <div className={styles.icon}><AiOutlineLogout /></div>  */}
      <p className={styles.link}>Log out</p> 
    </button>
  </div>
)};

export default UserMenu;