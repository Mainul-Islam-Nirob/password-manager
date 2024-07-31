import React from 'react'

function CopyIcon({text}) {
  console.log("props", text)
  const copyText = (copiedText) => { 
    console.log(copiedText)
    navigator.clipboard.writeText(copiedText)
    alert("copied to clipboard" + copiedText)
   }
  return (
    <div onClick={() => {copyText(text)}} className='lordiconcopy size-7 cursor-pointer'>
        <lord-icon
        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
        src="https://cdn.lordicon.com/iykgtsbt.json"
        trigger="hover" >
        </lord-icon>
    </div>
  )
}

export default CopyIcon
