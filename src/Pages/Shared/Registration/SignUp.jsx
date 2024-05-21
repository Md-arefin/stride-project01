import { Link } from "react-router-dom";
import sign_up from '../../../assets/image/sign-up.jpg';
import Gleimg from '../../../assets/image/google.png';
import GithubImg from '../../../assets/image/github.png';
import { useForm } from "react-hook-form";


const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();


    return (
        <div className='flex flex-col md:flex-row-reverse mx-4 gap-10'>
            <div className='w-full md:w-1/3 mx-auto lg:mt-36'>
                <img src={sign_up} alt="" />
            </div>
            <form className='w-full md:w-1/3 mx-auto  p-2 md:p-5 lg:p-10 border-2 rounded-lg border-black '>

                <h5 className='text-center font-semibold text-3xl'>Please Sign-Up</h5>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-md border-2 p-2"
                        type="email"
                        placeholder='Enter your email...'
                        {...register("email")} required />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="w-full rounded-md border-2 p-2"
                        type="password"
                        placeholder='Enter your password...'
                        {...register("password")} required />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        className="w-full rounded-md border-2 p-2"
                        type="password"
                        placeholder='Enter your password...'
                        {...register("password")} required />
                </div>

                <p className='text-center'>Already have an account? <Link to='/login' className='underline font-semibold'> Please Login</Link></p>

                <div className="flex justify-center my-5">
                    <button type="submit" className="bg-black btn w-1/2 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Login</button>
                </div>

                <div className='border-2 w-3/4 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div className='my-5'>
                    <button className='btn w-full h-14 flex items-center justify-evenly gap-2  p-2'>
                        <img src={Gleimg} className='w-10 ' alt="" />
                        <p>Login with Google</p>
                    </button>

                    <button className='btn w-full h-14 flex items-center justify-evenly gap-2 mt-4'>
                        <img src={GithubImg} className='w-10 ' alt="" />
                        <p>Login with Github</p>
                    </button>

                </div>

            </form>

        </div>
    );
};

export default SignUp;