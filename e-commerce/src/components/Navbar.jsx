import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
    height: 60px;
    // background-color: black;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cusor: pointer;
    margin-left: 25px;
`

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color: "grey", fontSize: 16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHIVAM.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartCheckoutOutlined />
                    </Badge>
                </MenuItem>
            </Right> 
        </Wrapper> 
    </Container>
  )
}
