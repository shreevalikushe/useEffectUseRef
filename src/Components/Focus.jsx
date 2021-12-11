const { useRef, useState } = require("react");

function Focus() {
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const handleClick = () => {
    setEdit(!edit);
    if (edit) {
      inputRef.current.focus();
      console.log(edit);
    }
  };
  return (
    <>
      <h1>Focus Example</h1>
      <div>
        <label>Click on the button to change focus of input box</label>
        <div>
          <input ref={inputRef} />
        </div>
      </div>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
export default Focus;
