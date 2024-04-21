"use client"
import { useState, useEffect } from "react";
import {getAllUsers, deleteUser, deleteQuestion, deletePersonalityType, deleteChoice} from "@/lib/database";
import { createQuestion, getAllQuestions } from "@/lib/database";
import { createPersonalityType, getAllPersonalityTypes } from "@/lib/database";

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
    useEffect(() => {
        const fetchData = async () => {

            const usersData: User[] = await getAllUsers();
            const personalityTypesData: PersonalityType[] = await getAllPersonalityTypes();
            const questionsData: any[]  = await getAllQuestions();

            const unencryptedUsers = await Promise.all(usersData.map((user: User) => {
                if (!user.password) {
                    return user;
                }
                const pass =  bcrypt.hashSync(user.password, 10);
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

    const handleCreateQuestion = async (questionText: string, choices: Choice[]) => {
        await createQuestion(questionText, choices);
        setChange(!change)

    };
    async function handleDeleteQuestion(questionId: number) {
        await deleteQuestion(questionId);
        setChange(!change)

    }

    const handleCreatePersonalityType = async (name: string, description: string) => {
        await createPersonalityType(name, description);
        setChange(!change)

    };
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
            <ul>
                {questions.map((question   ) => (
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