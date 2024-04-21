"use client"
import React, {useState, useEffect} from "react";
import {getAllUsers, deleteUser, deleteQuestion, deletePersonalityType, deleteChoice} from "@/lib/database";
import {createQuestion, getAllQuestions} from "@/lib/database";
import {createPersonalityType, getAllPersonalityTypes} from "@/lib/database";

import {User, PersonalityType, Question, Choice} from "@prisma/client";
import bcrypt from "bcryptjs";


type questionResponse =
    {
        id: number;
        text: string;
        choices: [
            {
                id: number;
                text: string;
                personalityTypeId: number;
                personalityType: {
                    id: number;
                    name: string;
                    description: string;
                }
            }
        ]
    }


export default function Admin() {
    const [users, setUsers] = useState<User[]>([]);
    const [personalityTypes, setPersonalityTypes] = useState<PersonalityType[]>([]);
    const [questions, setQuestions] = useState<questionResponse[]>([]);
    const [change, setChange] = useState<boolean>(false);

    const [numChoices, setNumChoices] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {

            const usersData: User[] = await getAllUsers();
            const personalityTypesData: PersonalityType[] = await getAllPersonalityTypes();
            const questionsData: any[] = await getAllQuestions();

            const unencryptedUsers = await Promise.all(usersData.map((user: User) => {
                if (!user.password) {
                    return user;
                }
                const pass = bcrypt.hashSync(user.password, 10);
                return {
                    ...user,
                    password: pass
                };
                // code
            }));

            setUsers(unencryptedUsers);
            setPersonalityTypes(personalityTypesData);
            setQuestions(questionsData);
        };
        fetchData();
    }, [change]);

    const handleDeleteUser = async (userId: number) => {
        await deleteUser(userId);
        setChange(!change)

    };

    type choice = {
        text: string;
        personalityTypeId: number;
    }

    const handleCreateQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const questionText = data.get("name") as string;
        const numChoices = parseInt(data.get("description") as string);

        if (!questionText || isNaN(numChoices) || numChoices <= 0) {
            return;
        }

        let choices: choice[] = [];

        for (let i = 1; i <= numChoices; i++) {
            const choiceText = data.get(`choiceText${i}`) as string;
            const personalityTypeId = parseInt(data.get(`personalityTypeId${i}`) as string);
git
            console.log(choiceText, personalityTypeId)
            if (!choiceText || isNaN(personalityTypeId)) {
                continue;
            }
            choices.push({
                text: choiceText,
                personalityTypeId: personalityTypeId
            })
        }

        await createQuestion(questionText, choices);
        setChange(!change);
    };

    async function handleDeleteQuestion(questionId: number) {
        await deleteQuestion(questionId);
        setChange(!change)

    }

    async function handleCreatePersonality(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        const description = data.get("description");

        if (name && description) {
            await createPersonalityType(name.toString(), description.toString());
            setChange(!change)
        }
    }

    async function handleDeletePersonalityType(personalityTypeId: number) {
        await deletePersonalityType(personalityTypeId);
        setChange(!change)

    }

    async function handleDeleteChoice(id: number) {
        await deleteChoice(id);
        setChange(!change)
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <h2>Users</h2>
            <ul>
                {users.map((user: User) => (
                    <>
                        <li key={user.id}>
                            <li>{user.id}: {user.name}</li>

                        </li>
                        <ul>
                            <li>
                                <li>Email: {user.email}</li>
                                <li>Password: {user.password}</li>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </li>
                        </ul>
                    </>

                ))}
            </ul>

            <h2>Questions</h2>

            <form onSubmit={handleCreateQuestion}>
                <label>
                    Question Name:
                    <input type="text" name="name"/>
                </label>
                <label>
                    Number of Choices:
                    <input type="number" name="description" min="1" max="50"
                           onChange={(e) => setNumChoices(parseInt(e.target.value))}
                    />
                </label>
                {numChoices > 0 &&
                    [...Array(numChoices)].map((_, i) => (
                    <div key={i}>
                        <label>
                            Choice {i + 1} Text:
                            <input type="text" name={`choiceText${i + 1}`}/>
                        </label>
                        <label>
                            Personality Type ID for Choice {i + 1}:
                            <input type="number" name={`personalityTypeId${i + 1}`} min="1"/>
                        </label>
                    </div>
                ))}
                <button type="submit">Create Question</button>
            </form>

            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        {question.id}: {question.text}
                        <ul>
                            {question.choices.map((choice) => (
                                <li key={choice.id}>
                                    {choice.id}: {choice.text}
                                    <ul>
                                        <li>{choice.personalityType.id}: {choice.personalityType.name}</li>
                                    </ul>
                                    <button onClick={() => handleDeleteChoice(choice.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleDeleteQuestion(question.id)}>Delete</button>

                    </li>
                ))}
            </ul>

            <h2>Personality Types</h2>

            <>
                <form onSubmit={handleCreatePersonality}>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description"/>
                    </label>
                    <button type="submit">Create Personality Type</button>
                </form>
            </>

            <ul>
                {personalityTypes.map((personalityType: PersonalityType) => (
                    <li key={personalityType.id}>
                        {personalityType.id}: {personalityType.name}
                        <ul>
                            <li>{personalityType.description}</li>
                        </ul>
                        <button onClick={() => handleDeletePersonalityType(personalityType.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}