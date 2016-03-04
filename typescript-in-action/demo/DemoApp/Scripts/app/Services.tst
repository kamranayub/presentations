${
    using Typewriter.Extensions.WebApi;

    Template(Settings s) {
        s.OutputFilenameFactory = (file) => {
            return Singularize(file.Classes.First().Name.Replace("Controller", "").ToLower()) + ".service.ts";
        };
    }

    string Singularize(string s) {
        // use Humanizer or something actually good
        if (s.EndsWith("s")) {
            return s.Remove(s.Length-1, 1);
        } else if (s.EndsWith("ies")) {
            return s.Remove(s.Length - 3, 3) + "y";
        }
        return s;
    }

    string ServiceName(Class c) {
        return Singularize(c.Name.Replace("Controller", "")) + "Service";
    }

    string ImportDependencies(Class c) {
        var types = c.Methods.Select(m => m.Type.Name.TrimEnd('[',']')).Distinct();
        
        return String.Join("\n", 
            types.Select(t => $"import {{{t}}} from './{t}'"));
    }

    string ModelMap(Method m) {
        var type = m.Type;

        if (type.FullName.Contains("Models.")) {
            if (type.IsEnumerable) {
                return $"(<{type}>res.json().data).map({type.Name.TrimEnd('[', ']')}.fromJson)";
            } else {
                return $"{type}.fromJson(res.json().data)";
            }
        }
        return $"(<{type}>res.json().data)";
    }
}
$Classes(:ApiController)[
import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

$ImportDependencies

@Injectable()
export class $ServiceName {

    constructor(private _http: Http) { }

    $Methods[
    $name($Parameters[$name: $Type][,]) {
        return this._http.$HttpMethod(`$Url`, $RequestData)
            .map(res => $ModelMap)
            .catch(this._handleError);
    }]

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}]