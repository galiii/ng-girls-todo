export interface QuestionItem {
    id: number,
    title: string,
    answers: OptionItem[]


}

export interface OptionItem {
    text: string,
    points: number,
    isActive: boolean
}


export interface UserAnswer{
    isActive : boolean,
    result : number
}