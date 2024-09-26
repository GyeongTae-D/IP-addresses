import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function IPDisplay({ version }) {
  const [ip, setIp] = useState('Loading...');

  useEffect(() => {
    const fetchIp = async () => {
      const url = version === 'IPv4' 
        ? 'https://api.ipify.org?format=json' 
        : 'https://api64.ipify.org?format=json';

      try {
        const response = await fetch(url);
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        setIp('Error fetching IP');
      }
    };

    fetchIp();
  }, [version]);

  return (
    <div>
      <h3>{version} Address:</h3>
      <p>{ip}</p>
    </div>
  );
}

IPDisplay.propTypes = {
  version: PropTypes.oneOf(['IPv4', 'IPv6']).isRequired,
};

export default IPDisplay;