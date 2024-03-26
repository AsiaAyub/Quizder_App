import QuestionWrapper from "../components/QuestionWrapper";
import Riddles from "../riddles.json";

type UserData = {
  answer4: string;
};

type question4Props = UserData & {
  qsNumber: number;
  updateAnswer: (answer: UserData) => void;
};

const Question4 = ({ qsNumber, answer4, updateAnswer }: question4Props) => {
  const answers = Riddles[qsNumber].answers;

  return (
    <div className="md:text-xl ml-8 mr-8 w-11/12 items-center">
      <QuestionWrapper title="Question 4">
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
                checked={answer4 === item}
                onChange={(e) => updateAnswer({ answer4: e.target.value })}
              />
              {item}
            </label>
          </div>
        ))}
      </QuestionWrapper>
    </div>
  );
};

export default Question4;
