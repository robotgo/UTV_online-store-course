import React, { useContext } from 'react'
import { Context } from '..'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>

        <Nav.Link style={{ color: 'white' }} href={SHOP_ROUTE}>КупиДевайс</Nav.Link>

        <Nav className="ms-auto" style={{ color: 'white' }}>
          {user.isAuth ?
            <>
              <Button variant='outline-light'>Админ панель</Button>
              <Button variant='outline-light' className="ml-2">Войти</Button>
            </>
            : <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          }


        </Nav>
      </Container>
    </Navbar >
  )
})

export default NavBar