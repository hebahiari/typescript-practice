import React, { ReactElement, ReactNode } from 'react';

import './App.css';
import { stat } from 'fs';

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


//functional props
function TextWithNumber({
  header,
  children
}: {
  header: (num: number) => ReactNode
  children: (num: number) => ReactNode

}) {
  const [state, stateSet] = React.useState<number>(1)

  return (
    <div>
      <h2>{header(state)}</h2>
      <div>{children(state)}</div><div>
        <button onClick={()=> stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <Heading title={"Hello There"} />
     <HeadingWithContent><strong>Hey</strong></HeadingWithContent>
     <Container>Foo</Container>
     <TextWithNumber header={(num: number) => <span>Header is </span>}>{(num: number) => <div>Todays number is {num}</div>}</TextWithNumber>
    </div>
  );
}

export default App;
