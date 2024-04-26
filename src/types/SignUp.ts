type createUserRequest = {
    name: string;
    email: string;
    password: string;
    biography: string;
}

type SignupFormState = {
    formData: {
        name: string;
        email: string;
        password: string;
        biography: string;
    }
    buttonDisabled: boolean;
    nameError?: string;
    emailError?: string;
    passwordError?: string;
};

type interactedFields = {
    name: boolean;
    email: boolean;
    password: boolean;
};