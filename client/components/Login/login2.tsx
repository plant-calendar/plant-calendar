import React, {useEffect} from 'react';
import {CLIENT_ID} from "../../../common/configs/google";

export const Login = props => {
    console.log('test');
    let x;

    const doSomething = async () => {
        console.log(await x.getAccessToken());
    };

  return (
      <button onClick={doSomething}>Click me</button>
  )
};