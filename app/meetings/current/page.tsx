import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

function getMostRecentSunday() {
    const today = new Date();

    const day = today.getDay();

    const diff = day === 0 ? 0 : day;

    today.setDate(today.getDate() - diff);

    return today.toISOString().split("T")[0];
}

export default function CurrentMeetingPage() {
    const sunday = getMostRecentSunday();

    const meetings = getMeetings(sunday);

    if (meetings.length === 0) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                    No meeting found
                </h1>

                <p className="mt-2 text-gray-700">
                    There is no sacrament meeting scheduled for this Sunday.
                </p>
            </div>
        );
    }

    redirect(`/meetings/${meetings[0].id}`);
}