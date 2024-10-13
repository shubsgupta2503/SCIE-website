import React from 'react'

export default function Divider({marginTop,marginBottom}) {
  return (
    <div className="mx-auto flex justify-center my-8 mb-16 sm:my-12" style={{marginTop:marginTop&&"",marginBottom:marginBottom&&""}}>
        <hr className="w-11/12 h-1 bg-black/5" />
    </div>
  )
}

