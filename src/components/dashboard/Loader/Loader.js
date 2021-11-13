import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const loader = () => {
  return <Loader type="Puff" color="#734ae2" height={50} width={50} />;
};

export default loader;
