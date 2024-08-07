"use client"
import React, { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [ isSubmitting, setIsSubmitting ] = useState<boolean>( false );
    const [ submitMessage, setSubmitMessage ] = useState<string>( '' );

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setIsSubmitting( true );
        setSubmitMessage( '' );
        try {
            const response = await fetch( "https://formspree.io/f/xyzgjkkg", {
                method: "POST",
                body: new FormData( e.currentTarget ),
                headers: {
                    Accept: "application/json"
                }
            } );

            if ( response.ok ) {
                setSubmitMessage( "Thank you for your message!" );
                ( e.target as HTMLFormElement ).reset();
            } else {
                setSubmitMessage( "Oops! There was a problem submitting your form" );
            }
        } catch ( error ) {
            setSubmitMessage( "Oops! There was a problem submitting your form" );
        }
        setIsSubmitting( false );
    };

    return (
        <div className="flex flex-col max-w-full mx-0 py-8 pl-2">
            <h1 className="text-5xl font-bold mb-8">Contact.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold mb-1">Bitfire Security</h2>
                    <p className="mb-2">8000 Avalon Blvd Suite 100,</p>
                    <p className="mb-4">Alpharetta, GA 30009</p>
                    <form className="space-y-4" onSubmit={ handleSubmit }>
                        <Input type="text" name="name" placeholder="Name" required className="mt-4"/>
                        <Input type="email" name="email" placeholder="Email" required />
                        <Input type="text" name="subject" placeholder="Subject" required />
                        <Textarea name="message" placeholder="Message" rows={ 4 } required />
                        <Button type="submit" className="w-full" disabled={ isSubmitting }>
                            { isSubmitting ? 'Submitting...' : 'Submit' }
                        </Button>
                        { submitMessage && <p className="text-center mt-2">{ submitMessage }</p> }
                    </form>
                </div>
                <div className="h-[400px] md:h-full relative" >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5760904223106!2d-84.28462688479242!3d34.070378880600184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57504a2f0e6f7%3A0x5b5a8f4b8b8f8f8f!2s8000%20Avalon%20Blvd%20Suite%20100%2C%20Alpharetta%2C%20GA%2030009!5e0!3m2!1sen!2sus!4v1628787234567!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};