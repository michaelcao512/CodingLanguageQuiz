type question = {
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

type questionReqBody = {
    "question": string;
    "choices": {
        "text": string;
        "personalityTypeId": number;
    }[]
}

type allQuestionsResponse = question[]
