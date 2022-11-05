import React from 'react'
import { Dropdown } from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';
function MenuDrop() {
  return (
    <Dropdown className='menuDrop'>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
            <MenuIcon />
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