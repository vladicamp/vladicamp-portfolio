import Image from 'next/image';

type FooterProps = {
    logoSrc: string;
    siteTitle: string;
};

export default function Footer({ logoSrc, siteTitle }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-16 py-10">
                <div className="footer-left">
                    <div className="w-20">
                        <Image className="size-full" src={logoSrc} alt={`${siteTitle} logo`} width={1000} height={1000} />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="text-center text-sm">© {currentYear} {siteTitle} All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
