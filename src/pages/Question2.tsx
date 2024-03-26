import QuestionWrapper from "../components/QuestionWrapper";
import Riddles from "../riddles.json";

type UserData = {
  answer2: string;
};

type question2Props = UserData & {
  qsNumber: number;
  updateAnswer: (answer: UserData) => void;
};

const Question2 = ({ qsNumber, answer2, updateAnswer }: question2Props) => {
  const answers = Riddles[qsNumber].answers;

  return (
    <div className="md:text-xl ml-8 mr-8 w-11/12 items-center">
      <QuestionWrapper title="Question 2">
        <p className="text-white my-8 text-lg ">{Riddles[qsNumber].question}</p>

        {answers.map((item: string) => (
          <div key={item} className=" text-white text-lg flex">
            <label className=" ">
              <input
                required
                type="radio"
                name="Radios"
                className="mr-2 accent-cyan-300"
                value={item}
                checked={answer2 === item}
                onChange={(e) => updateAnswer({ answer2: e.target.value })}
              />
              {item}
            </label>
          </div>
        ))}
      </QuestionWrapper>
    </div>
  );
};

export default Question2;
