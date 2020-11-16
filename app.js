// Functional component
const Container = () =>{
    return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
const container = document.getElementById('react-container');
//ReactDOM.render("Hello! Welcome to React",container);
ReactDOM.render(React.createElement(Container),container);

// react js with reactContainer function

class ReactContainer extends React.Component{
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey ProGrads-with function`,
          React.createElement(`div`,null,`Let's rock and roll1-with function`)
          );
      }
    
  }
  const container1 = document.getElementById('react-container1');
  ReactDOM.render(React.createElement(ReactContainer),container1);

//react with babel container

class ReactContainer2 extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (<div>Hello! Welcome to ProGrads -with babel
              <div>Let's rock and roll-with bable </div>
              </div>)};
              }
  const container2 = document.getElementById('react-container2');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer2/>,container2); 