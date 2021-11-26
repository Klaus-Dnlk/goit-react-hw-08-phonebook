import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Styles.module.css';

export default function LoaderIco() {
  return (
    <div className={s.loader}>
      <Loader
        type="TailSpin"
        color="#40ac76"
        height={50}
        width={50}
        timeout={2000}
      />
    </div>
  );
}
