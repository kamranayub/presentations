${    
    using Typewriter.Extensions.Types;

    string setValue(Property property) {
        // handle Angular2 dates from strings
        if (property.Type.IsDate) {
            return $"new Date(model.{property.name})";
        }
        return $"model.{property.name}";
    }

    string extends(Class c) {
        if (c.BaseClass != "") return $"extends {c.BaseClass}";
        return "";
    }

    string importBaseClass(Class c) {
        if (c.BaseClass != "") return $"import {{{c.BaseClass}}} from './{c.BaseClass}'";
        return "";
    }

    string superNew(Class c) {
        // call `fromJson` on super if needed
        if (c.BaseClass != "") return $"<{c.Name}>{c.BaseClass}.fromJson(model)";
        return $"new {c.Name}{c.TypeArguments}()";
    }
}

$Classes(DemoApp.Models.*)[
$importBaseClass
export class $Name$TypeParameters $extends {

    $Properties[
    public $name: $Type = $Type[$Default];]

    public static fromJson$TypeParameters (model: any): $Name$TypeParameters {
        var o = $superNew;
        $Properties[
        o.$name = $setValue;]
        return o;
    }
}]
