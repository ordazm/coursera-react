function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn == true) {
      return console.log("DM is on");
    } else {
      return console.log("LM is on");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ModeToggler;
