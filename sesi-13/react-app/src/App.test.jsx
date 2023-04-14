/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { prettyDOM } from "@testing-library/react";
import Users from "./pages/Users";

describe('Home Page Test', () => {
  it('success to render home page', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    
    const homeEl = screen.getByText('Home')
    expect(homeEl).toBeInTheDocument()
  })
  
  it('success redirect to users page', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    
    const usersListEl = screen.getByText('Users List')
    fireEvent.click(usersListEl)
    const usersListPageEl = screen.getByText('Users')
    
    expect(window.location.pathname).toBe('/users')
    expect(usersListPageEl.innerHTML).toBe('Users')
  })
  
  it('should redirect to homepage', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
    redirect('/users')
    const backToHomeEl = screen.getByText('Back To Home')
    fireEvent.click(backToHomeEl)
    const usersListEl = screen.getByText('Users List')
    
    expect(window.location.pathname).toBe('/')
    expect(usersListEl.innerHTML).toBe('Users List')
    
  })
  
  it('should render list of user from json place holder', async () => {
    render(
      <BrowserRouter>
        <Users/>
      </BrowserRouter>
    )
    // eslint-disable-next-line testing-library/prefer-find-by
    const nameEl = await waitFor(() => screen.getByRole('user-1'))
    
    expect(nameEl.children[1].innerHTML).toBe('Leanne Graham')
  })
})