import React from 'react'
import Home from './Home/Home'
import Services from './Services/Services';
import Exp from './Experience/Exp'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer'
const Comp = () => {
  return (
    <>
        <section><Home/></section>
        <section><Services/></section>
        <section><Exp/></section>
        <section><Portfolio/></section>
        <section><Contact/></section>
        <section><Footer/></section>
    </>
  )
}
export default Comp;
