import githubUsernameRegex from 'github-username-regex';
import { FormEvent, InputHTMLAttributes, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useGit } from '../../hooks/useGit';


type TFieldValues = {
  GitUser: string;
}


export function Inputs() {
  const { callGit } = useGit()
  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(true)

  const { handleSubmit, register } = useForm()

  const Submit: SubmitHandler<TFieldValues> = async (data) => {
    const { GitUser } = data
    setValidUser(githubUsernameRegex.test(GitUser))

    if (githubUsernameRegex.test(GitUser) === true) {
      await setUser(GitUser)
      callGit(GitUser)
    } else { alert('User invalid') }

  }

  function userVerification(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value === '') {
      setValidUser(true)
    } else { setValidUser(githubUsernameRegex.test(e.currentTarget.value)) }

  }

  return (
    <>
      <div className="flex justify-center items-end mt-24">
        <div className="w-full gap-0 max-w-xl flex justify-center items-center rounded focus-within:scale-105 transition-transform ">
          <form onSubmit={handleSubmit(Submit)} className='w-full gap-0 max-w-xl flex justify-center' >
            <input
              type="text"
              className={`w-full max-w-md h-9 rounded-l bg-gray-200 focus:outline-none focus-within:border-2 ${validUser ? 'focus-within:border-purple-400' : 'focus-within:border-red-400 border-2 border-red-400'} pl-2 font-semibold`}
              {...register('GitUser')}
              onChange={userVerification}
              required />

            <button type='submit' className="flex-1 h-9 bg-purple-400 p-4 rounded-r flex justify-center items-center text-white font-semibold active:brightness-75">Search</button>
          </form>

        </div>
      </div>
    </>
  )
}