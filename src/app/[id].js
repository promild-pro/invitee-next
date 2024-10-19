import { useRouter } from 'next/router';
import React from 'react';

const IdPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Halaman ID: {id}</h1>
            {/* Tambahkan komponen lain di sini */}
        </div>
    );
};

export default IdPage;
