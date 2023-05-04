import React, { ReactElement, ReactNode } from 'react';

import './App.css';

//conventional props

function Heading({title}: {title: string;}) {
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement {
  return (
    <h1>{children}</h1>
  )
}

//Default Props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
function Container({heading, children}: {children: ReactNode} & typeof defaultContainerProps): ReactElement {
  return (
    <div>
      <h1>{children}</h1>
      <h1>{heading}</h1>
    </div>
    
  )
}
Container.defaultProps = defaultContainerProps;


function App() {
  return (
    <div className="App">
     <Heading title={"Hello There"} />
     <HeadingWithContent><strong>Hey</strong></HeadingWithContent>
     <Container>Foo</Container>
    </div>
  );
}

export default App;
