import Riddles from "../riddles.json";

type questionCardProps = {
  qsNumber: number;
  givenAnswer: string;
};

const QuestionCard = ({ qsNumber, givenAnswer }: questionCardProps) => {
  //Answers of the qs and the correct amswer
  const answers = Riddles[qsNumber].answers;
  const correctAnswer = Riddles[qsNumber].correct;

  return (
    <div className="md:text-xl ml-8 mr-8 w-11/12 items-center">
      {/**paragraph to display the question */}
      <p className="text-white my-8 text-lg ">
        <span className="text-cyan-400">Question: </span>
        {Riddles[qsNumber].question}
      </p>

      {/**array map to loop through the answers array */}
      {answers.map((item: string) => (
        <div key={item}>
          <label
            className={`${
              item === correctAnswer
                ? "text-green-500 text-lg flex"
                : item === givenAnswer && item != correctAnswer
                ? "text-red-500 text-lg flex"
                : "text-white text-lg flex"
            }`}
          >
            <input
              type="radio"
              name="Radios"
              className="mr-2 accent-cyan-300"
              value={item}
              disabled
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
