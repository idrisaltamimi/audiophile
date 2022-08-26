import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
   return (
      <div>
         <h1 style={{ color: "black" }}>Page not Found</h1>
         <Link>Home</Link>
      </div>
   )
}
