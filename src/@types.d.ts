type ResumeImageData = {
    url: string;
    visible: boolean;
}
type ResumeInfosData = {
    fullname: string;
    headline: string;
    email: string;
    website: string;
    phone: string;
    location: string;
}
type ResumeContentData = {
    image: ResumeImageData;
    infos: ResumeInfosdata;
}

type ResumeData = {
    content: ResumeContentData;
    //structure: ResumeStructureData;
}