
export interface IMemo {
    memoId: string;
    content: string;
    sort: number;
    createDate: Date;
    delFlag: boolean;
    relationId: string;
    type: number;
    lastUpdateTime: Date;
}
