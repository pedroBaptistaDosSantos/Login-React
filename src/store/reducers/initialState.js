import { success } from "../actions/register.action";

export default {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
        },
        isLoading: {
            active: false,
            msg: null
        },
        success: false,
        error: null
    },
    register: {
        data: {
            username: '',
            email: '',
            password: ''
        },
        error: {},
        success: false
    }
}