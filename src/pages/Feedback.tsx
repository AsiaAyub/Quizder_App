import { useLocation } from "react-router";
import QuestionCard from "../components/QuestionCard";
import Riddles from "../riddles.json";
import ScoreCard from "../components/ScoreCard";

const Feedback = () => {
  const location = useLocation();
  const receivedData = location.state?.data;
  const questionList = receivedData?.qsList;
  const answersList = receivedData?.givenAnswers;
  const givenAnswersArr: any = [];
  var score = 0;
  var counter = 0;

  for (const key in answersList) {
    const value = answersList[key];
    givenAnswersArr.push(value);
  }

  questionList.forEach(function (value: any) {
    Riddles[value].correct === givenAnswersArr[counter]
      ? (score = score + 1)
      : console.log("");
    counter++;
  });

  score = score * 20;

  return (
    <div className="w-screen h-screen bg-cover flex justify-between bg-[url('https://www.shutterstock.com/shutterstock/videos/1108479139/thumb/1.jpg?ip=x480')]">
      <ScoreCard score={score}></ScoreCard>

      <div className="text-white w-1/3 mx-20 my-8 p-4 space-y-10">
        <h1 className="font-extrabold text-md text-center">
          Questions And Answers
        </h1>
        <QuestionCard
          qsNumber={questionList[0]}
          givenAnswer={answersList.answer1}
        />
        <QuestionCard
          qsNumber={questionList[1]}
          givenAnswer={answersList.answer2}
        />
        <QuestionCard
          qsNumber={questionList[2]}
          givenAnswer={answersList.answer3}
        />
        <QuestionCard
          qsNumber={questionList[3]}
          givenAnswer={answersList.answer4}
        />
        <QuestionCard
          qsNumber={questionList[4]}
          givenAnswer={answersList.answer5}
        />
      </div>
    </div>
  );
};

export default Feedback;
