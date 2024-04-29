"use client"
import React, {useContext, useEffect, useState} from "react";
import {getAllQuestions, getUserIdByEmail, setQuizResults} from "@/lib/database";
import {QuizFlowContext} from "@/lib/context";
import {useRouter} from "next/navigation";
import {StyledButton} from "@/Styles/GeneralStyles";
import styled from "styled-components";
import {getSession} from "next-auth/react";
import ChoiceCard from "@/component/quiz/QuestionCard";

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    justify-content: center;
`;

export default function QuizQuestion() {

    const router = useRouter();

    const [allQuestions, setAllQuestions] = useState<question[]>([]);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<question>();

    // selected choice for current question
    const [selectedChoice, setSelectedChoice] = useState<number>();

    // array of user's choices for each question by choice id
    const {userChoices, setUserChoices} = useContext(QuizFlowContext)

    // boolean for whether the submit button should be displayed
    const [submitButton, setSubmitButton] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);
    // initializing all questions
    useEffect(function () {
        setLoading(true);

        async function fetchQuestions() {
            const response: allQuestionsResponse = await getAllQuestions();
            setAllQuestions(response);
            setLoading(false);
        }

        fetchQuestions().then()
    }, []);


    // on change of question number or all questions, update the current question
    useEffect(() => {
        if (currentQuestionNumber === allQuestions.length - 1) {
            setSubmitButton(true);
        } else {
            setSubmitButton(false);
        }
        if (allQuestions) {
            setCurrentQuestion(allQuestions[currentQuestionNumber]);
        }
    }, [currentQuestionNumber, allQuestions]);

    // on change of question number or user choices updated, update the selected choice
    useEffect(() => {
        setSelectedChoice(userChoices[currentQuestionNumber]);
    }, [currentQuestionNumber, userChoices]);

    const handleNextClick = () => {
        if (selectedChoice !== undefined) {
            setCurrentQuestionNumber(prevNumber => prevNumber + 1);
        }
    }

    const handleBackClick = () => {
        if (currentQuestionNumber > 0) {
            setCurrentQuestionNumber(prevNumber => prevNumber - 1);
        }
    }

    function handleChoiceChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!allQuestions) return;
        const choiceId = parseInt(event.target.value);
        setSelectedChoice(choiceId);
        const newChoices = [...userChoices];
        newChoices[currentQuestionNumber] = choiceId;
        setUserChoices(newChoices);
    }

    const handleSubmitClick = async () => {
        const session = await getSession();
        if (!session) {
            router.push("/register");
        } else {
            // if users are already logged in then redirect to the profile page and rewrite their choices in db
            setLoading(true);
            const email = session?.user?.email;
            const userId = email ? await getUserIdByEmail(email) : null;
            await setQuizResults(userId, userChoices);
            setLoading(false);
            router.push("/profile")
        }
    }

    return (
        <>
            <div>
                {loading && <h2>Loading...</h2>}
                {currentQuestion && (
                    <div>
                        <h2>Question {currentQuestionNumber + 1}</h2>
                        {loading && <h2>Loading...</h2>}
                        <h3>{currentQuestion.text}</h3>
                        <form>
                            {currentQuestion.choices.map((choice) => (
                                <>                                  <input
                                    type="radio"
                                    id={`choice-${choice.id}`}
                                    name="choice"
                                    value={choice.id}
                                    onChange={handleChoiceChange}
                                    checked={selectedChoice === choice.id}
                                    style={{display: 'none'}}
                                />
                                    <label htmlFor={`choice-${choice.id}`}>
                                        <ChoiceCard key={choice.id}>
                                            {choice.text}
                                        </ChoiceCard>
                                    </label>
                                </>))}
                            <ButtonContainer>
                                <StyledButton type="button" onClick={handleBackClick}
                                              disabled={currentQuestionNumber === 0}>Back</StyledButton>
                                {submitButton ?
                                    <StyledButton type="button" onClick={handleSubmitClick}
                                                  disabled={selectedChoice === undefined}>Submit</StyledButton> :
                                    <StyledButton type="button" onClick={handleNextClick}
                                                  disabled={selectedChoice === undefined}>Next</StyledButton>
                                }
                            </ButtonContainer>

                        </form>
                    </div>
                )}

            </div>
        </>
    )
}