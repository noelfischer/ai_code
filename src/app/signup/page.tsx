'use client'
import React from "react";
import signUp from "../firebase/auth/signup";
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography } from "@mui/material";
import { ArrowForwardIosOutlined, EmailOutlined, LockOutlined } from "@mui/icons-material";
import styles from './page.module.css'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: any) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <Box className={styles.div + " " + styles.backgroundImage}>
            <Box sx={{ height: "100%", backdropFilter: "blur(50px)", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box width={0.618} maxWidth={700}>
                    <Typography textAlign="center" variant="h1" className={styles.h1 + " " + styles.spacingBottom}>Sign Up</Typography>
                    <Box className={styles.spacingBottom} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailOutlined sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField fullWidth onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" required type="email" name="email" id="email" />
                    </Box>
                    <Box className={styles.spacingBottom} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockOutlined sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField fullWidth onChange={(e) => setPassword(e.target.value)} label="Password" variant="standard" required type="password" name="password" id="password" />
                    </Box>
                    <Button fullWidth className={styles.button} variant="contained" endIcon={<ArrowForwardIosOutlined />}>Sign Up</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Page;