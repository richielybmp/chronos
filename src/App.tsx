import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Footer from './app/shared/components/footer/footer';
import Header from './app/shared/components/header/header';

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
