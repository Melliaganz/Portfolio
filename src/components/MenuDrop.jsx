import React from 'react'
import { Dropdown } from 'react-bootstrap'
function MenuDrop() {
  return (
    <Dropdown className='menuDrop'>
            <Dropdown.Toggle className='border-light bg-light text-dark'>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#resume'>Résumé</Dropdown.Item>
              <Dropdown.Item href='#formations'> Formations</Dropdown.Item>
              <Dropdown.Item href='#portfolio'>PortFolio</Dropdown.Item>
              <Dropdown.Item href='#contact'>Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
  )
}

export default MenuDrop