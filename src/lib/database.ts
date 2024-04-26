import prisma from "@/lib/prisma";
import {User} from "@prisma/client";

// USERS
/**
 * Gets all users from the database.
 * @returns {Promise<User[]>} An array of User objects.
 */
export async function getAllUsers(): Promise<User[]> {
    const users = await fetch("api/users/all")

    return await users.json();
}

/**
 * Deletes all users from the database.
 * @returns {Promise<User[]>} An array of User objects.
 */
export async function deleteAllUsers() {
    const payload = await fetch("api/users/all",
        {
            method: "DELETE"
        })
    const {count} = await payload.json();
    return count;

}

/**
 * Creates a new user in the database.
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {string} name - The name of the user.
 * @param {string} password - The password of the user.
 * @param {string} biography - The biography of the user.
 * @param {string} email - The email of the user.
 * @returns {Promise<User>} The created User object.
 */
export async function createUser(name: string, email: string, password: string, biography: string): Promise<User> {
    const user = await fetch("api/users/register",
        {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                biography: biography
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    return await user.json();
}

/**
 * Deletes a user from the database by their ID
 * @returns {Promise<User>} The deleted User object.
 */
export async function deleteUser(id: number): Promise<User> {
    const user = await fetch(`http://localhost:3000/api/users/${id}`,
        {
            method: "DELETE",
        })
    return await user.json();
}

/**
 * Gets a user in the database by their ID
 * @param id - The ID of the user.
 */
export async function getUser(id: number): Promise<User> {
    const user = await fetch(`api/users/${id}`)
    return await user.json();
}


// QUESTIONS
/*
type question =
    {
        id: number;
        text: string;
        choices: {
            id: number;
            text: string;
            personalityTypeId: number;
            personalityType: {
                id: number;
                name: string;
                description: string;
            }
        }[]
    }
 */


/**
 * Gets all questions from the database.
 */
export async function getAllQuestions(): Promise<question[]> {
    const questions = await fetch("api/questions")
    return await questions.json();
}

/**
 * Creates a question in the database.
 * @param question - The question text.
 * @param choices - An array of choices for the question.
 */
export async function createQuestion(question: string, choices: { text: string, personalityTypeId: number }[]) {
    return await fetch("api/questions",
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
}

/**
 * Deletes a questions from the database by id.
 * @param id - The id of the question.
 */
export async function deleteQuestion(id: number) {
    return await fetch(`api/questions/${id}`,
        {
            method: "DELETE"
        })
}

/**
 * Gets a question from the database by id.
 * @param id - The id of the question.
 */
export async function getQuestion(id: number) {
    const question = await fetch(`api/questions/${id}`)
    return await question.json();
}


/**
 * delete a choice by id
 * @param id - The id of the choice
 */
export async function deleteChoice(id: number) {
    return await fetch(`api/questions/choice/${id}`,
        {
            method: "DELETE"
        })

}


// PERSONALITY TYPES
/**
 * Gets all personality types from the database.
 */
export async function getAllPersonalityTypes() {
    const personalityTypes = await fetch("api/personalityType")
    return await personalityTypes.json();
}

/**
 * Deletes all personality types from the database.
 */
export async function deleteAllPersonalityTypes() {
    return await fetch("api/personalityType",
        {
            method: "DELETE"
        })

}

/**
 * Creates a personality type in the database.
 * @param name - The name of the personality type.
 * @param description - The description of the personality type.
 */
export async function createPersonalityType(name: string, description: string) {
    return await fetch("api/personalityType",
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
}

/**
 * Deletes a personality type from the database by id.
 * @param id - The id of the personality type.
 */
export async function deletePersonalityType(id: number) {
    return await fetch(`api/personalityType/${id}`,
        {
            method: "DELETE"
        }
    );
}

/**
 * Updates a personality type in the database
 * @param id - The id of the personality type.
 * @param name - The name of the personality type.
 * @param description - The description of the personality type.
 */
// TODO: updates a personality type given a personality type id, name, and description
export async function updatePersonalityType(id: number, name: string, description: string) {
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

// USERCHOICES
/**
 * Gets all user choices from the database.
 * @param userId - The id of the user.
 */
export async function getUserChoices(userId: number) {
    const userChoices = await fetch(`api/users/${userId}/choices`)
    return await userChoices.json();
}

/**
 * Creates user choices in the database.
 * @param userId - The id of the user.
 * @param choiceIds - An array of choice ids.
 */
export async function createUserChoices(userId: number, choiceIds: number[]) {
    const userChoices = await fetch(`api/users/${userId}/choices`,
        {
            method: "POST",
            body: JSON.stringify(
                {
                    choiceIds: choiceIds
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        })
    return await userChoices.json();
}