export default function Footer() {
    return (
        <footer className="mt-10 border-t py-6 text-center text-gray-500">
            <p>
                © {new Date().getFullYear()} Sacrament Meeting Planner
            </p>
        </footer>
    );
}