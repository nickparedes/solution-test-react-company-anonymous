import React from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'
import ModalCart from '../ModalCart'

const Modals = () => {

  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  console.log(isOpenModal1)
  return (
    <div>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen= {isOpenModal1} closeModal={closeModal1}>
            <ModalCart/>
            
        </Modal> 
    </div>
  )
}

export default Modals