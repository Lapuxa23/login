import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authApi'

const initialState = {
    token: null,
    userId: null,
    isLoading: false,
    error: null,
}

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        return await loginUser(credentials)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
    try {
        return await registerUser(credentials)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.token = null
            state.userId = null
            state.error = null
        },
        clearError(state) {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.token = action.payload.token
                state.userId = action.payload.id ?? null
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || 'Ошибка авторизации'
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.token = action.payload.token
                state.userId = action.payload.id
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || 'Ошибка регистрации'
            })
    },
})

export const { logout, clearError } = authSlice.actions

export default authSlice.reducer
