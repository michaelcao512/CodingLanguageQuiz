import prisma from "@/lib/prisma";

// USERS

// gets all users
export async function getAllUsers() {
    const users = await fetch("api/users/all")

    return await users.json();
}

// deletes all user
export async function deleteAllUsers() {
    return await fetch("api/users/all",
        {
            method: "DELETE"
        })

}

// creates a user given a name, email, and password
export async function createUser(name: string, email: string, password: string) {
    return await fetch("api/users/register",
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
}

// deletes a user by id
export async function deleteUser(id: number) {
    return await fetch(`http://localhost:3000/api/users/${id}`,
        {
            method: "DELETE",
        })
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

// gets all questions
export async function getAllQuestions(): Promise<question[]> {
    const questions = await fetch("api/questions")
    return await questions.json();
}

// creates a question given a question string and an array of choices
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

// deletes a question by id
export async function deleteQuestion(id: number) {
    return await fetch(`api/questions/${id}`,
        {
            method: "DELETE"
        })
}

// get a question by id
export async function getQuestion(id: number) {
    const question = await fetch(`api/questions/${id}`)
    return await question.json();
}


// choices
export async function deleteChoice(id: number) {
    return await fetch(`api/questions/choice/${id}`,
        {
            method: "DELETE"
        })

}


// PERSONALITY TYPES
export async function getAllPersonalityTypes() {
    const personalityTypes = await fetch("api/personalityType")
    return await personalityTypes.json();

}

// deletes all personality types
export async function deleteAllPersonalityTypes() {
    return await fetch("api/personalityType",
        {
            method: "DELETE"
        })

}

// creates a personality type given a name and description
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

// deletes personality type by id
export async function deletePersonalityType(id: number) {
    return await fetch(`api/personalityType/${id}`,
        {
            method: "DELETE"
        }
    );
}

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