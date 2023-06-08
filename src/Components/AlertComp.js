import React from 'react'

export default function AlertComp(props) {
  const capitalise = (word) =>{
    let lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1)


  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
  {/* <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close" style={{float:'right'}}>
    <span aria-hidden="true">&times;</span>
  </button> */}
</div>
  )
}
