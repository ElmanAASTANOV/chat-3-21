import ReactLoading from 'react-loading'
import './Loading.scss'

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type='spin' color="blue" />
    </div>
  );
}

export default Loading;