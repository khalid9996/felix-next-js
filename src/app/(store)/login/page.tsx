"use client";

import axios from "axios";

const StoreLogin = () => {
  async function testApiCall() {
    let res = await axios.get("/api/hello");

    console.log(res.data);
  }

  return (
    <div>
      StoreLogin
      <div>
        <button onClick={testApiCall}>api call log</button>
      </div>
    </div>
  );
};

export default StoreLogin;
