// Functional component
const Container = () => {
  return React.createElement('div', null, 'Hey Kalvians! Welcome to React Learning',
      React.createElement('div', null, 'Let\'s rock and roll')
  );
};

// Render the Container
const containerElement = document.getElementById('re');
ReactDOM.render(React.createElement(Container), containerElement);

class ReactContainer extends React.Component {
  // render method to render the React DOM
  render() {
      return React.createElement('div', null, 'Hey Kalvians',
          React.createElement('div', null, 'Let\'s rock and roll with classes')
      );
  }
}

const reactContainerElement = document.getElementById('con');
ReactDOM.render(React.createElement(ReactContainer), reactContainerElement);

// Render a simple string in a container
const stringContainerElement = document.getElementById('React-container');
ReactDOM.render(React.createElement('div', null, 'Hello welcome guys'), stringContainerElement);

// Uncomment the following JSX code if needed
// class ReactContainer extends React.Component {
//     // JSX tags
//     // JSX there should be one parent element
//     render() {
//         return (
//             <div>Hello! Welcome to Kalvium   
//                 <div> Lets rock and rolls-This is babel</div>
//             </div>
//         );
//     }
// }

// const content = document.getElementById('React-container');
// // Direclty pass the component to render
// ReactDOM.render(React.createElement(ReactContainer), content);
