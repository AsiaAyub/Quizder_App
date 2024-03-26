import { FormEvent, useState } from "react";
import Stepper from "../components/Stepper";
import { useMultistepForm } from "../useMultistepForm";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import { useNavigate } from "react-router";

type questionDisplayProps = {
  randomNumbers: any;
};

type FormData = {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
};

const INITIAL_DATA: FormData = {
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answer5: "",
};

const QuestionsDisplay = ({ randomNumbers }: questionDisplayProps) => {
  //use state for updating and storing the given answers
  const [data, setData] = useState(INITIAL_DATA);

  //function which will update the given answers list; it is a parameter for each question.
  function updateAnswer(answers: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...answers };
    });
  }
  const { step, currentQsIndex, isFirstStep, isLastStep, nextQs, prevQs } =
    useMultistepForm([
      <Question1
        qsNumber={randomNumbers[0]}
        {...data}
        updateAnswer={updateAnswer}
      />,
      <Question2
        qsNumber={randomNumbers[1]}
        {...data}
        updateAnswer={updateAnswer}
      />,
      <Question3
        qsNumber={randomNumbers[2]}
        {...data}
        updateAnswer={updateAnswer}
      />,
      <Question4
        qsNumber={randomNumbers[3]}
        {...data}
        updateAnswer={updateAnswer}
      />,
      <Question5
        qsNumber={randomNumbers[4]}
        {...data}
        updateAnswer={updateAnswer}
      />,
    ]);

  {
  }

  const navigate = useNavigate();

  const nextPage = () => {
    const dataToSend = { givenAnswers: data, qsList: randomNumbers };
    navigate("/feedback", { state: { data: dataToSend } });
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return nextQs();
    nextPage();
  }

  return (
    <div className="w-screen h-screen flex space-x-56 bg-[url('/assets/images/qsbg.jpg')]">
      <div className="border-2 rounded-lg bg-black border-cyan-400 bg-opacity-90 h-fit md:h-3/4 lg:h-fit w-full md:w-1/2 lg:w-1/2 m-auto">
        <form onSubmit={onSubmit}>
          <Stepper step={currentQsIndex + 1} />
          {step}

          <div className="mb-4 mr-2 md:my-10 flex justify-end">
            {!isFirstStep && (
              <button
                type="button"
                className="bg-cyan-800 text-white p-2 rounded-md w-32 "
                onClick={prevQs}
              >
                Back
              </button>
            )}

            <button
              type="submit"
              className="bg-cyan-800 text-white p-2 rounded-md mx-3 w-32 "
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionsDisplay;
