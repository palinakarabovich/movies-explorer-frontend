import './ServerInfo.css'

import React from 'react';
import Loader from '../Loader/Loader';

function ServerInfo({ setServerInfoVisible, isServerInfoVisible, serverMessage, serverResponse, setServerResponce, setServerMessage, isServerLoadingData }) {

  React.useEffect(() => {
    let timeout;
    if (isServerInfoVisible && isServerLoadingData === false) {
      timeout = setTimeout(closeServerInfo, 5000);
    }

    return () => clearTimeout(timeout);
  }, [serverResponse]);

  const closeServerInfo = () => {
    setServerInfoVisible(false);
    setServerResponce('');
    setServerMessage('');
  }
  const onClickCloseButton = () => {
    closeServerInfo();
  }

  return (
    <div className={`server-info ${isServerInfoVisible && 'server-info_active'}`}>
      <section className='server-info__block'>
        {isServerLoadingData
          ? <Loader />
          : (<>
            <button className='server-info__block-button server-info__block-button_type_close' type='button' onClick={onClickCloseButton} />
            <h2 className='server-info__block-title'>{serverResponse}</h2>
            <p className='server-info__block-message'>{serverMessage}</p>
          </>
          )
        }
      </section>

    </div>
  )
}

export default ServerInfo;