import type { Metadata } from "next";

export const metadata:Metadata = {
    title:'Contactos',
    description:'Numeros de contacto'
};

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact page</span>
        </>
    );
}