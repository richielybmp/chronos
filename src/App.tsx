import React from 'react';
import Header from './app/shared/components/header/header';
import Footer from './app/shared/components/footer/footer';
import { Container, Image } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Container text style={{ marginTop: '7em' }}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
