# Notes

- Walkthrough "Bestreads" app
- Show how TS is being used
- Features of TypeScript
    - Types
    - Arrow Functions 
    - Classes & Interfaces
    - Generics
    - Modules
    - Decorators
- Show where we need to fill in implementation
- Services/Models
- Extensions
    - Typewriter for Visual Studio
    
## TODOs

Stuff to do in demo...

- Implement searching
- Implement service to get books from API
- Implement adding a book
- Add a way to generate client-side models from C# models
- Add a way to generate Angular services from Web API controllers    
- **BONUS:** Implement lists (creating, getting, viewing)
    
## Models

**Book**

```typescript
export class Book {
    
    public id: number = 0;
    public title: string = null;
    public author: string = null;
    public added: Date = null;
    public tags: string[] = [];
    public lists: string[] = [];
}
```

**SearchResult**

```typescript
export class SearchResult {
    
    public id: number = 0;
    public title: string = null;
    public author: string = null;

}
```