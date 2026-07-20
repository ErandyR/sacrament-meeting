import type { Meeting } from './types';

const meetings: Meeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Doe',
        conducting: 'Brother Smith',
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Johnson',
        wardBusiness: [
            { description: 'Ward Council Meeting' },
            { description: 'Youth Activity Planning' },
        ],
        stakeBusiness: false,
        sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
        speakers: [
            { name: 'Brother Brown', topic: 'Faith and Works', type: 'speaker' },
            { name: 'Sister Green', topic: 'The Power of Prayer', type: 'speaker' },
        ],
        closingHymn: { number: 202, title: 'God Be With You Till We Meet Again' },
        closingPrayer: 'Brother White',
        announcements: ['Stake Conference next week', 'Ward cleanup day on Saturday'],
    },
    {
        id: 2,
        date: "2026-05-10",
        meetingType: "testimony",
        presiding: "Bishop Doe",
        conducting: "Brother Wilson",
        openingHymn: {
            number: 19,
            title: "We Thank Thee, O God, for a Prophet",
        },
        openingPrayer: "Brother Anderson",
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: {
            number: 172,
            title: "In Humility, Our Savior",
        },
        speakers: [],
        closingHymn: {
            number: 152,
            title: "God Be with You Till We Meet Again",
        },
        closingPrayer: "Sister Taylor",
        announcements: [
            "Fast Offering donations available after the meeting.",
        ],
    },
    {
        id: 3,
        date: "2026-05-17",
        meetingType: "regular",
        presiding: "Bishop Doe",
        conducting: "Brother Clark",
        openingHymn: {
            number: 100,
            title: "Nearer, My God, to Thee",
        },
        openingPrayer: "Sister Evans",
        wardBusiness: [
            {
                description: "Release of Primary Presidency counselor",
            },
        ],
        stakeBusiness: false,
        sacramentHymn: {
            number: 175,
            title: "O God, the Eternal Father",
        },
        speakers: [
            {
                name: "Brother Thomas",
                topic: "Following Jesus Christ",
                type: "speaker",
            },
            {
                name: "Young Women Choir",
                topic: "",
                type: "musical number",
            },
        ],
        closingHymn: {
            number: 85,
            title: "How Firm a Foundation",
        },
        closingPrayer: "Brother Lewis",
        announcements: [
            "Ward temple trip next Saturday.",
        ],
    },
    {
        id: 4,
        date: "2026-05-24",
        meetingType: "stake",
        presiding: "Stake President Johnson",
        conducting: "Brother Harris",
        openingHymn: {
            number: 3,
            title: "Now Let Us Rejoice",
        },
        openingPrayer: "Brother Hall",
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: {
            number: 169,
            title: "As Now We Take the Sacrament",
        },
        speakers: [],
        closingHymn: {
            number: 134,
            title: "I Believe in Christ",
        },
        closingPrayer: "Sister Miller",
        announcements: [
            "No second-hour meetings today.",
        ],
    },
    {
        id: 5,
        date: "2026-05-31",
        meetingType: "general",
        presiding: "Branch President Allen",
        conducting: "Brother Young",
        openingHymn: {
            number: 72,
            title: "Praise to the Lord",
        },
        openingPrayer: "Sister King",
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: {
            number: 190,
            title: "In Memory of the Crucified",
        },
        speakers: [],
        closingHymn: {
            number: 241,
            title: "Count Your Blessings",
        },
        closingPrayer: "Brother Scott",
        announcements: [
            "General Conference rebroadcast after sacrament meeting.",
        ],
    },
];

export function getMeetings(date?: string | null): Meeting[] {
    if (date) {
        return meetings.filter(meeting => meeting.date === date);
    }
    return meetings;
}
export function getMeetingById(id: number): Meeting | null {
    return meetings.find(meeting => meeting.id === id) ?? null;
}