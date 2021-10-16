import { useLocation } from 'react-router-dom';
import './style.scss'

export default () => {
  let location = useLocation();
  return (
    <div>
      <span className='not_found'>
        Location <span>{location.pathname}</span> does not exist!
      </span>
    </div>
  );
};
