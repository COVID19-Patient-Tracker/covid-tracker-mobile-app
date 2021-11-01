export type Test = {
    id: number;
    date: string;
    place: string;
    result: string;
};

export type VisitHistory = {
    id: number;
    date: string;
    hospital: string;
    ward: number;
    status: string;
};

export type ImagePickerResultType = {
    cancelled: true;
} | ({
    cancelled: false;
} & ImageInfo);

export type ImageInfo = {
    uri: string;
    width: number;
    height: number;
    type?: 'image' | 'video';
    exif?: {
        [key: string]: any;
    };
    base64?: string;
};