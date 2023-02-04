import { useState } from 'react'
import '../App.css'

export default function ContainSquare({ links, title }) {
  return (
    <div className="squareContainer">
      <div className="p-2 h-4/5	">
        <div style={{ fontWeight: 'bold' }}>{title}</div>
        <div
          style={{ color: '#858585' }}
          className="flex flex-col overflow-y-scroll h-full hideScroll gap-1"
        >
          {links && links != undefined
            ? links.map(function (link, index) {
                return (
                  <a key={index} href={link.link} target="_blank">
                    {link.title}
                  </a>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}
