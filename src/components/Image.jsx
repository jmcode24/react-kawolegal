import React from 'react';

function Image(props) {
  return (
    <>
      <img src={props.logo} alt="pic" className="img-fluid" />
    </>
  );
};

export default Image;