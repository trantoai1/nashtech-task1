import validator from "validator";
import { isEmail } from "validator";
import Validate from "./Validate";
import React, { Component } from 'react'
import { Fade } from 'reactstrap';
export  const required = (value) => {
    if (!value) {
      return (
        <Validate 
        isShow={true}
        type='invalid'
        message='This field is required!'
        />
      );
    }
    return ('');
  };
export const email = value => {
        if (!isEmail(value)) {
        return (
            <Validate 
        isShow={true}
        type='invalid'
        message='This is not a valid email.'
        />
            
        );
        }
    };
  
export  const username = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <Validate 
        isShow={true}
        type='invalid'
        message='The username must be between 3 and 20 characters.'
        />
        
      );
    }
  };
  
export const password = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <Validate 
        isShow={true}
        type='invalid'
        message='The password must be between 6 and 40 characters.'
        />
        
      );
    }
};

export const isMatch = (value, props, components) => {
    const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
    const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;
  
    if (bothChanged && bothUsed && components.password[0].value !== components.confirm[0].value) {
      return <Validate 
      isShow={true}
      type='invalid'
      message="Re-type password not match!"
      />
    }
  };