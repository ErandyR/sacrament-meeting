import NavLinks from "./NavLinks";

export default function Header() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <header className="bg-blue-900 text-white p-6 shadow-md">
            <div className="mx-auto max-w-6xl">

                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        Springfield Ward
                    </h1>

                    <p>{today}</p>
                </div>

                <div className="mt-4">
                    <NavLinks />
                </div>

            </div>
        </header>
    );
}