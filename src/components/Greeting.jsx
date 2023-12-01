import React from 'react'
import greeting from '../components/css/Greeting.module.css'

export default function Greeting()
{
    let curDate=new Date();
    let curTime=curDate.getHours();
    let greeting='';
    let cssStyles={}
    let backgroundCss={}
    if(curTime>=1 && curTime<12)
    {
        greeting="Good Morning!";
        cssStyles.color="green"
        backgroundCss.backgroundImage=`url("https://cdn.pixabay.com/photo/2015/10/29/18/02/mountains-1012686_1280.jpg")`
        backgroundCss.height="550px"
    }else if(curTime>=12 && curTime<19)
    {
        greeting="Good Afternoon!"
        cssStyles.color="orange"
        backgroundCss.backgroundImage=`url("https://cdn.pixabay.com/photo/2018/03/31/19/09/tree-3278985_1280.jpg")`
        backgroundCss.height="550px"
    }else
    {
        greeting="Good Night!"
        cssStyles.color="black"
        backgroundCss.backgroundImage=`url("https://cdn.pixabay.com/photo/2018/01/29/12/02/night-3115977_1280.jpg")`
        backgroundCss.height="550px"
    }

    return (
        <div style={backgroundCss}>
        <h1>Hi Anand, <span style={cssStyles}> {greeting}</span></h1>
        </div>
    )
}