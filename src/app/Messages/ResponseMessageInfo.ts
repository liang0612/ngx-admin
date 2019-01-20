export class ResponseMessageInfo{
    /**
     * 状态码
     */
    stateCode: number;
    /**
     * 描述信息
     */
    stateDesc?: string;

    get succeess():boolean{
        return this.stateCode===0;
    }
    result?:any;
}