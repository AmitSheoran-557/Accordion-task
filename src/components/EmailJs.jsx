import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailJs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wmmwhui', 'template_9294r8t', form.current, {
                publicKey: 'Ggsx27iufj9XQ5N3d',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail} className='pt-10 gap-5 min-w-24 bg-[#222] min-h-screen mx-auto flex justify-center items-center flex-col text-start'>

            <input className='border text-black mx-3 p-2 border-black' type="text" name="name" placeholder='name' />

            <input className='border text-black mx-3 p-2 border-black' type="email" name="email" placeholder='email' />

            <input className='border text-black mx-3 p-2 border-black' type="number" name="number" placeholder='number' />
            <div className=' border-black min-w-24 border pe-10 ps-2 bg-white'>
                <textarea className=' text-black  outline-none' name="message" placeholder='message' />
            </div>
            <input className='border text-black mx-3 px-3 py-1 bg-white border-black' type="submit" value="Send" />

        </form>
    )
}

export default EmailJs