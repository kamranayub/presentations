${    
    using Typewriter.Extensions.Types;

    // Because we use IsoDateTimeConverter in JSON.NET, all dates
    // returned from Web API are serialized as string so we should
    // decorate any setters with the appropriate decorators
    string DateStringConverter(Property p) {
        if (p.Type.IsDate) {
            return "@DateStringConverter";
        }
        return "";
    }
}
import {DateStringConverter} from './Decorators'

$Classes(DemoApp.Models.*)[
export class $Name {

    $Properties[
    private _$name: $Type = $Type[$Default];
    public get $name(): $Type { return this._$name; }
    $DateStringConverter
    public set $name(value: $Type) { this._$name = value; }]

    public static fromJson(model: any): $Name {
        var o = new $Name();
        $Properties[
        o.$name = model.$name;]
        return o;
    }
}]