import React from 'react'
// import './App.css';
import FormExercise1 from './components/FormExercise1';
import Forms from './components/Forms';
import boxes from './utils/boxes'
import Box from './components/Box'
import BoxDerivedState from './components/Box_derivedState';
import ConditionalRendering1 from './components/ConditionalRendering1';
import jokesData from './utils/jokesData';
import Joke from './components/Joke';
import Stopwatch from './components/Stopwatch';

function App() {
  const [squares, setSquares] = React.useState(boxes)
    
  function toggle(id) {
      setSquares(prevArray => {
         return prevArray.map(item => {
             if(item.id === id) {
                 return {
                     ...item,
                     on: !item.on
                 }
             } 
             return item
          })
      })
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
      />
  ))

  const squareElementsDervivedState = squares.map(square => (
      <BoxDerivedState
          key={square.id} 
          id={square.id}
          on={square.on} 
      />
  ))

  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})

  return (
    <div className="App">
      <h1>React foundations</h1>
      <h2>Forms</h2>
      <Forms />
      <h2>Forms Exercise 1</h2>
      <FormExercise1 />
      <h2>Boxes - single point of truth</h2>
      <p>An example to show how state can be passed fron the parent to child components.  It is better for the parent to hold the state that controls the children rather than deriving new state in each child from the parent state being passed as props.  This relies on handler function being passed from the parent to the children to act on the state in the parent.  Seting the state in the parent triggers a render flowing through to the children...</p>
      <p>The boxes in this example could be items in a todo list the on state represents whether the item is completed or not.</p>
      {squareElements}
      <h2>Boxes - derived state</h2>
      <p>I noticed that the derived state boxes aren't updated with changes to the parent state (when clicking the boxes on the single point of truth).  My first guess was that they would update since that state is passed to the derived state box component as props and that would initialise a rerender..  but is doesn't appear to be the case.  Perhaps because the derived state box has its own state so wont be affected by parent state changes</p>
      {squareElementsDervivedState}
      <h2>Conditional Rendering Ex1</h2>
      <ConditionalRendering1 />
      <h2>Conditional Rendering Ex2</h2>
      {jokeElements}
      <h2>Stop Watch</h2>
      <p>When information needs to be persisted between rerenders of a component but changing it doesn't require a rerender (in other words, the information is not used directly in the UI) then capture that information in the useRef() hook.  Here the setInterval ID is captured in a useRef() and is used when necessary to cancel the current setInterval</p>
      <Stopwatch/>
    </div>
  );
}

export default App;

