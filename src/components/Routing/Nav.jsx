import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from '../css/NavStyle.module.css'

export default function Nav() {
  return (
    <nav className={navStyle.nav}>
        <Link className={navStyle.link} to="/">Home</Link>
        <Link className={navStyle.link} to="/FakeStoreApi">Products</Link>
        <Link className={navStyle.link} to="/MovieApi">Movie</Link>
        <Link className={navStyle.link} to="/Image">Photos</Link>
        {/* <Link className={navStyle.link} to="/Image">Image</Link> */}
    </nav>
  )
}
