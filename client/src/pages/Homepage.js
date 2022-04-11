import Container from "../components/StyledElements/Container";

const HomePage = ({ code }) => {
  return (
    <Container>
      <h2>Homepage</h2>
      <h3>Welcome to Delay</h3>
      <p>
        Discover amazing new music and directly support the artists who make it.
      </p>
      <h2>{code}</h2>
    </Container>
  );
};

export default HomePage;
