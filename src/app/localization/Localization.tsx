const Localization = () => {
  return (
    <div className="mx-auto w-full max-w-7xl mt-28">
      <div className="flex justify-between">
        <h1 className="text-xl uppercase ">Localization</h1>

        <div>
          <label htmlFor="language-selector"> Change language </label>
          <select
            id="laguage-selector"
            className="text-black ml-4"
            defaultValue="en"
          >
            <option value="en"> English</option>
            <option value="sp"> Spanish</option>
            <option className="ch"> Chinese</option>
            <option className="jp"> Japanese</option>
          </select>
        </div>
      </div>

      <p className="mt-10">This is my name in english - Ninza</p>
    </div>
  );
};

export default Localization;
