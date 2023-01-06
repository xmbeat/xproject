import Image from 'next/image'
import { useState } from 'react'
import styles from './login.module.sass'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from 'framer-motion'

export default function Login() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = e =>{
        e.preventDefault() 
        // console.log('user: '+ user)
        // console.log('password: '+ password)
    }

    return  <div className={styles.main}>
                <div className={styles.bg}>
                    <Image fill alt= '' src='/assets/images/city-login-dark.png' />
                </div>
                <motion.div  
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 0.5 }}
                >
                    <div>
                        <div className={styles.logo}>
                            <Image src='/assets/images/logo.png' fill />
                        </div>
                        <h2>
                            Welcome
                        </h2>
                    </div>

                    <form onSubmit={onSubmit}>
                        <div className={styles.formBox}>
                            <div className={styles.inputBox}>
                                <div>
                                    <label>Username</label>
                                    <input
                                    placeholder='Enter your backoffice username' 
                                    // type="text" 
                                    name="username" 
                                    autoComplete="off" 
                                    required
                                    value={user}
                                    onChange = {e => setUser(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input
                                    placeholder='Enter your backoffice password' 
                                    type="password" 
                                    name="password" 
                                    autoComplete="off"
                                    required
                                    value={password}
                                    onChange = {e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type='submit' className={styles.button}>
                                Login
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
}