import Link from "next/link";

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="mx-auto max-w-6xl p-8">
            <nav className="mb-6 flex gap-6 border-b pb-4">
                <Link
                    href="/meetings"
                    className="font-medium text-blue-700 hover:underline"
                >
                    All Meetings
                </Link>

                <Link
                    href="/meetings/current"
                    className="font-medium text-blue-700 hover:underline"
                >
                    Current Meeting
                </Link>
            </nav>

            {children}
        </section>
    );
}