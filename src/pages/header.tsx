import React from 'react'
import seek_width_bg from '../imgs/seek_width_bg.png'
import transparency_02 from '../imgs/transparency_02.png'

export default () => {
  return (
    <>
      <div className="head-control" id="heade-control">
        <div className="control control-width">
          <img src={seek_width_bg} alt=""/>
          <div className="head-circle circle-width"></div>
        </div>
        <div className="control control-alpha">
          <img src={transparency_02} alt=""/>
          <div className="head-circle circle-alpha"></div>
        </div>
      </div>
    </>
  )
}