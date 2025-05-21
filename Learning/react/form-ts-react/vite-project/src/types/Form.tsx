export interface HdlValues {
    text: string,
    number: number
}
export interface HdlFunctions {
    hdlText: (e: React.ChangeEvent<HTMLInputElement>) => void,
    hdlNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
    hdlSubmit: (e: React. FormEvent<HTMLFormElement>) => void
}