import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from '../css/NavStyle.module.css'

export default function Nav() {
  return (
    <nav className={navStyle.nav}>
        <Link className={navStyle.link} to='/'>Home</Link>
        <Link className={navStyle.link} to="/Home">Accordion</Link>
        <Link className={navStyle.link} to="/FakeStoreApi">Products</Link>
        <Link className={navStyle.link} to="/MovieApi">Movie</Link>
        <Link className={navStyle.link} to="/Image">Photos</Link>
        <Link className={navStyle.link} to="/ImageSlider">Image Slider</Link>
        <Link className={navStyle.link} to="/CustomFormValidation">Form Validation</Link>
        <Link className={navStyle.link} to="/TodoApp">Todo App</Link>
    </nav>
  )
}
