import { useState } from "react";

const Login_Page = () => {
  const [name, setName] = useState("");
  const [arr, setArr] = useState([]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="button"
        value="add"
        onClick={() => {
          setArr([...arr, { name }]);
        }}
      />

      <div>list</div>
      <div>
        {arr.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Login_Page;
