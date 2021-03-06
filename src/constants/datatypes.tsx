export type Test = {
    id: number;
    date: string;
    place: string;
    result: string;
};

export type PcrTest = {
    id: number;
    patientId: number;
    hospital_id: number;
    test_data: string;
    test_result: string;
};

export type VisitHistory = {
    visit_id: number;
    visit_date: string;
    hospital: Hospital;
    ward_id: number;
    visit_status: string;
    data: string;
    patient_id:number;
};

type Hospital = {
    address: string,
    capacity: number,
    hospital_id: number,
    name: number,
    telephone: string,
}

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

export type XrayResultType = {
    result: string,
    accuracy : string,
}