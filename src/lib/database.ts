import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

type QuestionBody = {
    text: string,
    choices: {
        text: string,
        personalityTypeId: number
    }[]

}


// USERS
export async function getAllUsers(){
    const users =  await fetch("api/users/all")
    const usersData =  await users.json();
    return usersData;
}
export async function deleteAllUsers(){
    const deletedUsers = await fetch("api/users/all",
        {
            method: "DELETE"
        })
    return deletedUsers;
}

export async function createUser(name: string, email: string, password: string){
    const newUser = await fetch("api/users/register",
        {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    return newUser;

    // const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: name,
    //         email: email,
    //         password: hashedPassword
    //     }
    // });
    // return newUser;
}
export async function deleteUser(id: number){
    const deletedUser = await fetch(`http://localhost:3000/api/users/${id}`,
        {
            method: "DELETE",
        })
    return deletedUser;
}


// QUESTIONS
export async function getAllQuestions(){
    const questions = await fetch("api/questions")
    const questionsData = await questions.json();
    return questionsData;
}

export async function createQuestion(question: string, choices: {text: string, personalityTypeId: number}[]){
    const newQuestion = await fetch("api/questions",
        {
            method: "POST",
            body: JSON.stringify({
                question: question,
                choices: choices
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    return newQuestion;
}

export async function deleteQuestion(id: number){
    const deletedQuestion = await fetch(`api/questions/${id}`,
        {
            method: "DELETE"
        })
    return deletedQuestion;
}

export async function getQuestion(id: number){
    const question = await fetch(`api/questions/${id}`)
    const questionData = await question.json();
    return questionData;

}


// choices
export async function deleteChoice(id: number){
    const deletedChoice = await fetch(`api/questions/choice/${id}`,
        {
            method: "DELETE"
        })
    return deletedChoice;
}


// PERSONALITY TYPES
export async function getAllPersonalityTypes(){
    const personalityTypes = await fetch ("api/personalityType")
    const personalityTypesData = await personalityTypes.json();
    return personalityTypesData;
}
export async function deleteAllPersonalityTypes(){
    const deletedPersonalityTypes = await fetch("api/personalityType",
        {
            method: "DELETE"
        })
    return deletedPersonalityTypes;
}


export async function createPersonalityType(name: string, description: string){
    const newPersonalityType = await fetch("api/personalityType",
        {
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    return newPersonalityType;


}
export async function deletePersonalityType(id: number){
    const deletedPersonalityType = await fetch(`api/personalityType/${id}`,
        {
            method: "DELETE"
        }
        );
    return deletedPersonalityType;
}
export async function updatePersonalityType(id: number, name: string, description: string){
    if (!name && !description) {
        return {
            error: "No fields to update"
        }
    }

    const existingPersonality = await prisma.personalityType.findFirst({
        where: {
            id: id
        }
    });

    if (!existingPersonality) {
        return {
            error: "Personality not found"
        }
    }

    const data = {
        name: existingPersonality.name,
        description: existingPersonality.description
    }

    if (name) {
        data.name = name;
    }
    if (description) {
        data.description = description;
    }

    // const updatedPersonality = await prisma.personalityType.update({

    // return updatedPersonality;

}