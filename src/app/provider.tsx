'use client';
import Navbar from '@/components/shared/navbar/navbar';
import React, { FC } from 'react';
import Footer from '../components/shared/footer/footer';

interface ProviderProps {
    children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Provider;