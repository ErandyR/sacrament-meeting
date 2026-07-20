import MeetingCard from "@/components/MeetingCard";
import type { Meeting } from "@/lib/types";
import { getBaseUrl } from "@/lib/api-url";

async function getMeetings(): Promise<Meeting[]> {
    const response = await fetch(
        `${getBaseUrl()}/api/meetings`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch meetings.");
    }

    return response.json();
}

export default async function MeetingsPage() {
    const meetings = await getMeetings();

    return (
        <>
            <h1 className="mb-6 text-3xl font-bold">
                Sacrament Meetings
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
                {meetings.map((meeting) => (
                    <MeetingCard
                        key={meeting.id}
                        meeting={meeting}
                    />
                ))}
            </div>
        </>
    );
}