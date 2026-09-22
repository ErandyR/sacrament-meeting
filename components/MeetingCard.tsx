import Link from "next/link";
import type { Meeting } from "@/lib/types";

interface MeetingCardProps {
    meeting: Meeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <Link href={`/meetings/${meeting.id}`}>
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900">
                    {meeting.date}
                </h2>

                <p className="mt-3 text-gray-700">
                    <span className="font-semibold">Type:</span> {meeting.meetingType}
                </p>

                <p className="text-gray-700">
                    <span className="font-semibold">Conducting:</span> {meeting.conducting}
                </p>

                <p className="text-gray-700">
                    <span className="font-semibold">Presiding:</span> {meeting.presiding}
                </p>

                <p className="mt-5 font-semibold text-blue-700">
                    View Meeting →
                </p>
            </article>
        </Link>
    );
}