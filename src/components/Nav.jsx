export const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="navdetail">
          <p>Home</p>

          <p>About</p>

          <p>Contact Us</p>
        </div>
        <div id="Mode">
          <button
            id="dark"
            onClick={() => {
              const light = document.querySelector("#light");
              const dark = document.querySelector("#dark");
              const body = document.querySelector("#body");
              light.style.display = "block";
              body.style.backgroundColor = "gray";
              body.style.color = "white";
              dark.style.display = "none";
            }}
          >
            Dark
          </button>
          <button
            id="light"
            onClick={() => {
              const light = document.querySelector("#light");
              const dark = document.querySelector("#dark");
              document.body.style.backgroundColor = "#e0ebeb";
              document.body.style.color = "black";
              light.style.display = "none";
              dark.style.display = "block";
            }}
          >
            Light
          </button>
        </div>
      </div>
    </>
  );
};
