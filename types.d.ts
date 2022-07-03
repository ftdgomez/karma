interface User {
    id?: number;
    password: string;
    role: string;
    username: string;
}

interface UserProfile {
    userId?: number;
    id?: number;
    banner?: string;
    name: string;
    email: string;
    phone: string;
    karma?: number; // karma name (number)
    username: string;
    canShowEmail?: boolean;
    canShowEvents?: boolean;
    canShowPhone?: boolean;
    savedEvents?: number[];
}

interface AdminProfile {}

interface EnterpriseProfile {
    userId: number;
    id: number;
    nif: string;
    responsible: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    eventsPublished: number;
    eventsCompleted: number;
    bio: string;
}

// enterprise can have followers

interface Gallery {
    id: number;
    url: string;
    eventId: number;
}[]

interface AppEventParticipant {
    eventId: number;
    userId: number;
    id: number;
    finished: boolean;
}

interface AppEvent {
    userId?: number;
    id?: number;
    title: string;
    date: string;
    duration: number;
    description: string;
    requirements: string;
    location: string;
    tags: string[];
    image: string[];
    metadata?: AppEventMetadata
    qrCode?: string;
    limitPerson: number;
}

interface Comments {
    id: number;
    userId: number;
    eventId: number;
    comment: string;
    date: string;
}

interface SavedBucket {
    id: number;
    userId: number;
    events: number[];// array de eventsId
}

interface AppEventMetadata {}

interface Recollection {
    id: number;
    userId: number;
    title: string;
    description: string;
    image: string;
    amount: number;
    expirationDate: string;
    tags: string[];
    location: string;
    qrCode: string;
    status: 'open' | 'closed';
}

interface Categories {
    id: number;
    name: string;
}

interface Activity {}