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
    <Container>

      <Box sx="text-center mb-6 ">
        <p>Hello, I'm an independent app developer living in Brazil!</p>
      </Box>

      <header className="sm:flex sm:items-center sm:justify-between">
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
          description="Started the internship at Bank of Amazon."
        />
      </section>

      <section>
        <Title variant="underline">I <span className="text-red-600">♥</span></Title>
        <p>Art, Music, Cars, Play games, Programming</p>
      </section>

      <section>
        <Title variant="underline">On the web</Title>
        <Social>
          <RxTwitterLogo /> Follow on Twitter
        </Social>

        <Social>
            <RxInstagramLogo /> Follow on Instagram
        </Social>

        <Social>
          <RxGithubLogo />
          <a href="#">Follow on GitHub</a>
        </Social>

        <Social>
          <RxLinkedinLogo />
          <a href="#">Follow on Linkeding</a>
        </Social>
      </section>

    </Container>
  )
}
