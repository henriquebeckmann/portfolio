import { Box } from "@/components/Box"
import { Container } from "@/components/Container"

export default function Home() {
  return (
    <Container>
      <Box sx="text-center mb-6 ">
        <p>Hello, I'm an independent app developer living in Brazil!</p>
      </Box>
      <header>
        <h2 className="text-3xl font-bold">
          Henrique Beckmann
        </h2>
        <p>Computer engineer</p>
      </header>
    </Container>
  )
}
