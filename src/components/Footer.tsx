export function Footer() {
    return (
        <footer className="bg-[#002D72] text-white py-6 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-white/80">
                    © {new Date().getFullYear()} OMA Tool. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                        Terms of Service
                    </a>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
