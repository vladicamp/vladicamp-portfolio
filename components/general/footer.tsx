import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-16 py-10">
                <div className="footer-left">
                    <div className="w-20">
                        <Image className="size-full" src="/vladicamp-light-logo-512.avif" alt="vladicamp logo" width={1000} height={1000} />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="text-center text-sm">© {currentYear} VladiCamp All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}