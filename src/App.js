import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import { Container, Flex } from "./Components/Styles/Card.styles"
import GlobalStyles from "./Components/Styles/Global"
import { data } from "./Data"
function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Search />
      <Container>
        <Flex>
          {data.map((el, index) => {
            return <Card item={el} key={index} />
          })}
        </Flex>
      </Container>
    </>
  )
}

export default App
