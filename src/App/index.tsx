import {
  Container,
  Content,
  Footer,
  Form,
  Green,
  H1,
  Icons,
  Image,
  Input,
  Section,
  Textarea,
  Yellow,
} from "./styles";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const App = () => {
  return (
    <Container>
      <Section>
        <Content>
          <img src="yellowball.svg" alt="yellowball" />
          <Form>
            <H1>Reach out to us!</H1>
            <Input type="text" placeholder="Your name *" />
            <Input type="email" placeholder="Your email *" />
            <Textarea
              placeholder="Your message *"
              rows={10}
              draggable={false}
            />
          </Form>
        </Content>
        <Image src="globe.svg" alt="globe" draggable={false} />
      </Section>
      <Footer>
        <div>
          <img src="pinkball.svg" alt="pinkball" />
          <Icons>
            <FaLinkedinIn />
            <FaTwitter />
            <FaFacebookF />
            <FaPinterestP />
          </Icons>
          <Green src="greenball.svg" alt="greenball" />
          <Yellow src="yellowball.svg" alt="yellowball" />
        </div>
      </Footer>
    </Container>
  );
};

export default App;
