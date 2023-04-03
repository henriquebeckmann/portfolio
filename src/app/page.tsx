import { HiChevronRight } from "react-icons/hi";

import {
  Box,
  Container,
  Title,
  Button,
  Avatar,
  Center
} from "@/components"

export default function Home() {
  return (
    <Container>

      <Box sx="text-center mb-6 ">
        <p>Hello, I'm an independent app developer living in Brazil!</p>
      </Box>

      <header>
        <div>
          <Title variant="big">Henrique Beckmann</Title>
          <p>Computer engineer</p>
        </div>
        <Center sx="mt-4">
          <Avatar src="./me.png" />
        </Center>
      </header>

      <section>
        <div>
          <Title variant="underline">Work</Title>
          <p className="text-justify indent-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Enim dicta ea iusto, eos nam magni similique aperiam
            porro animi, temporibus, voluptatum repudiandae eligendi
            non neque modi nostrum reiciendis quam voluptatem!
          </p>
        </div>

        <Center sx="mt-4">
          <Button>My Portfolio <HiChevronRight /></Button>
        </Center>
      </section>

    </Container>
  )
}
