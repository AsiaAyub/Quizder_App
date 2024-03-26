import QuestionWrapper from "../components/QuestionWrapper";
import Riddles from "../riddles.json";

type UserData = {
  answer3: string;
};

type question3Props = UserData & {
  qsNumber: number;
  updateAnswer: (answer: UserData) => void;
};

const Question3 = ({ qsNumber, answer3, updateAnswer }: question3Props) => {
  const answers = Riddles[qsNumber].answers;

  return (
    <div className="md:text-xl ml-8 mr-8 w-11/12 items-center">
      <QuestionWrapper title="Question 3">
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
                checked={answer3 === item}
                onChange={(e) => updateAnswer({ answer3: e.target.value })}
              />
              {item}
            </label>
          </div>
        ))}
      </QuestionWrapper>
    </div>
  );
};

export default Question3;
