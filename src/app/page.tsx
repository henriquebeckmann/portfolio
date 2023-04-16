import { HiChevronRight } from "react-icons/hi";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
  RxInstagramLogo
} from "react-icons/rx";

import {
  Box,
  Container,
  Title,
  Button,
  Avatar,
  Center,
  Bio,
  Social
} from "@/components"

export default function Home() {
  return (
    <Container sx="mt-16 max-w-xl">

      <Box sx="text-center my-6 ">
        <p>Hello, I&apos;m an independent app developer living in Brazil!</p>
      </Box>

      <header className="sm:flex sm:items-center sm:justify-between">
        <div>
          <Title level={1}>Henrique Beckmann</Title>
          <p>Computer engineering student</p>
        </div>
        <Center sx="mt-4">
          <Avatar src="/me.png" />
        </Center>
      </header>

      <section>
        <div>
          <Title variant="underline">Work</Title>
          <p className="text-justify indent-4">
            As a computer engineering student, I have been dedicated to programming for 6
            years. I possess knowledge in low-level languages, such as C and Rust, up to
            high-level languages, such as Python and JavaScript. I have extensive
            knowledge in Linux operating systems, using it daily. In recent years, I have
            focused on studying web development, with the goal of creating interactive and
            dynamic interfaces for users, using React. Currently, I am interning at the
            Banco da Amazônia (BASA), where I am responsible for generating reports and
            dashboards with large volumes of data. I have the ability to work
            independently or in a team, always committed to delivering innovative
            solutions to customers. I have a great desire to acquire new knowledge and
            experiences, as well as a facility to assimilate and work with diverse
            information.
          </p>
        </div>

        <Center sx="mt-4">
          <Button>My Portfolio <HiChevronRight /></Button>
        </Center>
      </section>

      <section>
        <Title variant="underline">Bio</Title>
        <Bio
          date="1993"
          description="Born in Santo Ângelo, Brazil."
        />

        <Bio
          date="2017"
          description="Started graduation in computer engineering."
        />

        <Bio
          date="2023"
          description="Started the internship at Banco da Amazônia (BASA)."
        />
      </section>

      <section>
        <Title variant="underline">I <span className="text-red-600">♥</span></Title>
        <p>Art, Music, Cars, Play games, Programming</p>
      </section>

      <section>
        <Title variant="underline">On the web</Title>
        <Social href="https://twitter.com/hiquebeckmann">
          <RxTwitterLogo /> Follow on Twitter
        </Social>

        <Social href="https://instagram.com/hiquebeckmann">
          <RxInstagramLogo /> Follow on Instagram
        </Social>

        <Social href="https://github.com/henriquebeckmann">
          <RxGithubLogo /> Follow on GitHub
        </Social>

        <Social href="https://linkedin.com/in/henrique-beckmann-0a21b3235">
          <RxLinkedinLogo /> Follow on LinkedIn
        </Social>
      </section>

    </Container>
  )
}
