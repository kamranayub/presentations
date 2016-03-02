


export class ApiResponse<T> {
    
    public data: T = null;

    public static fromJson<T> (model: any): ApiResponse<T> {
        var o = new ApiResponse<T> ();
        
        o.data = model.data;
        return o;
    }
}
