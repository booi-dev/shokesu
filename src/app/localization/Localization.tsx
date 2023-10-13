"use client";

import { useState } from "react";

const Localization = () => {
  const [count, setCount] = useState(0);

  const handleLanguageSelector = () => {
    console.log("changing");
  };

  return (
    <div className="mx-auto w-full max-w-7xl mt-28 text-3xl">
      <div className="flex justify-between">
        <h1 className="text-4xl uppercase ">Localization</h1>

        <div>
          <label htmlFor="language-selector"> Change language </label>
          <select
            name="laguage-selector"
            className="text-black ml-4"
            defaultValue="en"
            onChange={handleLanguageSelector}
          >
            <option value="en"> English</option>
            <option value="sp"> Spanish</option>
            <option className="ch"> Chinese</option>
            <option className="jp"> Japanese</option>
          </select>
        </div>
      </div>

      <div className="underline underline-offset-2 ">{`Language change ${count} times`}</div>

      <p className="mt-10 text-2xl">This is my name in english - Ninza</p>
    </div>
  );
};

export default Localization;
