import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/questions");
  };

  return (
    <>
      <div className=" w-screen flex justify-start bg-blend-luminosity h-screen bg-cover bg-[url('/assets/images/welcomeImg.jpg')]">
        <div className="text-white bg-black bg-opacity-25 my-48 w-1/2 h-1/2 p-10">
          <h1 className=" font-extrabold text-4xl">
            Welcome To <span className="text-cyan-400">Quizder</span>
          </h1>
          <hr className="border-cyan-400 border-2" />
          <p className="pt-6">
            This is Quizder quize. You will get 5 random general knowledge
            questions on each ATTEMPT. Once you finish, your results will be
            displayed on next page. Click get started to proceed. All the best.
          </p>
          <div className="flex justify-end">
            <button
              className="bg-cyan-400 w-32 h-10 rounded-full my-9 "
              onClick={nextPage}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
