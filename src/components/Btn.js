// function Btn() {
//   function clickHandler() {
//     return console.log("clicked");
//   }

//   return <button onClick={clickHandler}>Click me</button>;
// }
// export default Btn;

// /* const clickHandler = () =>
//   console.log("clicked");
// */

function Btn() {
  function clickHandler() {
    return console.log("mouse over");
  }

  return <button onMouseOver={clickHandler}>Mouse Over</button>;
}
export default Btn;
