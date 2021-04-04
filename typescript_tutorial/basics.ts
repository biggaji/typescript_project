// You need to have nodejs installed on your machine before you can use typescript.

// Install nodejs from nodejs.org.

// Then open your computer terminal and run 'npm install -g typescript': this command installs typescript globally.

// create a file with a .ts extension : e.g. index.ts.

// then compile it with a command 'tsc index.ts' : this would output an index.js file.

// A type is the concept of describing which values can be passed to a function, variable, object e.t.c and ehich will crash.

// static type checking
// Having a tool to check our code for bugs before it runs, that us what a static type checker does.

//Static type systems describes the shape and behaviour of what our values wiil be when we run our programs.

// A type checker like typescript uses that information and tells us when things might go wrong.

// Example
// this tells typescript that someNumber is expecting a typeof number to be stored in it.
let someNumber: number;

// so if i try storing another type it give an error, try assigning an string array to it. uncomment to see  message : Type 'string[]' is assignable to type 'number'. 

// someNumber = ["Tobi Ajibade"];


// Error Emition
// To tell typescript not to output a file if there is an error, in tsconfig.json, set "noEmitOnError": true, or add it to the complier command, when you run it using tsc filename.ts --noEmitOnError

// Explicit type

// When you manually assign type to codes, we are explicitly setting those types on it e.g. index

function greet(person:string, date: Date): string {
    return `Hi, ${person}! Todays date is ${date}`;
}

// what we did was add types annotations on person and date to describe what values greet can be called with.

// But we don't always have to explicitly set the type, in many cases, typescript can just infer (i.e. "figure out") the type for us even if we omit it.

let username = "bigg_aji";
        // ^ username:string