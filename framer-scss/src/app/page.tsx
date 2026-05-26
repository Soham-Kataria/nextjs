import React from 'react';
import Box from '@/components/Box';

const page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center gap-6 bg-slate-950 p-8 flex-col sm:flex-row">
            <Box
                title="Sleek Coral"
                description="This box uses custom SCSS glassmorphism styled with Tailwind bg overrides."
                className="bg-red-500/10 border-red-500/20 hover:border-red-500/40 hover:shadow-red-500/10"
            />
            <Box
                title="Neon Emerald"
                description="Tailwind handles utilities while SCSS structures layout and micro-animations."
                className="bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10"
            />
            <Box
                title="Deep Indigo"
                description="Easily customize individual cards using utility classes on the fly."
                className="bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
            />
        </div>
    );
};

export default page;
