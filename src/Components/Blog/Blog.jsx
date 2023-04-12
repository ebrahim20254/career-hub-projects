import React from 'react';

const Blog = () => {
    return (
      <div className="container mt-14 bg-indigo-50 py-10 rounded-xl px-5">
        <h1 className="text-4xl">When should you use context API?</h1>
        <p className="text-lg font-semibold text-slate-500">
          By using the Context API, you can avoid prop drilling and simplify
          your code by providing a central location to manage the state of your
          application. However, it's important to keep in mind that the Context
          API should not be overused and should only be used for global state
          that is shared across multiple components. For local state or state
          that is only used within a single component, it's best to use
          component state or other React state management solutions like Redux
          or MobX.
        </p>
        <h1 className="text-4xl mt-10">What is a custom hook?</h1>
        <p className="text-lg font-semibold text-slate-500">
          In React, a custom hook is a JavaScript function that uses one or more
          built-in hooks and/or other custom hooks to provide a reusable piece
          of logic that can be used by multiple components in a React
          application. Custom hooks allow developers to abstract away complex
          logic that is used by multiple components and create a reusable hook
          that can be shared across different parts of an application. Custom
          hooks can be used to encapsulate stateful logic, like fetching data
          from an API or managing form input state, or even more generic
          functionality, like managing timeouts and intervals.
        </p>
        <h1 className="text-4xl mt-10">What is useRef?</h1>
        <p className="text-lg font-semibold text-slate-500">
          In React, the useRef hook is a built-in hook that allows you to create
          a mutable reference that persists between renders of a component. It
          provides a way to access and manipulate the properties of a DOM
          element or any other value that is stored outside of the component's
          state. useRef works by returning a mutable ref object, which can hold
          any value. The current property of the ref object can be updated
          without triggering a re-render of the component.
        </p>
        <h1 className="text-4xl mt-10">What is useMemo?</h1>
        <p className="text-lg font-semibold text-slate-500">
          In React, the useMemo hook is a built-in hook that allows you to
          memoize the result of a function, preventing expensive re-computations
          when a component re-renders. useMemo works by taking a function and an
          array of dependencies as arguments. The function is only executed when
          one of the dependencies has changed since the last render. Otherwise,
          useMemo returns the cached value from the previous render.
        </p>
      </div>
    );
};

export default Blog;