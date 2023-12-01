import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import imgStyle from "../css/Image.module.css"

function Image() {
  return (
    <section className={imgStyle.imageSection}>
        <div className={imgStyle.nestedImg}>
            <Link className={imgStyle.limg} to="img1"><img src="https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_1280.jpg" alt="" /></Link>
            <Link className={imgStyle.limg} to="img2"><img src="https://cdn.pixabay.com/photo/2023/08/27/14/34/buildings-8217275_1280.jpg" alt="" /></Link>
            <Link className={imgStyle.limg} to="img3"><img src="https://cdn.pixabay.com/photo/2023/06/27/10/51/pier-8091934_1280.jpg" alt="" /></Link>
            <Link className={imgStyle.limg} to="img4"><img src="https://cdn.pixabay.com/photo/2023/11/16/22/06/fritillary-butterfly-8393205_1280.jpg" alt="" /></Link>
        </div>
        <div className={imgStyle.singleImg}>
            <Outlet/>
        </div>
    </section>
  )
}

export default Image