import React, { createContext, useState } from 'react';


//defining a new data type called CommentContextValue that specifies the shape of the data that will be stored in the context. 
//CommentContextValue type has two properties: comments and addComment
type CommentContextValue = {
  comments: Record<number, Comment[]>;
  addComment: (projectId: number, personName: string, text: string, date: Date) => void;
};


//creates a default value for the CommentContextValue type. 
//initializes the comments property to an empty object, and addComment to an empty function.
const defaultCommentContextValue: CommentContextValue = {
  comments: {},
  addComment: () => {},
};


//creates a new context called CommentsContext using the createContext function from the react library. 
//The CommentsContext context is typed as having a value of type CommentContextValue 
//and is initialized to the defaultCommentContextValue.
export const CommentsContext = createContext<CommentContextValue>(defaultCommentContextValue);


//defines a new data type called CommentsProviderProps, 
//which specifies the shape of the props that will be passed to the CommentsProvider component. 
//CommentsProviderProps has one property called children, which is typed as React.ReactNode.
type CommentsProviderProps = {
  children: React.ReactNode;
};

//defines a new component called CommentsProvider. It is exported from the module using the export keyword. 
//The component is a function component that accepts one prop, children, which is typed as React.ReactNode.


export const CommentsProvider: React.FC<CommentsProviderProps> = ({ children }) => {


  //uses the useState hook to declare a new state variable called comments, 
  //which will hold the comment data in the context. 
  //The useState hook returns an array containing the current value of comments 
  //and a function to update it, setComments. 
  //The comments variable is initialized with an empty object.
  
  const [comments, setComments] = useState<Record<number, Comment[]>>({});

  //defines a function called addComment that takes four parameters: projectId, personName, text, and date. 
  //This function will be called when someone adds a new comment.

  const addComment = (projectId: number, personName: string, text: string, date: Date) => {
    // ...
  };


  //creates a new object called contextValue that has two properties: comments and addComment. 
  //comments is set to the current value of the comments state variable, 
  //and addComment is set to the addComment function defined above.
  const contextValue: CommentContextValue = {
    comments,
    addComment,
  };

  //returns a JSX element that renders the CommentsContext.Provider component
  return (
    <CommentsContext.Provider value={contextValue}>
      {children}
    </CommentsContext.Provider>
  );
};
