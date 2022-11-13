import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Card, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className='d-flex flex-column'>
          <FormControl className='mt-3'
            placeholder='Введите ваш email...' />
          <FormControl className='mt-3'
            placeholder='Введите ваш пароль...' />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <Col>
              {isLogin ?
                <Row>
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </Row>
                : <Row>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </Row>}
            </Col>
            <Col>
              <Button variant={"outline-success"} className="mt-3 align-self-end">{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth