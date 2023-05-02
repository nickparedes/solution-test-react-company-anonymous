import React from 'react'
import "./Modal.css"
const Modal = ({children, isOpen, closeModal}) => {


  return (
    <article className={`modal  ${isOpen && "is-open"}`} onClick={closeModal}>
            {children}
    </article>
  )
}



export default Modal