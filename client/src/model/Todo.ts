export interface TodoModel {
    completed: boolean;
    date: Date;
    todo: string;
    tags?: string[];
    mentions?: string[];
    coveredInBear: boolean;
    trackedInOmni: boolean;
}

let mentionRegex = /#[A-Za-z0-9\-\.\_]+/g;
let tagsRegex = /@[A-Za-z0-9\-\.\_]+/g;

export default class Todo implements TodoModel{
    todo: string;

    mentions: string[] = [];
    tags: string[] = [];
    
    coveredInBear: boolean;
    trackedInOmni: boolean;
    completed: boolean;
    date: Date; 

    constructor(newTodo: string, date?: string ) {
        let mentionMatch = newTodo.match(mentionRegex);
        if (mentionMatch) {
            this.mentions = mentionMatch;
            newTodo = newTodo.replace(mentionRegex,'');
        }

        let tagsMatch = newTodo.match(tagsRegex);
        if (tagsMatch) {
            this.tags = tagsMatch;
            newTodo = newTodo.replace(tagsRegex,'');
        }

        this.todo = newTodo;
        this.coveredInBear = false;
        this.trackedInOmni = false;
        this.completed = false;
        this.date = date ? new Date(date) : new Date();
    }

    public getTodoFormatted(dislayPreferences: []): string {
        return `${this.todo} ${this.mentions.join(" ")} ${this.tags.join(" ")}`;
    }
 
    public getDateFormatted(): string {
         let year = this.date.getFullYear();
         let month = (1 + this.date.getMonth()).toString().padStart(2, '0');
         let day = this.date.getDate().toString().padStart(2, '0');
   
     return month + '-' + day + '-' + year;
     }
}