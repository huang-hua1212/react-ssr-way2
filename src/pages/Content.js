import React from 'react';

const Content = () => {
  function clickMe() {
    console.log('success!!!!');
  }

  return ( <
    div >
    <
    span > Hello!I 'm content of this page!</span> <
    button onClick = {
      clickMe
    } > {
      ' '
    }
    ClickMe {
      ' '
    } <
    /button> < /
    div >
  )

};

export default Content;