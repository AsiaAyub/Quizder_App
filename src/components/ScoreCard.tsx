type scoreCardProps = {
  score: number;
};

const ScoreCard = ({ score }: scoreCardProps) => {
  return (
    <div className="text-white w-1/3 h-fit mx-20 my-28 p-4 space-y-10 bg-black bg-opacity-35">
      <h1 className="font-extrabold text-4xl text-center">Quize Results</h1>
      <img
        src="/assets/images/checkIcon.png"
        className="w-20 h-20 m-auto my-5"
      />

      <h3 className="font-extrabold text-xl bg-black  w-fit p-4 m-auto text-center">
        Your Score <br /> <br /> {score}% <hr /> 100%
      </h3>
    </div>
  );
};

export default ScoreCard;
