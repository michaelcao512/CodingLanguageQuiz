import {z} from 'zod';

const schema = z.object({
    name: z.string()
        .min(1, { message: "This field is required" })
        .min(3, { message: "Too short. Must be greater 3 characters " })
        .max(15, { message: "Too long. Must be less than 15 characters" }),
    email: z.string()
        .min(1, { message: "This field is required" })
        .email(),
    password: z.string()
        .min(1, { message: "This field is required" })
        .min(6, { message: "Password is too short. Must be greater 6 characters" })
        .max(50, { message: "Password is too long. Must be less 50 characters" })
});

export async function validateData(formState: SignupFormState) {
    const name = formState.formData.name;
    const email = formState.formData.email;
    const password = formState.formData.password;


    const result = schema.safeParse({
        name: name,
        email: email,
        password: password
    });

    if (!result.success) {
        const fieldError = result.error.flatten().fieldErrors;
        let err = {
            buttonDisabled: false,
            nameError: '',
            emailError: '',
            passwordError: '',
        };
        for (const [field, error] of Object.entries(fieldError)) {
            err = {
                ...err,
                buttonDisabled: true,
                [`${field}Error`]: error[0]
            }
        }
        return err;
    }
    return {};
}

export async function validateFormAction(prevState: SignupFormState, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const biography = formData.get('biography') as string;
    let formState = {
        ...prevState,
        formData: {
            name: name ,
            email: email,
            password: password,
            biography: biography
        },
    };

    const errors = await validateData(formState);
    if (Object.keys(errors).length > 0) {
        return {
            ...prevState,
            ...errors
        };
    }
    return {
        ...formState,
        buttonDisabled: false,
        nameError: '',
        emailError: '',
        passwordError: '',
    };
}
