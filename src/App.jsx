import image from "./assets/image.jpg";
function App() {
  return (
    <section
      className="min-h-screen 
    flex items-center 
    justify-center 
    font-sans 
    bg-gradient-to-r from-gray-800  from-10% via-purple-800 via-50% to-gray-800 to-100%"
    >
      <div className="flex shadow-2x1">
        <div
          className="
        flex flex-col 
        items-center 
        justify-center
        p-20 gap-8 bg-gray-900 text-white rounded-2xl
        xl:rounded-tr-none xl:rounded-br-none"
        >
          <h1 className="text-5xl font-bold">Welcome</h1>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Username</span>
            <input
              type="text"
              className="rounded-md p-1 border-2 outline-none
              focus:border-cyan-400 focus:bg-slate-50"
            />
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input
              type="password"
              className="rounded-md p-1 border-2 outline-none
              focus:border-cyan-400 focus:bg-slate-50"
            />
            <div className="flex gap-1 items-center">
              <input type="checkbox" />
              <span className="text-base">Remember me</span>
            </div>
          </div>
          <button
            className="px-10 py-2 text-2xl rounded-md 
          bg-gradient-to-tr from-gray-700 to-blue-500
          hover:from-gray-700 hover:to-purple-500
          text-white "
          >
            Login
          </button>
          <p className="font-semibold">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
        <img
          src={image}
          alt=""
          className="w-[450px] object-cover xl:rounded-tr-2xl
          xl:rounded-br-2xl
          xl:block hidden "
        />
      </div>
    </section>
  );
}

export default App;
