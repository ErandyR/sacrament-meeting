import MeetingDetail from "@/components/MeetingDetail";
import type { Meeting } from "@/lib/types";
import { getBaseUrl } from "@/lib/api-url";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

async function getMeeting(id: string): Promise<Meeting> {
    const response = await fetch(
        `${getBaseUrl()}/api/meetings/${id}`,
        {
            cache: "no-store",
        }
    )

    if (!response.ok) {
        throw new Error("Meeting not found");
    }

    return response.json();
}

export default async function MeetingPage({
    params,
}: PageProps) {
    const { id } = await params;

    const meeting = await getMeeting(id);

    return (
        <MeetingDetail meeting={meeting} />
    );
}