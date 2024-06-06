import React from 'react';
import  {res}  from '../../assets';

  
const PDF = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <iframe src={res} width="60%" height="800"></iframe>
    </div>
  );
};

export default PDF;
