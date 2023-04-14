import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Circle = styled.div`

`

const Image = styled.img`
    height: 75%;
`

const Info = styled.div`

`

const Icon = styled.div`

`

const Product = ({item}) => {
    console.log(item.image)
  return (
    <Container>
        <Circle />
        <Image src={item.image}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product