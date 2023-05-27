import React from 'react'
import styled from 'styled-components'
import * as layout from "../styles/layouts"
import * as style from "../styles/styles"
import * as sVar from "../styles/styleVariables"
import { ReactComponent as Logo } from "../icons/logo.svg"
import NameFloatInput from '../components/NameFloatInput'
import LoginHeader from '../components/LoginHeader'

function Login() {
  return (
    <layout.FlexColumnCenter>
        <layout.FlexCenter100 style={{paddingTop: "32px"}}>
            <Logo />
        </layout.FlexCenter100>
        <layout.FlexColumnCenter100 style={{padding: "80px"}}>
            <LoginHeader style={{color: `${sVar.black80}`}}>Welcome back</LoginHeader>
            <style.UserForm>
                <NameFloatInput type="email"/>
                <NameFloatInput type="password" />
                <button>Continue</button>
            </style.UserForm>
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </layout.FlexColumnCenter100>
    </layout.FlexColumnCenter>
  )
}

export default Login