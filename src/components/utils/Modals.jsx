import React from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'
import ModalCart from '../ModalCart'
import { obj } from '../GridMovies'

const Modals = (props) => {

  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  
  return (
    <div>
        <button onClick={openModal1}>More info</button>
        <Modal isOpen= {isOpenModal1} closeModal={closeModal1}>
            <ModalCart {...props}/>
        </Modal> 
    </div>
  )
}

export default Modals