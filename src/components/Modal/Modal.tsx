import React from 'react'
import styles from './Modal.module.css'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  openModal: (status: boolean) => void
}

const Modal = ({ children, isOpen, openModal }: Props) => {
  return (
    <div id='modal' className={!isOpen && styles.hide}>
      <div className={styles.fade} onClick={() => openModal(false)}>

      </div>
      <div className={styles.modal}>
        <h2> Edição de Tarefa </h2>
        {children}
      </div>
    </div>
  )
}

export default Modal