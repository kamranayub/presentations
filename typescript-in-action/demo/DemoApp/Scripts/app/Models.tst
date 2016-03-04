${    
    using Typewriter.Extensions.Types;

    string setValue(Property property) {
        // handle Angular2 dates from strings
        if (property.Type.IsDate) {
            return $"new Date(model.{property.name})";
        }
        return $"model.{property.name}";
    }
}

$Classes(DemoApp.Models.*)[
export class $Name {

    $Properties[
    public $name: $Type = $Type[$Default];]

    public static fromJson(model: any): $Name {
        var o = new $Name();
        $Properties[
        o.$name = $setValue;]
        return o;
    }
}]
