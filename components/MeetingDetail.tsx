import type { Meeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: Meeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-8 text-gray-900 shadow-md">

            <h1 className="mb-2 text-3xl font-bold text-blue-900">
                Sacrament Meeting
            </h1>

            <p className="mb-8 text-gray-700">
                {meeting.date} • {meeting.meetingType}
            </p>

            <div className="space-y-8">

                <section>
                    <h2 className="mb-2 text-xl font-bold text-blue-800">
                        Leadership
                    </h2>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Presiding:
                        </span>{" "}
                        {meeting.presiding}
                    </p>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Conducting:
                        </span>{" "}
                        {meeting.conducting}
                    </p>
                </section>


                <section>
                    <h2 className="mb-2 text-xl font-bold text-blue-800">
                        Opening
                    </h2>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Opening Hymn:
                        </span>{" "}
                        #{meeting.openingHymn.number} -{" "}
                        {meeting.openingHymn.title}
                    </p>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Opening Prayer:
                        </span>{" "}
                        {meeting.openingPrayer}
                    </p>
                </section>


                <section>
                    <h2 className="mb-2 text-xl bold text-blue-800">
                        Ward Business
                    </h2>

                    {meeting.wardBusiness.length > 0 ? (
                        <ul className="list-disc space-y-1 pl-6 text-gray-800">
                            {meeting.wardBusiness.map((item, index) => (
                                <li key={index}>
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">
                            No ward business.
                        </p>
                    )}
                </section>


                <section>
                    <h2 className="mb-2 text-xl font-bold text-blue-800">
                        Sacrament
                    </h2>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Sacrament Hymn:
                        </span>{" "}
                        #{meeting.sacramentHymn.number} -{" "}
                        {meeting.sacramentHymn.title}
                    </p>
                </section>


                <section>
                    <h2 className="mb-2 text-xl font-bold text-blue-800">
                        Speakers & Musical Numbers
                    </h2>

                    <ul className="space-y-2 text-gray-800">
                        {meeting.speakers.map((speaker, index) => (
                            <li key={index}>
                                <span className="font-semibold">
                                    {speaker.name}
                                </span>{" "}
                                {speaker.type === "speaker"
                                    ? `— ${speaker.topic}`
                                    : "(Musical Number)"}
                            </li>
                        ))}
                    </ul>
                </section>


                <section>
                    <h2 className="mb-2 text-xl font-bold text-blue-800">
                        Closing
                    </h2>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Closing Hymn:
                        </span>{" "}
                        #{meeting.closingHymn.number} -{" "}
                        {meeting.closingHymn.title}
                    </p>

                    <p className="text-gray-800">
                        <span className="font-semibold">
                            Closing Prayer:
                        </span>{" "}
                        {meeting.closingPrayer}
                    </p>
                </section>


                {meeting.announcements &&
                    meeting.announcements.length > 0 && (
                        <section>
                            <h2 className="mb-2 text-xl font-bold text-blue-800">
                                Announcements
                            </h2>

                            <ul className="list-disc space-y-1 pl-6 text-gray-800">
                                {meeting.announcements.map(
                                    (announcement, index) => (
                                        <li key={index}>
                                            {announcement}
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}

            </div>
        </section>
    );
}