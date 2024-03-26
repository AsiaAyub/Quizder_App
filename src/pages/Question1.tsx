import QuestionWrapper from "../components/QuestionWrapper";
import Riddles from "../riddles.json";

type UserData = {
  answer1: string;
};

type question1Props = UserData & {
  qsNumber: number;
  updateAnswer: (answer: UserData) => void;
};

const Question1 = ({ qsNumber, answer1, updateAnswer }: question1Props) => {
  const answers = Riddles[qsNumber].answers;
  return (
    <div className="md:text-xl ml-8 mr-8 w-11/12 items-center">
      {/**questionwrapper component to display the specific question */}
      <QuestionWrapper title="Question 1">
        <p className="text-white my-8 text-lg ">{Riddles[qsNumber].question}</p>

        {/**array map to loop through the answers array */}
        {answers.map((item: string) => (
          <div key={item} className=" text-white text-lg flex">
            <label className=" ">
              <input
                required
                type="radio"
                name="Radios"
                className="mr-2 accent-cyan-300"
                value={item}
                checked={answer1 === item}
                onChange={(e) => updateAnswer({ answer1: e.target.value })}
              />
              {item}
            </label>
          </div>
        ))}
      </QuestionWrapper>
    </div>
  );
};

export default Question1;
