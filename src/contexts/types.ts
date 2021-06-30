interface HoroscopesResponseDataProps {
    result: Array<ResultDataProps>
};

interface ResultDataProps {
    dt: Date;
    horoscopes: Array<HoroscopesArrayResultProps>
};

interface HoroscopesArrayResultProps {
    description: string;
    sign: string;
    title: string;
};